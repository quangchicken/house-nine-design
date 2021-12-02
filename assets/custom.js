function headerSticky() {
    var container = jQuery('.header-container'),
        //point = i.height(),
        point = 0;
    // if(!container.hasClass('cms-common-page')){
    //     container.css('padding-top', i.height());
    // }
    if (jQuery(window).scrollTop() > 105){
        container.addClass('scroll');
    } else{
        container.removeClass('scroll');
    }
}

jQuery(window).on('scroll', headerSticky);