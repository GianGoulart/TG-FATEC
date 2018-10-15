module.exports = { 
    config: {     
      colors: [
        "rgba(0,25,125,0.5)",
        "rgba(25,217,255,0.5)",
        "rgba(102,255,255,0.5)",
        "rgba(179,0,59,0.5)",
        "rgba(68,0,102,0.5)",
        "rgba(191,128,255,0.5)",
        "rgba(255,179,255,0.5)"        
      ],
      chartOptions:{
        scaleBeginAtZero : true,

        //Boolean - Whether grid lines are shown across the chart
        scaleShowGridLines : true,
    
        //String - Colour of the grid lines
        scaleGridLineColor : "rgba(0,0,0,.05)",
    
        //Number - Width of the grid lines
        scaleGridLineWidth : 1,
    
        //Boolean - Whether to show horizontal lines (except X axis)
        scaleShowHorizontalLines: true,
    
        //Boolean - Whether to show vertical lines (except Y axis)
        scaleShowVerticalLines: true,
    
        //Boolean - If there is a stroke on each bar
        barShowStroke : true,
    
        //Number - Pixel width of the bar stroke
        barStrokeWidth : 2,
    
        //Number - Spacing between each of the X value sets
        barValueSpacing : 5,
    
        //Number - Spacing between data sets within X values
        barDatasetSpacing : 1,
        
        bezierCurve : true,

        //Number - Tension of the bezier curve between points
        bezierCurveTension : 0.4,

        //Boolean - Whether to show a dot for each point
        pointDot : true,

        //Number - Radius of each point dot in pixels
        pointDotRadius : 4,

        //Number - Pixel width of point dot stroke
        pointDotStrokeWidth : 1,

        //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
        pointHitDetectionRadius : 20,

        //Boolean - Whether to show a stroke for datasets
        datasetStroke : true,

        //Number - Pixel width of dataset stroke
        datasetStrokeWidth : 2,

        //Boolean - Whether to fill the dataset with a colour
        datasetFill : true,

        //Boolean - Whether to horizontally center the label and point dot inside the grid
        offsetGridLines : false,
        responsive: true

      }
    }
  };