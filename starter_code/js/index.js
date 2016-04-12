$(document).ready(function() {

function learnMore(event) {

	event.preventDefault();
	$('.learnmore').hide();
	$('#learnmoretext').slideDown();
}

$('.learnmore').click(learnMore);


function readMore() {
	
	event.preventDefault();
	$('#show-this-on-click').slideDown();
	$('.readless').show();
	$('.readmore').hide();
}

$('.readmore').click(readMore);


function readLess() {

	event.preventDefault();
	$('#show-this-on-click').slideUp();
	$('.readless').hide();
	$('.readmore').show();
}

$('.readless').click(readLess);
     // $('#learnmoretext').hide();
    	// $('#show-this-on-click').slideDown();
    	

}); 