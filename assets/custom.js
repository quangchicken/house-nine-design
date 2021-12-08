function navMeganav() {
    var header_height = jQuery('#header').height(),
        current = jQuery(window).scrollTop(),
        megaNav = jQuery('.nav__meganav');

    megaNav.css('top', header_height);
    console.log(current);
}

jQuery(window).on('scroll', navMeganav);