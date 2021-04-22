(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.droopler_subtheme = {
    attach: function (context, settings) {

      $('a').click(function(){
        $('html, body').animate({
          scrollTop: $( $(this).attr('href') ).offset().top - 130
        }, 500);
        return false;
      });

      $(".iframe-resize", context).on("click", function () {
        let ifheight;
        if ($(this).hasClass('full')) {
          $(this).removeClass('full');
          ifheight = '30vh';
        } else {
          ifheight = '90vh';
          $(this).addClass('full');
        }
        $('.geofield-google-map').animate({height: ifheight}, 500);
      });

    }
  };

})(jQuery, Drupal);
