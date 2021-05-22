d3.json("samples.json").then(function(data) {
    console.log(data);
  var single = data.samples[0]



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
    });
}

function bubbleChart(values) {
    d3.json("samples.json").then(function(data) {
       
  var bubbleData;

  var trace2 = {
      x: bubbleData.otu_ids,
      y: bubbleData.sample_values,
      type: "scatter"
    };
    
    // Create the data array for the plot
    var data = [trace2];
    
    // Define the plot layout
    var layout = {
      title: "OTU Bubble Chart",
      xaxis: { title:  "OTU id"},
      yaxis: { title: "Value" }
    };
    
    // Plot the chart to a div tag with id "bubble"
    Plotly.newPlot("bubble", data, layout);
    });    
}