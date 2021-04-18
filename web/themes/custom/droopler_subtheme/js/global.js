(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.droopler_subtheme = {
    attach: function (context, settings) {

      //todo aattached to views not global.
      $('.view-id-discounts.view-display-id-attachment_1').once().append("<i class='bi bi-arrow-down-circle-fill iframe-resize'></i>");

      $('.view-id-discounts .views-exposed-form').once().append("<span class='filter-resize'><i class=\"bi bi-arrows-collapse\"></i><i class='bi arrow-bar-down filter-resize'></i><i class=\"bi bi-filter\"></i> Filtry</span>");


      $( ".iframe-resize" ).on( "click", function() {
        let ifheight;
        if($(this).hasClass('full')) {
          $(this).removeClass('full');
          ifheight = '30vh';
        }
        else {
          ifheight = '90vh';
          $(this).addClass('full');
        }
        $('.geofield-google-map').animate({height: ifheight}, 500);
      });


      $( ".filter-resize" ).on( "click", function() {
        let filter;
        if($('.views-exposed-form').hasClass('full')) {
          $('.views-exposed-form').removeClass('full');
          filter = '85%';
        }
        else {
          filter = '0';
          $('.views-exposed-form').addClass('full');
        }
        $('.views-exposed-form .form--inline').animate({height: filter}, 500);
      });
    }
  };

})(jQuery, Drupal);
