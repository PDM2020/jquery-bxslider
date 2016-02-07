// bxslider call function

$(function(){

  $('.bxslider').bxSlider({

    controls: false,
  	auto: true,
  	maxSlides: 8,
  	slideMargin:0

      });
});

// update form alert box

$('#cta-form').on('submit', function(event) {
            event.preventDefault();

    if ( $('#email-input').val() === '') {
              // alert('Please enter an email address!');
         $('#try-again').fadeIn('fast').delay(4000).fadeOut();

   } else {
              // alert('Thank you for signing up!');
         $('#thank-you').fadeIn('fast').delay(4000).fadeOut();
       }
});

//smooth scrolling
// http://www.paulund.co.uk/smooth-scroll-to-internal-links-with-jquery

$(function(){
$('a[href^="#"]').on('click',function(event) {
	    event.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        // window.location.hash = target;
	        //uncomment the above if you want to include
	        //the anchor tag in the url
	    });
	});
});
