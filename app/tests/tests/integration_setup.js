require('ember');
require('ember-data/lib/main');
require('ember-qunit/main').globalize();
require('ember-qunit-utils');


var AppResolver = require('app/system/resolver')['default'];




Ember.ENV.LOG_MODULE_RESOLVER = false;
App = require('app/system/application')['default'];
App.initializeAll();

window.App = App.create({});
App.rootElement = '#ember-testing';
App.setupForTesting();
App.injectTestHelpers();

var namespace = App;
var resolver = AppResolver.create({
  namespace: namespace
});

