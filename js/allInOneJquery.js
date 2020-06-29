// smooth appear start here //
function appearMe() {;
	(function ($, win) {
		jQuery.fn.inViewport = function (cb) {
			return this.each(function (i, el) {
				function visPx() {
					var H = $(this).height(),
						r = el.getBoundingClientRect(),
						t = r.top,
						b = r.bottom;
					return cb.call(el, Math.max(0, t > 0 ? H - t : (b < H ? b : H)));
				}
				visPx();
				jQuery(win).on("resize scroll load", visPx);
			});
		};
	}(jQuery, window));

	jQuery(".animate").inViewport(function (px) {
		if (px) {
			jQuery(this).addClass("animateMe");
		}
	});
}
// smooth appear end here //

$(document).ready(function(){

$('.sub-menu li a').click(function(){
        var hash = window.location.hash;
				$("html, body").animate({ scrollTop: $(hash).offset().top -120 }, 1500);
});

$(function() {
		$( '.sub-menu li' ).on( 'click', function() {
					$( this ).parent().find( 'li.active' ).removeClass( 'active' );
					$( this ).addClass( 'active' );
		});
});


// --------code for touch device submenu start---------------------------

        $('ul#menu-top-menu li:has(ul)').doubleTapToGo();

var isAndroid = /(android)/i.test(navigator.userAgent);
if (isAndroid) {
  $( 'ul#menu-top-menu li:has(ul)' ).doubleTapToGo();
}

  // --------code for touch device submenu end---------------------------

	// scroll page start here //
	$(window).scroll(function() {
    if ($(this).scrollTop() > 100){
        $('header').addClass("scroll");
    }
    else{
        $('header').removeClass("scroll");
    }
	});
	// scroll page end here //

  // code for fit image start here //
	objectFitImages();
	// code for fit image end here //

	// smooth appear start here //
		appearMe();
		// smooth appear end here //

	$('.fullSlider').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  dots: true,
	  fade: true,
	  speed:1000,
	  autoplaySpeed:7000,
	  autoplay: true
	});

	/* contact accordian */
	$('.teamTitle').click(function () {
			$('.teamDetails').stop().slideUp();
			$('.teamTitle').removeClass('active-arrow');
			$('.teamDetails').removeClass('active');
			var getnextdiv =  $(this).next('.teamDetails');

				$(this).next('.teamDetails').addClass('active');

			if ($(getnextdiv).is(':hidden')) {
				$(getnextdiv).stop().slideDown("500", function () {
				//$('html, body').animate({ scrollTop: $(getnextdiv).offset().top - 170 }, 1000);
				});
				 $(this).addClass('active-arrow');


			}
	});
/* contact accordian */

/* responsive menu start here */
$(".res-nav").click(function(){
$("body").toggleClass("slide-left");
$(".navigation ul li a").toggleClass('animated');
});

var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

    var hamburgers = document.querySelectorAll(".hamburger");
    if (hamburgers.length > 0) {
      forEach(hamburgers, function(hamburger) {
        hamburger.addEventListener("click", function() {
          this.classList.toggle("is-active");
        }, false);
      });
    }
/* responsive menu end here */

// ================================responsive menu acc start========================//
$('.main-nav.responsiveMenu ul li:has(> ul)').addClass('parent');
$(".main-nav.responsiveMenu ul li.parent").prepend("<span class='subMenuTrigger'></span>");

$('.main-nav.responsiveMenu ul.sub-menu').slideUp();
$('.main-nav.responsiveMenu ul.sub-menu').parent().removeClass("on");
	 $('.subMenuTrigger').click(function() {
		 //alert('hi');
		 $('.main-nav.responsiveMenu ul.sub-menu').stop().slideUp();
		 $('.main-nav.responsiveMenu ul.sub-menu').parent().removeClass("on");

		 var getthiscontent = $(this).next().next();
		 if ($(getthiscontent).is(':hidden')) {
			 $(getthiscontent).stop().slideDown();
			$(this).parent().addClass("on");
					 }
	 });
// ================================responsive menu acc end========================//

});
