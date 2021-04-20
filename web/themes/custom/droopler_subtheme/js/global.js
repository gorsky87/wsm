(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.droopler_subtheme = {
    attach: function (context, settings) {

      //todo aattached to views not global.

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
