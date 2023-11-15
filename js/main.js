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

    let $slider = $( '#portfolio-slider' );
    let sliderWidth = $slider.width();
    let $slider_clone = $slider.clone( true, true ); // add true, true to clone events too!

    // When someone clicks on a filter
    $( '.filter-item').on( 'click', function(){
        let filter_name = $( this ).text();

        // Create a new clone for the slider items
        let $new_slider = $slider_clone.clone( true, true );

        $( '.filter-item').css('color', '#a4a4a4');
        $(this).css('color', '#ff0036');

        // Clear current slider
        $slider.slick( 'unslick' ); // Remove slick
        $slider.empty(); // Remove elements

        // Show only filtered items
        if( filter_name == "All" ) { 

            $slider.append( $new_slider.find( '.portfolio-slider-item' ) ); 
        } else { 

            $slider.append( $new_slider.find( `.portfolio-slider-item.${$(this).attr("id")}`));
        }

        let rows = $('#portfolio-slider .portfolio-slider-item').length < 4 ? 1 : 2;
        
        // Slick slider init or call your function that does it like I do
        init_projecten_slider($slider, rows);
        $('#portfolio-slider .slick-slide').width(sliderWidth);
    });

    
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

