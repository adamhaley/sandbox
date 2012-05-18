define([
  'order!jQuery',
  'order!jQueryUI',
  'Underscore',
  'Backbone',
  'text!templates/models.tpl',
], function($, ui,  _, Backbone, template){

  var View1 = Backbone.View.extend({
    initialize: function(){
		_.bindAll(this, "render");
		var collection = this.options.collection;
		collection.bind('add',this.render);
	},
	el: $('#view1'),
	render: function(options){
		console.log('rendering view1...');
		/*
		var m = '{"measures":' + JSON.stringify(this.collection) + '}';
		var out = _.template(template, JSON.parse(m));
		
		this.addEvents();
		*/
	}
  });
  return View1;
});
