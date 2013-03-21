define([
	
	'backbone'
	, 'underscore'
	, 'jquery'	
	
	],function(
		
		Backbone
		, _
		, $
		
		){

		var mapView = Backbone.View.extend({
            el: $('map')
            , events: {

            }
            , initialize: function(){
                 _.bindAll(this, 'render');
                this.model.bind('reset',this.render);
            }
            , render: function(){
                console.log('in map.render()');
            }
           
    	});

		return mapView;

});