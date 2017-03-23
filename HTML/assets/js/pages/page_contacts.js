var ContactPage = function () {

    return {

      //Basic Map
      initMap: function () {
        var map;
        $(document).ready(function () {
          map = new GMaps({
            div: '#map',
            scrollwheel: false,
            lat: -33.865143,
            lng: 151.2093
          });

          var marker = map.addMarker({
            lat: -33.865143,
            lng: 151.2093,
            title: 'Speakeroo.com'
          });
        });
      },

        //Panorama Map
        initPanorama: function () {
		    var panorama;
		    $(document).ready(function(){
		      panorama = GMaps.createPanorama({
		        el: '#panorama',
		        lat : 40.748866,
		        lng : -73.988366
		      });
		    });
		}        

    };
}();