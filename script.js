d3.json("samples.json").then(function(data) {
    console.log(data);
  var single = data.samples[0]
bubbleChart()


    // Select the input value from the form
    var selectTag = d3.select("#selDataset")

    for (let i = 0; i < data.names.length; i++) {
      selectTag.append('option').text(data.names[i]).property('value',data.names[i] )
        
    }
  
  
});

function optionChanged(names) {
    console.log('Get the person!!', names)

    d3.json("samples.json").then(function(data) {
        console.log('Loaded json file second time~!',data);
      var single = data.samples[0]

    var dataForSinglePerson;

    for (let i = 0; i< data.samples.length; i++) {
        console.log('each sample in loo[p~!!!', data.samples[i])
        if(data.samples[i]){
        console.log('this is i', i)
        if (names === data.samples[i].id){
            dataForSinglePerson = data.samples[i]

        }
    }
    
    }
    console.log('We found a match!!', dataForSinglePerson)
    
    function buildTable(age, bbtype, ethnicity, gender, id, location) {
        var table = d3.select("#sample-metadata");
        var tbody = table.select("panel-body");
        var trow;
        for (var i = 0; i < 12; i++) {
          trow = tbody.append("tr");
          trow.append("td").text(age[i]);
          trow.append("td").text(bbtype[i]);
          trow.append("td").text(ethnicity[i]);
          trow.append("td").text(gender[i]);
          trow.append("td").text(id[i]);
          trow.append("td").text(location[i]);
        }
      }
    

  var trace1 = {
      x: dataForSinglePerson.otu_ids,
      y: dataForSinglePerson.sample_values,
      type: "bar"
    };
    
    // Create the data array for the plot
    var data = [trace1];
    
    // Define the plot layout
    var layout = {
      title: "Top 10 OTUs",
      xaxis: { title:  `Data for ${dataForSinglePerson.id}`},
      yaxis: { title: "Value" }
    };
    
    // Plot the chart to a div tag with id "bar"
    Plotly.newPlot("bar", data, layout);
    buildTable()
    
    });
}

    function bubbleChart(names) {
        d3.json("samples.json").then(function(data) {
           console.log("bubble data", data)
           var samples = data.samples;
           var resultArray = samples.filter(sampleObj => sampleObj.id == names);
           var result = resultArray[0];
        
        // Create the data array for the plot
      
            
      var trace2 = {
          x: result.otu_ids,
          y: result.sample.sample_values,
          type: "scatter"
        };
        console.log('x axis values are', data.names)
        console.log('y axis values are', data.samples.sample_values)

        // Create the data array for the plot
        var graphdata = [trace2];
        
        // Define the plot layout
        var layout = {
          title: "OTU Bubble Chart",
          xaxis: { title:  "OTU id"},
          yaxis: { title: "Value" }
        };
        
        // Plot the chart to a div tag with id "bubble"
        Plotly.newPlot("bubble", graphdata, layout);
        });    
        
          
    }


