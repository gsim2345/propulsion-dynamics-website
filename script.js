$(document).ready(function() {

  //Waypoints
      $('#service-info').waypoint(function(direction) {
          if (direction == 'down') {
              $('#navigation nav').css('background-color', '#1d6989');
          }
          if (direction == 'up') {
              $('#navigation nav').css('background-color', 'transparent');
          }
      }, {
          offset: 25
      });

});
