function headerSticky() {
    var container = jQuery('.header-container'),
        //point = i.height(),
        point = 0;
    // if(!container.hasClass('cms-common-page')){
    //     container.css('padding-top', i.height());
    // }
    container.addClass('scroll');
}

jQuery(window).on('scroll', headerSticky);