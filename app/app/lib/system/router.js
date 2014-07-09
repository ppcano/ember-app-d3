


import Router from "ember-routing/system/router";

var AppRouter = Router.extend({
  //rootURL: ENV.rootURL,
  location: 'history'
});

// application and index for free
AppRouter.map(function() {
  this.route('index', { path: '/' });
  this.route('chart1');
  this.route('chart2');
});

export default AppRouter;
