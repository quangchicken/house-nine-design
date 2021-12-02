jQuery(window).scroll(function(){
    if (jQuery(window).scrollTop() > 105){
        
    }else{
        jQuery('.collection-header').removeClass( "scroll");
        jQuery('.boost-pfs-filter-left-col .boost-pfs-filter-tree').css("max-height", maxHeightFilter);
    }

    jQuery(".boost-pfs-filter-product-item:not(.visible)").each(function(i) { 
        // grid item is half in view
        var objectBottom = jQuery(this).offset().top + $(this).outerHeight()/2;
        // bottom of window
        var windowBottom = $(window).scrollTop() + jQuery(window).innerHeight() + 600;
        // if grid-item half in view increase opacity to 100% (1)

        if (objectBottom < windowBottom) {
            jQuery(this).addClass('visible');
            jQuery(this).delay(80).animate({
                opacity: 1,
            }, 80);
            // and add a class coz css
        }
    });
});