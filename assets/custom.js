function navMeganav() {
    var header_height = jQuery('#header').height(),
        current = jQuery(window).scrollTop(),
        megaNav = jQuery('.nav__meganav');

    if(current == 0){
        megaNav.css('top', 105);
    } else{
        megaNav.css('top', 60);
    }
}

jQuery(window).on('scroll', navMeganav);
jQuery(document).ready(function() {
    if( jQuery('.product-thumbnails__item-link').hasClass('active')){
        jQuery(this).click
    }
});