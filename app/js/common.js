$(function () {

   // inject by class name
   SVGInject(document.getElementsByClassName('svg-inject'));


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
            $('.header .scene .object-3').css('top', '31%');

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


   // Callback
   $('.price-slider__order-btn').on('click', function () {
      var hiddenInput = $('.s-price #hidden-input');
      var textTitle = $('.s-price .price-slider .carousel-item.active .h3-title').text().replace(/\s+/g, '');
      $('.s-price .modal-title span').text(textTitle);

      // For Form
      hiddenInput.val(textTitle);
   });

   $('.s-price .close').on('click', function () {
      $('.price-form .success').fadeOut(300);
   });

   $('.btn-order').on('click', function () {
      var inputName = $('#header-form input#name');
      var inputPhone = $('#header-form input#phone');
      if (inputName.val() == '' || inputPhone.val() == '') {
         if (inputName.val() == '') {
            inputName.attr('placeholder', 'Заполните поле!');
            inputName.on('click', function () {
               inputName.attr('placeholder', 'Имя');
            });
         }
         if (inputPhone.val() == '') {
            inputPhone.attr('placeholder', 'Заполните поле!');
            inputPhone.on('click', function () {
               inputPhone.attr('placeholder', 'Телефон');
            });
         }
         return false;
      }
   });

   $('.s-price #modal-slider .btn').on('click', function () {
      var inputName = $('#price-form input.name');
      var inputPhone = $('#price-form input.phone');
      if (inputName.val() == '' || inputPhone.val() == '') {
         if (inputName.val() == '') {
            inputName.attr('placeholder', 'Заполните поле!');
            inputName.on('click', function () {
               inputName.attr('placeholder', 'Имя');
            });
         }
         if (inputPhone.val() == '') {
            inputPhone.attr('placeholder', 'Заполните поле!');
            inputPhone.on('click', function () {
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


$(window).on('load', function () {

       $('.price-slider .carousel-item').equalHeights();


       var headerHeight = $('.header').height();
       var scrollTop = $(window).scrollTop();
       var ticket = $('.header .ticket');
       var menuHeight = $('.top-wrap').height() + 15;


       if (scrollTop > headerHeight) {
          $('.top-wrap').addClass('fixed-active');

          // if ($(window).width() > 1199) {
          //    if (ticket.is(":hidden")) {
          //       ticket.stop().css({
          //          'display': 'flex',
          //          'top': menuHeight + 'px'
          //       }).hide().fadeIn(300);
          //    }
          // }
       }

       if (scrollTop < headerHeight) {
          $('.top-wrap').removeClass('fixed-active');

          // if ($(window).width() > 1199) {
          //    if (ticket.is(":visible")) {
          //       ticket.fadeOut(300);
          //    }
          // }
       }

       $(window).on('scroll', function () {

          var headerHeight = $('.header').height();
          var scrollTop = $(window).scrollTop();
          var ticket = $('.header .ticket');
          var menuHeight = $('.top-wrap').height() + 15;


          if (scrollTop > headerHeight) {
             $('.top-wrap').addClass('fixed-active');

             // if ($(window).width() > 1199) {
             //    if (ticket.is(":hidden")) {
             //       ticket.stop().css({
             //          'display': 'flex',
             //          'top': menuHeight + 'px'
             //       }).hide().fadeIn(300);
             //    }
             // }
          }

          if (scrollTop < headerHeight) {
             $('.top-wrap').removeClass('fixed-active');

             // if ($(window).width() > 1199) {
             //    if (ticket.is(":visible")) {
             //       ticket.fadeOut(300);
             //    }
             // }
          }

       });


       $('#slider-route').carousel({
          pause: true,
          interval: false
       });

       $('#carousel-how').carousel({
          pause: true,
          interval: false
       });

       $('#price-slider').carousel({
          pause: true,
          interval: false,
          touch: false
       });


//============= SCROLL TO SECTION (start) ==================


       $('.link-anchor').on('click', function (e) {

          var navHeight = $('.header .top-wrap').height() - $('.header .top-wrap .navbar-nav').height();
          var anchor = $(this),
              heightToAnchor = $(anchor.attr('href')).offset().top,
              totalHeight = heightToAnchor - navHeight;

          var windowWidth = $(window).width();

          // WINDOW > 1600
          if (windowWidth > 1600) {

             if ((anchor.attr('href') == '#s-route')) {
                $('html, body').stop().animate({
                   scrollTop: totalHeight + 290
                }, 600, 'swing');
             } else if ((anchor.attr('href') == '#s-price')) {
                $('html, body').stop().animate({
                   scrollTop: totalHeight + 350
                }, 600, 'swing');
             } else if ((anchor.attr('href') == '#s-reviews')) {
                $('html, body').stop().animate({
                   scrollTop: totalHeight + 140
                }, 600, 'swing');
             }
             else {
                $('html, body').stop().animate({
                   scrollTop: totalHeight - 80
                }, 600, 'swing');
             }

          }

          // WINDOW < 1600
          if (windowWidth < 1600) {

             $('.header .top-wrap').on('click',function (e){ // событие клика по веб-документу
                var div = $(".header .navbar-toggler"); // тут указываем ID элемента
                if (!div.is(e.target) // если клик был не по нашему блоку
                    && div.has(e.target).length === 0) { // и не по его дочерним элементам
                   div.click(); // скрываем его
                }
             });

             if ((anchor.attr('href') == '#s-route')) {
                $('html, body').stop().animate({
                   scrollTop: totalHeight + 255
                }, 800, 'swing');
             } else if ((anchor.attr('href') == '#s-price')) {
                $('html, body').stop().animate({
                   scrollTop: totalHeight
                }, 800, 'swing');
             } else if ((anchor.attr('href') == '#s-reviews')) {
                $('html, body').stop().animate({
                   scrollTop: totalHeight + 130
                }, 800, 'swing');
             }
             else {
                $('html, body').stop().animate({
                   scrollTop: totalHeight
                }, 800, 'swing');
             }

          }

          // WINDOW < 1200
          if (windowWidth < 1200) {

             if ((anchor.attr('href') == '#s-route')) {
                $('html, body').stop().animate({
                   scrollTop: totalHeight + 270
                }, 800, 'swing');
             } else if ((anchor.attr('href') == '#s-price')) {
                $('html, body').stop().animate({
                   scrollTop: totalHeight
                }, 800, 'swing');
             } else if ((anchor.attr('href') == '#s-reviews')) {
                $('html, body').stop().animate({
                   scrollTop: totalHeight + 130
                }, 800, 'swing');
             }
             else if ((anchor.attr('href') == '#s-contacts')) {
                $('html, body').stop().animate({
                   scrollTop: totalHeight - 50
                }, 800, 'swing');
             }
             else {
                $('html, body').stop().animate({
                   scrollTop: totalHeight
                }, 800, 'swing');
             }

          }

          // WINDOW < 992
          if (windowWidth < 992) {

             if ((anchor.attr('href') == '#s-route')) {
                $('html, body').stop().animate({
                   scrollTop: totalHeight + 300
                }, 800, 'swing');
             } else if ((anchor.attr('href') == '#s-price')) {
                $('html, body').stop().animate({
                   scrollTop: totalHeight + 140
                }, 800, 'swing');
             } else if ((anchor.attr('href') == '#s-reviews')) {
                $('html, body').stop().animate({
                   scrollTop: totalHeight + 200
                }, 800, 'swing');
             }
             else if ((anchor.attr('href') == '#s-contacts')) {
                $('html, body').stop().animate({
                   scrollTop: totalHeight + 80
                }, 800, 'swing');
             }
             else {
                $('html, body').stop().animate({
                   scrollTop: totalHeight
                }, 800, 'swing');
             }

          }

          // WINDOW < 768
          if (windowWidth < 768) {

             if ((anchor.attr('href') == '#s-route')) {
                $('html, body').stop().animate({
                   scrollTop: totalHeight + 300
                }, 0, 'swing');
             } else if ((anchor.attr('href') == '#s-price')) {
                $('html, body').stop().animate({
                   scrollTop: totalHeight + 40
                }, 0, 'swing');
             } else if ((anchor.attr('href') == '#s-reviews')) {
                $('html, body').stop().animate({
                   scrollTop: totalHeight + 170
                }, 0, 'swing');
             }
             else if ((anchor.attr('href') == '#s-contacts')) {
                $('html, body').stop().animate({
                   scrollTop: totalHeight + 80
                }, 0, 'swing');
             }
             else {
                $('html, body').stop().animate({
                   scrollTop: totalHeight
                }, 0, 'swing');
             }

          }

          // WINDOW < 576
          if (windowWidth < 576) {

             if ((anchor.attr('href') == '#s-route')) {
                $('html, body').stop().animate({
                   scrollTop: totalHeight + 300
                }, 0, 'swing');
             } else if ((anchor.attr('href') == '#s-price')) {
                $('html, body').stop().animate({
                   scrollTop: totalHeight + 60
                }, 0, 'swing');
             } else if ((anchor.attr('href') == '#s-reviews')) {
                $('html, body').stop().animate({
                   scrollTop: totalHeight + 170
                }, 0, 'swing');
             }
             else if ((anchor.attr('href') == '#s-contacts')) {
                $('html, body').stop().animate({
                   scrollTop: totalHeight + 80
                }, 0, 'swing');
             }
             else {
                $('html, body').stop().animate({
                   scrollTop: totalHeight
                }, 0, 'swing');
             }

          }





          e.preventDefault();
       });
       //============= SCROLL TO SECTION (end) ==================


       //============= BACKLIGHT MENU ITEM (start) ==================
       // Cache selectors
       var lastId,
           topMenu = $(".header .top-wrap"),
           topMenuHeight = topMenu.outerHeight() + 15,
           // All list items
           menuItems = topMenu.find("a"),
           // Anchors corresponding to menu items
           scrollItems = menuItems.map(function () {
              var item = $($(this).attr("href"));
              if (item.length) {
                 return item;
              }
           });

       // Bind to scroll
       $(window).scroll(function () {
          // Get container scroll position
          var fromTop = $(this).scrollTop() + topMenuHeight;

          // Get id of current scroll item
          var cur = scrollItems.map(function () {
             if ($(this).offset().top < fromTop)
                return this;
          });
          // Get the id of the current element
          cur = cur[cur.length - 1];
          var id = cur && cur.length ? cur[0].id : "";

          if (lastId !== id) {
             lastId = id;
             // Set/remove active class
             menuItems
                 .parent().removeClass("active")
                 .end().filter("[href='#" + id + "']").parent().addClass("active");
          }
       });
       //============= BACKLIGHT MENU ITEM (end) ==================


    }
);