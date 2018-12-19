(function ($){
"use strict";
//scrool reveal----------------------------------Start----------
    window.sr = ScrollReveal();
    sr.reveal('#header_area', {  //header_area----
        duration: 1000,
        origin: 'bottom',
    });
    sr.reveal('#slider_area', {  //slider_area----
        duration: 800,
        origin: 'bottom',
    });
    sr.reveal('#showcase_area', {  //showcase_area----
        duration: 900,
        delay: 0,
        origin: 'left',
        distance: '500px',
    });
    sr.reveal('.single_features', {  //single_features----
        duration: 900,
        delay: 1000,
        origin: 'right',
        distance: '600px',
    });
    sr.reveal('.services_title', {  //services_title----
        duration: 900,
        delay: 1000,
        origin: 'top',
        distance: '600px',
    });
    sr.reveal('.services_content', {  //services_content----
        duration: 500,
        delay: 500,
        origin: 'top',
        distance: '600px',
    });
    sr.reveal('.project_title', {  //services_content----
        duration: 900,
        origin: 'bottom',
        distance: '500px',
    });
    sr.reveal('.choose_title', {  //choose_title----
        duration: 900,
        delay: 1000,
        origin: 'bottom',
        distance: '500px',
    });
    sr.reveal('.video_bg', {  //video_bg----
        duration: 900,
        delay: 1000,
        origin: 'left',
        distance: '500px',
    });
    sr.reveal('.single_choose_col', {  //single_choose_col----
        duration: 900,
        delay: 1000,
        origin: 'right',
        distance: '500px',
    });
    sr.reveal('.working_wrapper', {  //working_wrapper----
        duration: 1000,
        origin: 'top',
        distance: '400px',
    });
    sr.reveal('.work_bg', {  //work_bg----
        duration: 1000,
        origin: 'right',
        distance: '400px',
    });
    sr.reveal('#Blog_test_area', {  //Blog_test_area----
        duration: 1000,
        origin: 'bottom',
        distance: '300px',
    });
    sr.reveal('#company_area', {  //company_area----
        duration: 1000,
        origin: 'bottom',
    });
    sr.reveal('.bemax_section', {  //bemax_section----
        duration: 2000,
        delay: 1000,
        origin: 'bottom',
    });
    sr.reveal('.features_section', {  //features_section----
        duration: 2000,
        delay: 1000,
        origin: 'top',
    });
    sr.reveal('.contact_section', {  //contact_section----
        duration: 2000,
        delay: 1000,
        origin: 'left',
    });
    sr.reveal('.newslleter_section', {  //newslleter_section----
        duration: 2000,
        delay: 1000,
        origin: 'right',
    });
    sr.reveal('.copyright_title', {  //copyright_title----
        duration: 2000,
        origin: 'right',
        distance: '1000px',
    });
//scrool reveal----------------------------------End-----------------------------
//nice scrool--------------------
$("html").niceScroll({
    cursorwidth: 10,
    cursorborder: 0,
    cursorcolor: '#507BD6',
    autohidemode: true,
    cursorborderradius: 0,
    horizrailenabled: false,
});

//mean-menu----------------------
$('#mobile_menu').meanmenu({
    meanScreenWidth: "767",
    meanMenuContainer: '.mobile_menu_active'

});
//scrool to Top--------------------
$("#scrollToTop").on('click',function(){
        $("body, html").animate({scrollTop : 0}, 500);
        return false;
})
//slider Activation----------------
$(".slider-active").owlCarousel({
    loop:true,
    nav:true,
    autoplay:true,
    navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1,
            autoplay:false,
        },
        600:{
            items:1,
        },
        1000:{
            items:1
        }
    }
})
//project Activation----------------
$(".project-active").owlCarousel({
    loop:true,
    nav:true,
    margin:10,
    navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})
//blog_slider Activation ----------------
$(".blog_slider_active").owlCarousel({
    loop:true,
    nav:true,
    navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

//testimonial_slider Activation----------------
$(".test_slider_active").owlCarousel({
    loop:true,
    nav:true,
    navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

//company_slider Activation ----------------
$(".company_slider_active").owlCarousel({
    loop:true,
    nav:true,
    navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:4
        },
        1000:{
            items:6
        }
    }
})











})(jQuery);	