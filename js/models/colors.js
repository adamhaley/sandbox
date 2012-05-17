define([
  'Underscore',
  'Backbone'
], function(_, Backbone) {
  var colorsModel = Backbone.Model.extend({
    defaults: {
		name: "Default Colorset",
		colorArray: ['#5a116a','#94c11f','#8c8c8c','#00acb6','#fdc600','#e03288','#5a7b80','#5a116a','#94c11f','#8c8c8c','#00acb6','#fdc600','#e03288','#5a7b80','#5a116a','#94c11f','#8c8c8c','#00acb6'],
		pointer: 0	
	},
	resetPointer: function(){
		this.set({pointer:0});
	},
	getNext: function(){
		var p = this.get('pointer');
		var colorToReturn = this.get('colorArray')[p];
	    p = ( p == 17 )? 0 : p + 1;
        this.set({pointer:p});
		return colorToReturn;
	}
  });
  return colorsModel;

});
