$(document).ready(function() {
    $('.nav-bar > div > div').on('mouseenter', function(e) {
        e.preventDefault();

        $(this).children('div').show();
    })

    $('.nav-bar > div > div').on('mouseleave', function(e) {
        e.preventDefault();

        $(this).children('div').hide();
    })

    $('div.menu-nav-button').on('click', function(e) {
        $(this).next('div').toggle();
    })
})
