// Filename: router.js
define([
  'jQuery',
  'Underscore',
  'Backbone',
  'views/timeview/main',
  'views/measures/panel',
], function($, _, Backbone,mainView,measuresPanelView){
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      '/measures': 'showMeasures',
	  '/home': 'defaultAction',
      '/tests': 'runTests', 
      // Default
      '*actions': 'defaultAction'
    },
    defaultAction: function(actions){
	}
  });

  var initialize = function(){
    var app_router = new AppRouter;
    Backbone.history.start();
  };
  return { 
    initialize: initialize
  };
});
