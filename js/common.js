$(document).ready(function() {
$('.main-head').css('min-height', $(window).height());
	
});
$(window).load(function() { 
	$(".loaderInner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});
$(document).ready(function () {
        $('.flexslider').flexslider({
            animation: 'fade'
        });
    });
$('.test-popup-link').magnificPopup({ 
  type: 'image'
	// other options
});

  $(function () { $("input,select,textarea").not("[type=submit]").jqBootstrapValidation(); } );
