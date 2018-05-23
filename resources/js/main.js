$("a[href^='#']").click(function(e) {
	e.preventDefault();
	
	var position = $($(this).attr("href")).offset().top;

	$("body, html").animate({
		scrollTop: position
    }, 1300);
});

var previousScrollPosition;

$(window).scroll(function(){
    var height = $(window).height();
    var scrollTop = $(window).scrollTop();

    var currentScrollPosition = height + scrollTop;

    if (currentScrollPosition > previousScrollPosition || scrollTop === 0) {
        $('#up-btn').hide();
    } else if (currentScrollPosition < previousScrollPosition){
        $('#up-btn').show();
    }
    
    previousScrollPosition=currentScrollPosition
});

function revealOnScroll() {
    return this.each(function() {
        $(this).hide();
    });
}

$('#contact').submit(function(e) {
    e.preventDefault();
    alert('¡Mensaje enviado exitosamente!');
});