var forceDirectedTree = function(data){
  am4core.ready(function() {

  // Themes begin
  am4core.useTheme(am4themes_animated);
  // Themes end

  var chart = am4core.create("chartdiv", am4plugins_forceDirected.ForceDirectedTree);
  var networkSeries = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries())

  chart.data = data;

  networkSeries.dataFields.value = "value";
  networkSeries.dataFields.name = "name";
  networkSeries.dataFields.color = "color";
  networkSeries.dataFields.children = "children";
  networkSeries.nodes.template.tooltipText = "{name}:{value}";
  networkSeries.nodes.template.fillOpacity = 1;

  networkSeries.nodes.template.label.text = "{name}"
  networkSeries.fontSize = 10;

  networkSeries.links.template.strokeWidth = 1;

  var hoverState = networkSeries.links.template.states.create("hover");
  hoverState.properties.strokeWidth = 3;
  hoverState.properties.strokeOpacity = 1;

  networkSeries.nodes.template.events.on("over", function(event) {
    event.target.dataItem.childLinks.each(function(link) {
      link.isHover = true;
    })
    if (event.target.dataItem.parentLink) {
      event.target.dataItem.parentLink.isHover = true;
    }

  })

  networkSeries.nodes.template.events.on("out", function(event) {
    event.target.dataItem.childLinks.each(function(link) {
      link.isHover = false;
    })
    if (event.target.dataItem.parentLink) {
      event.target.dataItem.parentLink.isHover = false;
    }
  })

  }); // end am4core.ready()
}
