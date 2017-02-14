(function () {
    "use strict";
    var data = [];
    data.push({name: 'Application1', logCounts: {DEBUG: 8, INFO: 12, WARN: 32, ERROR: 47, FATAL: 5} });
    data.push({name: 'Application2', logCounts: {DEBUG: 1, INFO: 2, WARN: 3, ERROR: 4, FATAL: 5} });
    data.push({name: 'Application3', logCounts: {DEBUG: 14, INFO: 221, WARN: 33, ERROR: 44, FATAL: 57} });
    
    // helper to return random number between min and exclusive max
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    // helper to create random application names
    function makeid() {
        var text = "",
            possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
            i;
        
        for (i = 0; i < getRandomInt(5, 10); i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        
        return text;
    };

    function renderLoop(data) {
        var tablediv = d3.select("#nestedUpdateExample"),
            table = tablediv.select("#logtable"),
            keys,
            tbody;

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
                table
                  .append("thead").selectAll("tr").data(function () {
                    // Add "Application Name" to the header data
                    var headerRowData = ["Application Name"];
                    return headerRowData.concat(keys);
                })
              // ENTER row level (for table header)
              .enter()
                .append("td").text(function (d) { return d;});
                tbody = table.append("tbody");
            } else {
                tbody = table.select("tbody");
            }
            
            // UPDATE row level
            var row = tbody.selectAll("tr").data(data);
            
            // ENTER row level (new application coming in)
            row.enter().append("tr");
            
            // EXIT row level
            row.exit().remove();
            
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
            cell
              .text(function (d) {return d.value;})
              .transition().duration(500)
                .style("color", function(d) {
                    if (d3.select(this).attr("data-prevVal") != d.value) {
                        d3.select(this).attr("data-prevVal", d.value);
                        return "red";
                    }
                    return null;})
              .transition().duration(500)
                .style("color","black");            

            // ENTER cell level
            cell.enter()
              .append("td")
                .attr("data-prevVal", function(d){return d.value;})
                .text(function (d) {return d.value;});
            
        } else {
            tablediv.select("#logtable").remove();
            if (!tablediv.select("#logtableerrmsg").node()) {
                tablediv
                  .append("p")
                    .attr("id", "logtableerrmsg").text("Error: No data to display!")
                  .transition().style("color", "red");
            }
        }
    };

    renderLoop(data);

    d3.select("#updateapp").on("click", function () {
        if (data.length > 0) {
            var rndLogCounts = data[getRandomInt(0, data.length)].logCounts;
            var keys = d3.keys(rndLogCounts);
            rndLogCounts[keys[getRandomInt(0, keys.length)]] += 1;
            renderLoop(data);
        }
    });

    d3.select("#addapp").on("click", function () {
        data.push({
            name: makeid(),
            logCounts: {
                DEBUG: getRandomInt(0, 60),
                INFO: getRandomInt(0, 60),
                WARN: getRandomInt(0, 60),
                ERROR: getRandomInt(0, 60),
                FATAL: getRandomInt(0, 60)
            }
        });
        renderLoop(data);
    });

    d3.select("#removeapp").on("click", function () {
        data.pop();
        renderLoop(data);
    });
})();