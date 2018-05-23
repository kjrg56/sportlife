$(document).ready(function() {
    var windowHeight = $(window).height();
    var windowScrollPostTop = $(window).scrollTop();
    var windowScrollPosBottom = windowHeight + windowScrollPostTop;
    
    $('#history').css('opacity', 0);
    $('.section-title').css('opacity', 0);

    $.fn.revealOnScroll = function(direction) {
        return this.each(function() {
            var objectOffset = $(this).offset();
            var objectOffsetTop = objectOffset.top;
            
            if(!$(this).hasClass('hidden')) {
                $(this).css('opacity', 0);
                $(this).addClass('hidden');
            }

            if(!$(this).hasClass('animation-complete')) {
                if(windowScrollPosBottom > objectOffsetTop+150) {

                    $(this).addClass('animated');

                    if (direction === 'right') {    
                        $(this).css('opacity', 1);
                        $(this).addClass('fadeInRight');
                    } else if (direction === 'left') {
                        $(this).css('opacity', 1);
                        $(this).addClass('fadeInLeft');
                    } else if (direction === 'up') {
                        $(this).css('opacity', 1);
                        $(this).addClass('fadeInUp');
                    } else if (direction === 'neutral') {
                        $(this).css('opacity', 1);
                        $(this).addClass('jackInTheBox');
                    } else {
                        $(this).animate({'opacity': 1}, 1000);
                    }

                    $(this).addClass('animation-complete');
                }
            }

        });
    }

    $(window).scroll(function() {
        windowHeight = $(window).height();
        windowScrollPostTop = $(window).scrollTop();
        windowScrollPosBottom = windowHeight + windowScrollPostTop;
    
        $('.section-title').revealOnScroll();
        $('#history').revealOnScroll('left');
        $('#values').revealOnScroll('right');
        $('#mission-vision').revealOnScroll('up');
        $('#products').revealOnScroll('neutral');
        $('#customers-section-1').revealOnScroll('left');
        $('#customers-section-2').revealOnScroll('right');
        $('#contact-us').revealOnScroll('up');
    });

});