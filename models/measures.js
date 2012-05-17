define([
  'Underscore',
  'Backbone'
], function(_, Backbone) {
  var measuresModel = Backbone.Model.extend({
    defaults: {
		id: 1,
		name: "Default Measure",
		color: "#915B97",
		parentId: 1,
		studyId: 1
	}
  });
  return measuresModel;

});
