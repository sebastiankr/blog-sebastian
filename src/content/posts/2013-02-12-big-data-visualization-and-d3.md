---
slug: 2013-02-12-big-data-visualization-and-d3
title: "Big Data visualization and D3"
template: post.hbs
date: 2013-02-12
categories: [JavaScript, D3, Visualization, Big Data]
author: Sebastian Kropp
---


[D3.js](http://d3js.org/) is a great JavaScript library to visualize data. Visualization is an overlooked aspect of the Big Data picture. The real value of data is to gain an understanding and act accordingly. Visualization is a great way to make data understandable.

Additionally, as we look closer at "Velocity" as one of the 3Vs of Big Data, we need mechanisms to ingest and show events immediately. We need libraries that are compatible with our Event-driven architectures. Hey, we finally have WebSockets, let's use them! Maintaining report schedules and running batch processes is so 1990ies and a huge overhead. 

<figure class="floatCenter">
	<img style="" src="/images/d3/d3theme.jpg" alt="D3 Theme">
	<figcaption>D3 Theme</figcaption>
</figure>

<!--fold-->
The D3 programming model is declarative and the developer is in full control to express data visually. It has many benefits over other libraries in this area:

- easy to show changes in data (updates and transitions)
- powerful declarative model
- easy to learn (lots of [examples](https://github.com/mbostock/d3/wiki/Gallery))
- manipulates native DOM elements (reuse your knowledge in CSS, HTML, SVG)
- very modular (you do not need everything)
- composable (plays nice with others)

## How does it compare to JQuery or MVC/MVVM concepts like Angular.js or Knockout.js?
There is a substantial overlap between these three library concepts. The all have a different focus. But it is sometimes not easy to decide in which case to use which library. They can be used together of course, but here are some guidelines to help you decide.

### JQuery
D3 can do a lot of what JQuery does in a similar way. Granted, it does not have such a rich gallery of plugins that make JQuery ideal for rapid development. But D3 can be used to attach event handlers to any DOM element or make AJAX data calls as well. JQuery is imperative and gets hard to maintain. I have not worked on a maturing D3 codebase as much as I had to fix bloated JQuery code. Because of D3's declarative nature I am sure that D3 code will not get messy as fast as JQuery code.

### Angular.js/Knockout.js  
Contrary to Angular or Knockout, D3 is not based on templates. These templates help to understand the initial DOM. D3 could be used with an initial DOM structure as well, it is better to completely construct the part of the DOM from scratch. This helps to create encapsulated modules. These modules could be used/attach on any host element in the DOM. It is probably easy to inject D3 functionality into the [Shadow DOM](http://www.w3.org/TR/shadow-dom/), once they are supported by all browsers. If data is changing the initial template completely, templates could be counterproductive. An example would be you start with a `table` and get data that requires you to switch over to a `SVG`. Angular.js offers obviously much more in terms of MVC encapsulation, site navigation/history etc. But it is amazing how much similarity and overlap there is. Core to all of them is the data binding and selectors. D3 is the only real declarative option. There are still a lot of for loops in Angular/Knockout templates. You could probably tweak Angular to do the same things as D3 and vice versa. But I would recommend using the different libraries in conjunction and use them according to their respective focus. And yes agreed, that is sometimes easier said than done, especially with Angular.js.

There are also some downsides to D3. There is this issues that all these libraries have with SEO. Or rather it is Google's and Bing’s problem that their crawlers are not indexing JavaScript generated DOMs. This has to change! Another issue with D3 is that it is sometimes hard to understand the side effects, especially if working with nested data. For example if you have multiple pie charts which need to appear and disappear, and these charts have changing data themselves. This is especially hard for programmers who have little experience with functional languages/concepts.

Hopefully I will be able to find some time to write a post about update patterns on nested data eventually to show you how this can be done with D3.

**[Update 05/22/2013]** 
*I finally got around to write something up. Have a look at [D3 Update Pattern on Nested Data](/2013-09-04-d3-update-pattern-on-nested-data). This will help you to understand how to handle updates to nested data.* 
