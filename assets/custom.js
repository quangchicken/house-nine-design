function navMeganav() {
    var header_height = jQuery('#header').height(),
        window_height = jQuery(window).height() * 1.5,
        current = jQuery(window).scrollTop(),
        container = jQuery('#offCanvasWrapper'),
        i = jQuery('#header'),
        //point = i.height(),
        point = 0;
    container.css('padding-top', i.height());
    if(html_height > window_height){
        if (i.length) {
            if (current > point) {
                i.addClass('sticky').delay(500).queue(function(next) {
                    i.addClass('delay');
                    next();
                });
            }else{
                i.removeClass('sticky delay');
            }
        }
    }
}

jQuery(document).ready(function () {
    jQuery('.nav__meganav')
});