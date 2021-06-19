var dataForSinglePerson;

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

   // var dataForSinglePerson;

    for (let i = 0; i< data.samples.length; i++) {
        console.log('each sample in loop~!!!', data.samples[i])
        if(data.samples[i]){
        console.log('this is i', i)
        if (names === data.samples[i].id){
            dataForSinglePerson = data.samples[i]

        }
    }
    
    }
    console.log('We found a match!!', dataForSinglePerson)
    
    var dataForMeta
    for (let i = 0; i< data.metadata.length; i++) {
      console.log('each metadata info in loop~!!!', data.metadata[i])
      if(data.metadata[i]){
     // console.log('this is i', i)
      if (names == data.metadata[i].id){
        console.log('HIT META IFF!!!')
          dataForMeta = data.metadata[i]

      }
  }
  
  }

  console.log('mettaaaaa', dataForMeta)

    function buildTable(data) {
      console.log('dataaaa in build table', data)
        var table = d3.select("#sample-metadata");
        table.html("")
        var tbody = table.select("panel-body");
        var trow;
       // for (var i = 0; i < 12; i++) {
          trow = tbody.append("tr");
          table.append("p").text("Age: " + data.age);
          table.append("p").text("Bbtype: " + data.bbtype);
          table.append("p").text("Ethnicity:" + data.ethnicity);
          table.append("p").text("Gender:" + data.gender);
          table.append("p").text("ID:" + data.id);
          table.append("p").text("Location:" + data.location);
       // }
      }
    buildTable(dataForMeta);

  var trace1 = [{
      values: dataForSinglePerson.otu_ids,
      labels: dataForSinglePerson.sample_values,
      type: "pie"
    }];

  var layout = {
    height: 400,
    width: 500
  };
    // Create the data array for the plot
    var data = [trace1];
    
    // Define the plot layout
    // var layout = {
    //   title: "Top 10 OTUs",
    //   xaxis: { title:  `Data for ${dataForSinglePerson.id}`},
    //   yaxis: { title: "Value" }
    // };
    
    // Plot the chart to a div tag with id "bar"
    Plotly.newPlot("pie", trace1, layout);
    
    bubbleChart()
    
    });
}

    function bubbleChart(names) {
        d3.json("samples.json").then(function(data) {
          console.log('buble chart data', data)
          console.log('We found a match Bubble!!', dataForSinglePerson)
          
          //  var samples = data.samples;
          //  console.log("samples are", samples)
          //  var resultArray = samples.filter(sampleObj => sampleObj.id == names);
          //  var result = resultArray[0];
        
        // Create the data array for the plot
                 
      var trace2 = {
          x: dataForSinglePerson.otu_ids,
          y: dataForSinglePerson.sample_values,
          text: dataForSinglePerson.otu_labels,
          //type: "box"
          mode: 'markers',
          marker: {
            size:  dataForSinglePerson.sample_values,
            color:  dataForSinglePerson.otu_ids,
            colorscale: 'Earth'
          }
        };
        console.log('x axis values are', dataForSinglePerson.names)
        console.log('y axis values are', dataForSinglePerson.sample_values)

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


