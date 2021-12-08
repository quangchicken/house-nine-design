function navMeganav() {
    var header_height = jQuery('#header').height(),
        megaNav = jQuery('.nav__meganav')
        positionTopMeganav = 
        current = jQuery(window).scrollTop(),
        container = jQuery('#offCanvasWrapper'),
        i = jQuery('#header'),
        //point = i.height(),
        point = 0;
        megaNav.css('top', header_height);
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