(function(old) {
    Backbone.History.prototype.getFragment = function() {
        return old.apply(this, arguments).replace(/\?.*/, '');
    };
})(Backbone.History.prototype.getFragment);

define('router', 
    [
        'dla.smileage'
        , 'models/tripModel'
        , 'views/mapView'
        , 'views/timelineView'

    ], function(
        dla
        , tripModel
        , mapView
        , timelineView

    ) {
    
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
              
                dla.smileage.trip = new tripModel();
              
                //instantiate Timeline View
                dla.smileage.timeline = new timelineView({
                    model: dla.smileage.trip
                    , dla:dla
                });
              
                //instantiate Map View
                dla.smileage.map = new mapView({
                    model: dla.smileage.trip
                    , dla:dla
                });
                
                //get config object
                var config = dla.smileage.config;

                //sync Trip with service
                var i =0;
                (function syncTrip(){
                    dla.smileage.trip.fetch({
                        success: function(){
                            dla.smileage.trip.trigger('reset');
                        }
                        , error: function(res){
                            console.log('error');
                            console.log(res);
                        }
                    });

                    console.log(i);
                    i++;      
                    setTimeout(syncTrip,(config.syncInterval * 1000)); 
                }());
                
                console.log(dla);
            }
        });
    
        dla.smileage.router = new appRouter;

});