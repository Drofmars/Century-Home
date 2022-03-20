// preloader
$(window).on("load", function() {
	$("#preloader").delay(100).animate({opacity: '0'}, 1500, function(){
		$(this).hide();
		$(".navtop").animate({top: '0'}, 800);
	});
});

// nav scroll
$(document).ready(function() {
	var didScroll;
	var lastScrollTop = 0;
	var delta = 5;
	var navbarHeight = $('nav').outerHeight();

	$(window).scroll(function(event){
		if ($(window).scrollTop() >= 150) {
		   didScroll = true;
		}else {
			$('header').removeClass('hidden-nav').removeClass('fixed-nav');
			didScroll = false;
		}  
	});

	setInterval(function() {
	    if (didScroll) {
	        hasScrolled();
	        didScroll = false;
	    }
	}, 50);

	function hasScrolled() {
	    var st = $(this).scrollTop(); 
	    // Make sure they scroll more than delta
	    if(Math.abs(lastScrollTop - st) <= delta)
	        return;
	    
	    if (st > lastScrollTop && st > navbarHeight){
	        // Scroll Down
	        $('header').removeClass('fixed-nav').addClass('hidden-nav');
	        
	    } else {
	        // Scroll Up
	        $('header').removeClass('hidden-nav').addClass('fixed-nav');
	    } 
	    lastScrollTop = st;
	}
});

// mobile nav
var menu = $(".side-menu").html();
$(".mobile-nav").append(menu);

// open mobile nav
$(".btn-menu").on('click', function(){
	$(this).toggleClass('open');
	$(".mobile-nav").toggleClass('open');
});

// nav-link active
$(".menu a").each(function() {
	console.log($(this).attr('href'));
    if ((window.location.pathname.indexOf($(this).attr('href'))) > -1) {
        $(this).addClass('active');
    }
});

// owl-carousel
$(document).ready(function() {
	$('.cleaners-carousel').owlCarousel( {
		loop: false,
		margin: 30,
		dots: true,
		autoplay: true,
		autoplayTimeout: 9000,
		autoplayHoverPause:false,
		autoplaySpeed: 5000,
		items: 3,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			577: {
				items: 2
			},
			992: {
				items: 3
			}
		}
	});
});

$(document).ready(function() {
	$('.pricing-carousel').owlCarousel( {
		loop: false,
		margin: 30,
		dots: true,
		autoplay: true,
		autoplayTimeout: 9000,
		autoplayHoverPause:false,
		autoplaySpeed: 5000,
		items: 3,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			577: {
				items: 2
			},
			992: {
				items: 3
			}
		}
	});
});

$(document).ready(function() {
	$('.service-carousel').owlCarousel( {
		loop: false,
		margin: 30,
		dots: true,
		autoplay: true,
		autoplayTimeout: 9000,
		autoplayHoverPause:false,
		autoplaySpeed: 5000,
		items: 3,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			577: {
				items: 2
			},
			992: {
				items: 3
			}
		}
	});
});

//smooth scroll to #id
$(".btn-link").click(function() {
    $('html, body').animate({
        scrollTop: $("#book").offset().top
    }, 2000);
});


$(document).ready(function() {
  $(window).scroll(function() {

    if ($(window).scrollTop() < $("#div01").height()) {
      $("#logoCat").show();//true
      $(".logo:not(#logoCat)").hide();

    } else if ($(window).scrollTop() < $("#div01").height() * 2 ) { 
      $("#logoDove").show();//true
      $(".logo:not(#logoDove)").hide();
      
    } else if ($(window).scrollTop() < $("#div01").height() * 3 ) { 
      $("#logoFish").show();//true
      $(".logo:not(#logoFish)").hide();
      
    } else { 
      $("#logoDog").show();//true
      $(".logo:not(#logoDog)").hide(); 
    }
  });
});




AOS.init();