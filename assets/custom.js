// function headerSticky() {
//     var container = jQuery('.header-container');
//     if (jQuery(window).scrollTop() > 60){
//         if(!container.hasClass('scroll')){
//             container.addClass('scroll');
//         }
//     } else{
//         container.removeClass('scroll');
//     }
// }

jQuery(window).on('scroll', headerSticky);

jQuery(window).scroll(function(){
    var container = jQuery('.header-container');
    if (jQuery(window).scrollTop() > 105){
        container.addClass('scroll');
    }else{
        container.removeClass('scroll');
    }
});