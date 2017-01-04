$(document).ready(function() {

  //Waypoints
      $('#service-info').waypoint(function(direction) {
          if (direction == 'down') {
              $('#navigation-bar').css('background-color', '#6ABCBC');
          }
          if (direction == 'up') {
              $('#navigation-bar').css('background-color', 'transparent');
          }
      }, {
          offset: 25
      });

});
