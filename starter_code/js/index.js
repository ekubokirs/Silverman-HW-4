$(document).ready(function() {

document.learnMore('learnMore');
document.readmore('readMore');
document.readless('readLess');
document.buttonBlue('buttonBlue');


function learnMore() {

        $('.learnmore').slideDown();
    	$('.learnmore').hide();
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