define([],
	function(){
		//dla.smileage namespace
		var dla = {
			smileage: {}
		}

		//config
		dla.smileage.config =  {
			syncInterval: 5//how often to poll the service in seconds
			, defaultTimelineLength: 1200 //default length of timeline in seconds
		}



		return dla;
});