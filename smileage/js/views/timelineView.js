define([
	'backbone'
	, 'underscore'
	, 'jquery'
	, 'mustache'
	, 'text!templates/timeline.tpl'
	
	],function(
		Backbone
		, _
		, $
		, Mustache
		, template

		){

		var timelineView = Backbone.View.extend({
            el: $('#timeline')
            , events: {

            }
            , initialize: function(){
                _.bindAll(this, 'render');
                this.model.bind('reset',this.render);
            }
            , render: function(){
                
                console.log('in timeline.render()');
 				
                //get config object
 				var config = this.options.dla.smileage.config;

 				//render template
                var html = Mustache.render(template,this.model.attributes);

                console.log(html);

				this.$el.html(html);


				//calculate position on the timeline
				var drives = this.model.get('drives')
            	, tripStartTime = drives[0].startTime
            	, now = Math.round(new Date().getTime() / 1000)
            	, timeSinceStart = now - tripStartTime
            	, defaultTimelineLength = config.defaultTimelineLength
				, pos = (timeSinceStart / defaultTimelineLength) * 100
				;
            	
            	$('#timeline-trip').css('width',pos + '%');

            	console.log(now);
            	console.log(timeSinceStart);
			}
           
        });

		return timelineView;

});