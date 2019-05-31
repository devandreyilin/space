$(function () {

   // inject by class name
   SVGInject(document.getElementsByClassName('svg-inject'));

   $('.carousel-how').carousel({
      interval: 3000
   });
   $('.price-slider').carousel({
      interval: false
   });

   $(".navbar-toggle").on("click", function () {
      $(this).toggleClass("active");
   });

   if ($(window).width() > 1199) {
      $(window).on('mousemove', function (e) {
         var w = $(window).width();
         var h = $(window).height();

         var offsetX = 0.5 - e.pageX / w;
         var offsetY = 0.5 - e.pageY / h;

         $('.parallax').each(function (i, el) {
            var offset = parseInt($(el).data('offset'));

            var translate = "translate3d(" + Math.round(offsetX * offset) + "px," + Math.round(offsetY * offset) + "px, 0";
            $(el).css({
               'transform': translate
            });
         });
      });
   }

   if ($(window).width() < 992) {
      $('.navbar-toggler').on('click', function () {
         if ($('#navbarNavDropdown').hasClass('show')) {
            $('.object-3').css('top', '11%');
         } else {
            $('.object-3').css('top', '25%');

         }

      });
   }

   $('.price-slider').on('click', function () {
      setTimeout(function () {
            var attrValue = $('.price-slider .carousel-item.active').attr('data-value');
            var attrSlide = $('.price-slider .carousel-item.active').attr('data-slide');
            $('.price-slider__value span').text(attrValue + " Р");
            $('.price-slider__value span').attr('data-text', attrValue + " Р");
            $('.s-price .rocket').css({
               'background-image': "url(../img/elements/price/rocket-slide-"+ attrSlide +".png)"});
      }, 800);
   });


   if ($(window).width() > 767) {
      $(window).on('scroll', function () {
         var scrolledY = $(window).scrollTop();

         $('.object-11').css({
            'bottom': 'calc(5% + ' + ((scrolledY) / 8) + '%',
            'left': 'calc(60% + ' + ((scrolledY) / 30) + '%',
         });
      });
   }


   $(window).on('load', function () {

   });

});
