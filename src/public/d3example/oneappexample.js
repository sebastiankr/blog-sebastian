(function () {
    "use strict";
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
                return null;})
          .transition().duration(800)
            .style("color","black");

        //ENTER
        cell.enter()
          .append("td")
            // save the prev value  
            .attr("data-prevVal", function(d){return d;})
            .text(function (d) {return d;});
    };

    renderLoop(data);
    
    // register update button and update a random 
    // log count
    d3.select("#updateapp1").on("click", function () {
        data[getRandomInt(1, 6)] += 1;
        renderLoop(data);
    });
    
    // helper to return random number between min and 
    // exclusive max
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

})();