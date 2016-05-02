$(document).ready(function() {
    $('.nav-bar > div').on('mouseenter', function(e) {
        e.preventDefault();

        $(this).children('div').show();
    })
        $('.nav-bar > div').on('mouseleave', function(e) {
            e.preventDefault();

            $(this).children('div').hide();
        })
})
