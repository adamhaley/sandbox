define([
  'order!jQuery',
  'order!jQueryUI',
  'Underscore',
  'Backbone',
  'collections/testCollection',
  'text!templates/view2.tpl',
], function($, ui,  _, Backbone, testCollection, view2){

  var View2 = Backbone.View.extend({
    initialize: function(){
		_.bindAll(this, "render");
		var collection = this.collection;
		collection.bind('reset',this.render);
	},
	el: $('#view2'),
	collection: new testCollection,
	render: function(options){
		console.log('in render..');
		var m = '{"measures":' + JSON.stringify(this.collection) + '}';
		var out = _.template(view2, JSON.parse(m));
		
		this.addEvents();
	},
	addEvents: function(){	
	   	var el = this.el;
	});
		
	}
  });
  return View2;
});
