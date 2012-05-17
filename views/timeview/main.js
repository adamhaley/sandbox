define([
  'jQuery',
  'Underscore',
  'Backbone',
  'views/measures/panel',
  'text!templates/timeview/main.tpl'
], function($, _, Backbone, measuresPanelView, mainTimeViewTemplate){
  
	var mainHomeView = Backbone.View.extend({
    initialize: function(){
		_.bindAll(this, "render");
	},
	el: $('body'),
    render: function(){
    }
  });
  return mainHomeView;
});
