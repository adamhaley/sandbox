define([
	
	'backbone'
	, 'underscore'
	, 'jquery'
	
	],function(

		Backbone
		, _
		, $

		){

		 var tripModel = Backbone.Model.extend({
            initialize: function() {}
            , urlRoot: 'http://localhost/smileage/services/getTripInfo.json'
            , getTripInfo: function(){

            }
            , statusMessages: function(){

            }
            , suggestedLocations: function(){

            } 
            , getPunchInfo: function(){

            }
            , getStatusMessageInfo: function(){

            }
            , getLatLonByTimestamp: function(){

            }
            , getSummaryInfo: function(){

            }
            , suggestLocation: function(){

            }
            , deleteSuggestedLocation: function(){

            }
    	});
		return tripModel;

});