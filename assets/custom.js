function navMeganav() {
    var header_height = jQuery('#header').height(),
        current = jQuery(window).scrollTop(),
        megaNav = jQuery('.nav__meganav');

    if(current == 0){
        megaNav.css('top', header_height);
    } else{
        megaNav.css('top', header_height);
    }
}

jQuery(window).on('scroll', navMeganav);