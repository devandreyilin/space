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
            $('.header .scene .object-3').css('top', '11%');
         } else {
            $('.header .scene .object-3').css('top', '25%');

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
            'background-image': "url('img/elements/price/rocket-slide-" + attrSlide + ".png')"
         });
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


   // Callback
   $('.price-slider__order-btn').on('click', function () {
      var hiddenInput = $('.s-price #hidden-input');
      var textTitle = $('.s-price .price-slider .carousel-item.active .h3-title').text().replace(/\s+/g, '');
      $('.s-price .modal-title span').text(textTitle);

      // For Form
      hiddenInput.val(textTitle);
   });

   $('.s-price .close').on('click',function() {
      $('.price-form .success').fadeOut(300);
   });

   $('.btn-order').on('click', function() {
      var inputName = $('#header-form input#name');
      var inputPhone = $('#header-form input#phone');
      if( inputName.val() == '' || inputPhone.val() == '') {
         if(inputName.val() == '') {
            inputName.attr('placeholder', 'Заполните поле!');
            inputName.on('click', function() {
               inputName.attr('placeholder', 'Имя');
            });
         }
         if(inputPhone.val() == '') {
            inputPhone.attr('placeholder', 'Заполните поле!');
            inputPhone.on('click', function() {
               inputPhone.attr('placeholder', 'Телефон');
            });
         }
         return false;
      }
   });

   $('.s-price #modal-slider .btn').on('click', function() {
      var inputName = $('#price-form input.name');
      var inputPhone = $('#price-form input.phone');
      if( inputName.val() == '' || inputPhone.val() == '') {
         if(inputName.val() == '') {
            inputName.attr('placeholder', 'Заполните поле!');
            inputName.on('click', function() {
               inputName.attr('placeholder', 'Имя');
            });
         }
         if(inputPhone.val() == '') {
            inputPhone.attr('placeholder', 'Заполните поле!');
            inputPhone.on('click', function() {
               inputPhone.attr('placeholder', 'Телефон');
            });
         }
         return false;
      }
   });


   //E-mail Ajax Send - HEADER
   $("#header-form").submit(function () { //Change
      var th = $(this);
      $.ajax({
         type: "POST",
         url: "mail.php", //Change
         data: th.serialize()
      }).done(function () {
         setTimeout(function () {
            // Done Functions
            th.trigger("reset");
         }, 1000);
      });
      return false;
   });

   //E-mail Ajax Send - PRICE
   $("#price-form").submit(function () { //Change
      var th = $(this);
      $.ajax({
         type: "POST",
         url: "mail.php", //Change
         data: th.serialize()
      }).done(function () {
         $('.price-form .success').fadeIn(300);
         setTimeout(function () {
            // Done Functions
            th.trigger("reset");
         }, 1000);
      });
      return false;
   });

});
