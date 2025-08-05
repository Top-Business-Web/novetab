$(function(){

    'use strict';

  

    // featured product

    $(".managent").owlCarousel({
        stagePadding: 200,
        margin:10,
        autoplay: true,
        autoplayhoverpause: true,
        autoplaytimeout: 100,
        items: 3,
        nav: false,
        loop: true,
        dots: false,
        responsive: {
            0 : {
                items: 1
            },
            485 : {
                items: 2
            },
            728 : {
                items: 3
            },
            1200 : {
                items: 3
            }
        }
    });

});
