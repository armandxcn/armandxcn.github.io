checkScroll();
$(window).scroll(checkScroll);

$(document).ready(function(){
  setInterval('changeHeroImage()', 5000);
})

function changeHeroImage(){
  if ($('.hero-image-collection').css('display') != 'none') {
    var $active = $('.hero-image-collection .active');
    var $next = ($active.next().length > 0) ? $active.next() : $('.hero-image-collection img:first');
  	$active.removeClass('active');
    $next.addClass('active');
  }
}

function checkScroll() {
  if( $(this).scrollTop() > 20 ) {
    $('.nav-wrapper').addClass('nav-wrapper-scrolled');
  } else {
		$('.nav-wrapper').removeClass('nav-wrapper-scrolled');
  }
}

$(".contact-link").hover(function(){
    $('.contact-img').addClass('contact-img-visible');
    }, function(){
    $('.contact-img').removeClass('contact-img-visible');
});

$('.animated-img').each(function() {
  var inview = new Waypoint.Inview({
    element: $(this),
    entered: function(direction) {
      var src = this.element.attr('src');
      this.element.attr('src', src.replace('.png', '.gif'));
    },
    exited: function(direction) {
      var src = this.element.attr('src');
      this.element.attr('src', src.replace('.gif', '.png'));
    }
  })
});

$('.simple-item-link').each(function() {
  var inview = new Waypoint.Inview({
    element: $(this),
    entered: function(direction) {
      this.element.removeClass('sil-hidden');
    },
    exit: function(direction) {
      this.element.addClass('sil-hidden');
    }
  })
});
