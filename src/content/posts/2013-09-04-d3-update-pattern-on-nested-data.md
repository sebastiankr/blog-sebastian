---
slug: 2013-09-04-d3-update-pattern-on-nested-data
title: "D3 Update Pattern on Nested Data"
template: post.hbs
date: 2013-08-22
categories: [JavaScript, D3, visualization, Big Data, Bootstrap]
author: Sebastian Kropp
---

This post builds on Mike Bostock's great [tutorial on how selection works on nested data](http://bost.ocks.org/mike/nest/) and his [series on the update pattern](http://bl.ocks.org/mbostock/3808218). To make the example more realistic, let us build a table that shows counts of log messages for different applications and for the severity levels `DEBUG`, `INFO`, `WARN`, `ERROR`, and `FATAL`. The table will update itself to changes in the log count data. Messages could be pushed by WebSockets, but we will just simulate this for now.
<!--fold-->
Here is how the finished logging table application looks like. Feel free to play around with it. 
You can easily adapt this pattern to show nested bar charts or similar.

<a id="addapp" class="btn btn-default" role="button">
    <i class="fa fa-plus" aria-hidden="true"></i> Add App
</a>
<a id="removeapp" class="btn btn-default" role="button">
    <i class="fa fa-minus" aria-hidden="true"></i> Remove App
</a>
<a id="updateapp" class="btn btn-default" role="button">
    <i class="fa fa-pencil" aria-hidden="true"></i> Update message count
</a>
<div id="nestedUpdateExample"></div>

Let us now reconstruct the code piece by piece and start with looking at only one application. The first goal is to update individual counts. The HTML for the table looks like this.

```html
<table class="table table-striped">
  <thead>
    <tr>
      <td>Application Name</td>
	  <td>DEBUG</td>
      <td>INFO</td>
	  <td>WARN</td>
	  <td>ERROR</td>
	  <td>FATAL</td>
	</tr>
  </thead>
  <tbody>
    <tr id="Application1"></tr>
  </tbody>
</table>
```

This `table` uses Bootsrap CSS classes to make it look a little nicer.  
We are now just hooking us into the `DOM` at `<tr id="Application1"></tr>` to create the `<td>`'s on `ENTER` and change the text of the `<td>` on update. This is what is needed to make it work with just a few lines of code.

```js
var data = ["Application1", 2, 3, 4, 5, 6];
    
// this is the rendering loop
// similar to a game loop 
function renderLoop(data) {
  // select the row with the id='Application'
  var row = d3.select("#Application1");
  var cell = row.selectAll("td").data(data);

  // UPDATE
  cell
    .text(function (d) {return d;})
    .transition().duration(800)
    .style("color", function(d) {
      if (d3.select(this).attr("data-prevVal") != d) {
        d3.select(this).attr("data-prevVal", d);
          return "red";
        }
        return null;
	  })
    .transition().duration(800)
    .style("color","black");
  
  // ENTER
  cell.enter()
    .append("td")
    .attr("data-prevVal", function(d){return d;})
    .text(function (d) {return d;})};

renderLoop(data);
```

This is all normal D3, except that in order to make the changed values light up in red, we have to store the previous value for that cell and compare it with the old one. We have to do that because despite its name `UPDATE`, D3 is not really detecting updates on the individual value level. `UPDATE` is executing on each element in the row where a change has occurred and we do not want every cell transition to red.  
We store the value in the `DOM` with the attribute `data-prevVal`. Depending on your situation, it might be a better to store these previous values in the property of the javascript `DOM` element representation itself. This is how D3 does it with the `__data__` property.  
Additionally it would be better to use the `selection.filter()` function to prevent `UPDATE` to fire on the values that have not really changed. But this is advanced and harder to understand.

This is how `table` looks like for one application:

<a id="updateapp1" class="btn btn-default" role="button">
    <i class="fa fa-pencil" aria-hidden="true"></i> Update message count
</a>

<table class="table table-striped">
    <thead>
        <tr>
            <td>Application Name</td>
            <td>DEBUG</td>
            <td>INFO</td>
            <td>WARN</td>
            <td>ERROR</td>
            <td>FATAL</td>
        </tr>
    </thead>
    <tbody>
        <tr id="Application1"></tr>
    </tbody>
</table>

http://jsfiddle.net/skropp/bkr4ao09/1/

Calling the `renderLoop` all the time we change `data` is a very imperative style of programing. What we actually want is that it automatically re-renders when `data` changes. We could achieve that by using libraries like [RxJS](http://reactive-extensions.github.io/RxJS/) and make `data` an `Observable` collection.

Most of the time your JavaScript app is not receiving data in this simple array fashion of `var data = ["Application1", 2, 3, 4, 5, 6]`. It is likely going to look more like this.

```json 
{
    "name":"Application1",
    "logCounts": {
        "DEBUG": 8,
        "INFO": 12,
        "WARN": 32,
        "ERROR": 47,
        "FATAL": 5
    }
},
{
    "name":"Application2",
    "logCounts": {
    
...
```

You now have two option to adjust to that schema. One is to transform the data into a simple array whenever you receive these types of messages. The other way is to create the schema on read within D3 `selection.data()` function.

```js
// UPDATE cell level
var cell = row.selectAll("td").data(function (d) {
  var rowdata = [{
    name: "app",
    value: d.name
  }];
  return rowdata.concat(keys.map(function (keyname) {
    return {
      name: keyname,
      value: d.logCounts[keyname]
    };
  }));
});
```

This creates a name-value collection on the fly. Inside our `UPDATE` and `ENTER` sections we now reference `d.name` and `d.value`.

```js
cell
  .text(function (d) {return d.value;})
...
// ENTER cell level
cell.enter()
  .append("td")
  .attr("data-prevVal", function(d){return d.value;})
  .text(function (d) {return d.value;});        
```
The other change that you will see in the code is that the `table` is created from scratch with D3. We cannot work with static `table` template on the page because we display a message once if there is no data coming in.

```js
if (data.length > 0) {
  // remove err msg if it was shown previously
  tablediv.select("#logtableerrmsg").remove();
  keys = d3.keys(data[0].logCounts);

  // create table if table does not exist
  if (!table.node()) {
    table = tablediv
      .append("table")
      .attr("id", "logtable")
      .attr("class", "table table-striped");
   table.append("thead").selectAll("tr").data(function () {
     // Add "Application Name" to the header data
     var headerRowData = ["Application Name"];
     return headerRowData.concat(keys);
   })
  // ENTER row level (for table header)
  .enter()
  .append("td").text(function (d) { return d;});
  tbody = table.append("tbody");
```

Have fun coding!
<script type="text/javascript" src="http://d3js.org/d3.v3.min.js"></script>
<script type="text/javascript" src="/public/d3example/createtable.js"></script>
<script type="text/javascript" src="/public/d3example/oneappexample.js"></script>
