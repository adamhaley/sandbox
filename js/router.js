// Filename: router.js
define([
  'jQuery',
  'Underscore',
  'Backbone',
  'views/view1',
  'views/view2'
], function($, _, Backbone,view1,view2){
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      '/measures': 'showMeasures',
	  '/home': 'defaultAction', 
      // Default
      '*actions': 'defaultAction'
    },
    defaultAction: function(actions){
		this.addEvents();
	},
	addEvents: function(){
		var col = new Backbone.Collection;
		var v1 = new view1({collection : col});	
		var v2 = new view2({collection : col});

		$('#button').click(function(){
			col.add({name:'Flying Dutchman'});
			console.log(col.models);
		});
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
