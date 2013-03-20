(function(old) {
    Backbone.History.prototype.getFragment = function() {
        return old.apply(this, arguments).replace(/\?.*/, '');
    };
})(Backbone.History.prototype.getFragment);

define('smileage', ['backbone','underscore','mustache'], function(Backbone, _, Mustache) {

    var dla = {
        smileage: {}
    };

    //Models
    var tripModel = Backbone.Model.extend({
            initialize: function() {}
            , urlRoot: 'http://localhost/smileage/services/getTripInfo.json'
           /* , sync: function(){

            }*/
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


    //Views

    //timeline
   var timelineView = Backbone.View.extend({
            el: $('timeline')
            , events: {

            }
             , render: function(){
                console.log('in timeline.render()');
            }
            , initialize: function(){
                _.bindAll(this, 'render');
                this.model = dla.smileage.trip;
                this.model.bind('reset',this.render);
            }
           
    });


    //map
    var mapView = Backbone.View.extend({
            el: $('map')
            , events: {

            }
            , initialize: function(){
                 _.bindAll(this, 'render');
                this.model = dla.smileage.trip;
                this.model.bind('reset',this.render);
            }
            , render: function(){
                console.log('in map.render()');
            }
           
    });


   //Router
    var appRouter = Backbone.Router.extend({
        routes: {
                
                '' : 'defaultAction'
                , '*actions':'defaultAction'
                
            }
            , initialize: function () {
                  Backbone.history.start();
            }
            , defaultAction: function(){
                console.log('in defaultAction');
            }

    });

    
    dla.smileage.trip = new tripModel;
    dla.smileage.timeline = new timelineView;
    dla.smileage.map = new mapView;
    dla.smileage.router = new appRouter;

    var i =0;
    var syncTrip = function(){
        dla.smileage.trip.fetch({
            success: function(){
                console.log('success');
               dla.smileage.trip.trigger('reset');
            }
            , error: function(res){
                console.log('error');
                console.log(res);
            }
        });
        console.log(i);
        i++;       
    };

    syncTrip();
    var id = setInterval(syncTrip,30000);
    // syncTrip();

    console.log(dla);

   
});