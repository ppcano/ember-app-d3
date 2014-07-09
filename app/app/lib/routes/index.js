var IndexRoute = Ember.Route.extend({
  model: function(){
      //return Ember.RSVP.reject('index error');
  },

  setupController: function (controller, model) {
    this._super(controller, model);

    var dataset = [];
    for (var i = 0; i < 25; i++) {
      var newNumber = Math.floor(Math.random() * 30); 
      dataset.push(newNumber);

    }
    
    controller.set('content', dataset); 
  },

  actions: {
    error: function(error) {
      console.log('ERROR INDEX HANDLING-------------------------');
      console.log(error);
      console.log('--------------------------------------');
    }
  }
});

export default IndexRoute;
