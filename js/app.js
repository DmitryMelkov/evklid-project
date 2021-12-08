$(function () {
  var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();




  /* Fixed Header */
  checkScroll(scrollOffset);

  $(window).on("scroll", function() {
      scrollOffset = $(this).scrollTop();

      checkScroll(scrollOffset);
  });

  function checkScroll(scrollOffset) {
      if( scrollOffset >= introH ) {
          header.addClass("fixed");
      } else {
          header.removeClass("fixed");
      }
  }

  /* Smooth scroll */
  $("[data-scroll]").on("click", function(event) {
    event.preventDefault();

    let $this = $(this),
        blockId = $this.data('scroll'),
        headerHeight = $('.header').height(),
        blockOffset = $(blockId).offset().top - headerHeight;



    $("#nav a").removeClass("active");
    $this.addClass("active");



    $("html, body").animate({
        scrollTop:  blockOffset
    }, 500);
  });



  /* Menu nav toggle */
  $("#nav_toggle").on("click", function (event) {
    event.preventDefault();

    $(this).toggleClass("active");

    $("#nav").slideToggle("active");



  });




  /* Collapse */
  $("[data-collapse]").on("click", function (event) {
    event.preventDefault();

    var $this = $(this),
      blockId = $this.data('collapse');

    $this.toggleClass("active");
  });

})

/*slider */
const swiper = new Swiper('.swiper-container', {
  speed: 900,
  spaceBetween: 30,

  loop: true,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },


  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },



  scrollbar: {
    hide: true,
  },


});

$(function () {
  $("#tabs").tabs();
});







