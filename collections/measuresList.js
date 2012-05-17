define([
  'jQuery',
  'Underscore',
  'Backbone',
  'models/measures'
], function($, _, Backbone, measuresModel){
  var measuresList = Backbone.Collection.extend({
    model: measuresModel,
	//url: 'http://50.57.112.150:401/measures/study/ckmmv',
    url: 'services/measures.json',
	initialize: function(options){

	}
  });

  return measuresList;
});
