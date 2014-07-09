var BarChartView = Ember.Component.extend({

  content: null,
  tagName: 'svg',

  drawChart: function() {

    console.log('drawing chart');

    var content = this.get('content');
    if (!content) return;

    var width = 5000,
        height = 500;
    
    var svg = d3.select(this.get('element'))
      .attr('width', width)
      .attr('height', height);

    var barWidth = 25;

    svg.selectAll('rect')
       .data(content)
       .enter()
       .append('rect')
       .attr({ 
         'class': 'bar',
         x: function(d, i) {
           return i*barWidth + i*2;
         },
         y: function(d, i) {
           return height - d;
         },
         width: function(d, i) {
           return barWidth;
         },
         height: function(d, i) {
           return d;
         },
         fill: function(d, i) {
           return (d > 15 ) ? 'red' : 'blue';
         }
       });



  }.on('didInsertElement')

});

export default BarChartView;
