"use strict";
$(document).ready(function(){

    $('#main-slider').slick({
    	infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: "<button class='prev'></button>",
        nextArrow: "<button class='next'></button>",
    });


    function init_projecten_slider(slider, _rows) {
        slider.slick({
            infinite: false,
            rows: _rows,
            dots: false,
            arrows: false,
            slidesPerRow: 4,
            slidesToScroll: 1,
            variableWidth: true,
            speed: 500,
        });
    }

    init_projecten_slider($('#portfolio-slider'), 2);

    $('#clients-slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    });

    $('#team-slider').slick({
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
    });

    $('#articleCollapsible').on("click", function(){
        $("#articleCollapsible>img").toggleClass("rotate180");
    });

    
});

