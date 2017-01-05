$(document).ready(function() {

  //Waypoints
      $('#service-info').waypoint(function(direction) {
          if (direction == 'down') {
              $('#navigation nav').css('background-color', '#6ABCBC');
          }
          if (direction == 'up') {
              $('#navigation nav').css('background-color', 'transparent');
          }
      }, {
          offset: 25
      });

});
