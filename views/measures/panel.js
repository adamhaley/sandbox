define([
  'order!jQuery',
  'order!jQueryUI',
  'Underscore',
  'Backbone',
  'collections/measuresList',
  'models/colors',
  'text!templates/measures/panel.tpl',
  'text!templates/measures/colors.tpl'
], function($, ui,  _, Backbone, measuresList, colorsModel, measuresPanelTemplate,colorStylesTemplate){

  var measuresPanelView = Backbone.View.extend({
    initialize: function(){
		_.bindAll(this, "render");
		var collection = this.collection;
		collection.bind('reset',this.render);
		collection.fetch();	
	},
	collection: new measuresList,
	colorsModel: function(){ return new colorsModel},
	el: $("#data-selector"),
    colorStylesEl: $("#template-panel-colors"),
	render: function(options){
		console.log('in render..');
		var m = '{"measures":' + JSON.stringify(this.collection) + '}';
		var out = _.template(measuresPanelTemplate, JSON.parse(m));
		this.el.find('#measures-panel').html(out);

		var cm = this.colorsModel();
		var colorArray = cm.get('colorArray');
		
		var styles = _.template(colorStylesTemplate,JSON.parse('{"colors":' + JSON.stringify(colorArray) + '}'));

		this.colorStylesEl.html(styles);
		this.addEvents();
	},
	addEvents: function(){	
		//console.log('adding events.');
	   	var el = this.el;
        var measureLeaf = el.find('li.ui-draggable > a');
        var control = el.find('#data-selector-control');
        var seriesManager = el.find('#series-manager');

		measureLeaf.hover(function(e){
        	$(e.currentTarget).addClass('selected-measure');
		},
		function(e){
			if(!$(e.currentTarget).hasClass('sticky')){
				$(e.currentTarget).removeClass('selected-measure');
			}
		});
	
		measureLeaf.click(function(e){
			console.log(e);
			e.preventDefault();

			var measures = el.find('a.sticky');
	
            var currentTarget = $(e.currentTarget);

			//console.log(currentTarget);
	        if(e.metaKey || e.ctrlKey) {
				//console.log('meta/ctrl key pressed');
				if(currentTarget.hasClass('sticky')){
					currentTarget.removeClass('selected-measure sticky')
				}else{
					currentTarget.addClass('selected-measure sticky');
				}
			}
			else if(e.shiftKey) {
				//console.log('shift key pressed');
				currentTarget.addClass('selected-measure');				

				//find out if currentTarget is above/below previous group
				var allMeasures = el.find('.measure:not(.group) > a');		
				//console.log(allMeasures);		
				//console.log(measures);
				var index = allMeasures.index(currentTarget);
				var groupIndex = allMeasures.index(measures);
				//if above select all between 1st in previous group and current
				if(index > groupIndex){
					//console.log('DOWN!');
					for(i = groupIndex;i<index;i++){
						$(allMeasures[i]).addClass('selected-measure sticky');
					}
				}else{
					//console.log('UP!');
					for(i = index;i<groupIndex;i++){
                        $(allMeasures[i]).addClass('selected-measure sticky');
                    }
				}
			} else {
				var allMeasures = el.find('.measure:not(.group) > a').removeClass('selected-measure sticky');
			}
			
			if (!e.metaKey && !e.ctrlKey){
				currentTarget.addClass('selected-measure sticky');
 			}
			
		});
		control.click(function(e){
			//console.log('in click!');
			el.find('#measures-panel').toggleClass('panelVisible').toggleClass('panelHidden');

		});
		measureLeaf.mousedown(function(e){
			//console.log(e);
		});
		measureLeaf.mousemove(function(e){
			//console.log(e);	
			
		});
		measureLeaf.draggable({
				
					opacity : 1,
					zIndex : 1000 ,

					helper : function(e){
					//console.log('in helper');
						//console.log(e);
						var selected = el.find('li a.sticky');

						//console.log(selected)
						if (selected.length === 0) {
						      selected = $(this);
						}

						var container = $('<ul />').attr('style','width:200px').attr('id','draggingContainer');
						container.append(selected.clone());
					    return container;
					}
		});
       
 		seriesManager.droppable({

            drop: function(e,ui) {
	
                $(this).append($(ui.helper.children()));
               
        	}
		});
		
	}
  });
  return measuresPanelView;
});
