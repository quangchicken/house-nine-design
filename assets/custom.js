function headerSticky() {
    var container = jQuery('.header-container'),
        i = jQuery('#shopify-section-header'),
        //point = i.height(),
        point = 0;
    // if(!container.hasClass('cms-common-page')){
    //     container.css('padding-top', i.height());
    // }
    container.css('padding-top', i.height());
}

jQuery(window).on('scroll', headerSticky);