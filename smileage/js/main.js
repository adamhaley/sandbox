requirejs.config({
    baseUrl: 'js/'
    , paths: {
       text: 'libs/text'
       , templates: '../templates'
       , channel:  'https://talkgadget.google.com/talkgadget/channel'
       , jquery: 'libs/jquery-1.9.0.min'
       , backbone: 'libs/backbone-min'
       , underscore: 'libs/underscore-min'
       , mustache: 'libs/mustache'


    }
    , shim: {
    	'backbone': {
    		deps: ['underscore', 'jquery'],
    		exports: 'Backbone'
    	}
    }
});

requirejs(['channel','jquery','backbone','underscore'], function(channel, $, Backbone, _) {
 
 	//pull in the router
	require(['router'],function(){});

});

