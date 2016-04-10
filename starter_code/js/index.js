$(document).ready(function() {

$('.learnmore').click(learnMore);

function learnMore() {

        $('#learnmoretext').slideToggle();
    	$('#show-this-on-click').hide();
}



function readMore() {

	$('.readmore').show();
	$('.readmore').hide();
}
    
function readLess() {

	$('.readless, .hide').slideDown();
	$('.readless, .hide').show();

}

function buttonBlue() {}

	$('.button, .blue').event.preventDefault();
}

}); 