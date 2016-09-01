$(document).ready(function() {
    $('.nav-bar > div > div').on('mouseenter', function(e) {
        e.preventDefault();

        $(this).children('div').stop().animate( { height: ["toggle", "swing"] } );
    })

    $('.nav-bar > div > div').on('mouseleave', function(e) {
        e.preventDefault();

        $(this).children('div').stop().animate( { height: ["toggle", "swing"] } );
    })

    $('div.menu-nav-button').on('click', function(e) {
        $(this).next('div').animate( { height: ["toggle", "swing"] } );
    })
})
