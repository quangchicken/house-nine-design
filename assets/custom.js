function headerSticky() {
    var header = jQuery('section.shopify-section:first-of-type >div'),
        i = jQuery('#shopify-section-header'),
        //point = i.height(),
        point = 0;
    // if(!container.hasClass('cms-common-page')){
    //     container.css('padding-top', i.height());
    // }
    container.css('padding-top', i.height());
}

jQuery(window).on('scroll', headerSticky);