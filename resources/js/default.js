//Multi Level Drop Downs
$('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
    if (!$(this).next().hasClass('show')) {
        $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
    }
    var $subMenu = $(this).next(".dropdown-menu");
    $subMenu.toggleClass('show');
    $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
        $('.dropdown-submenu .show').removeClass("show");
    });
    return false;
});

//Navbar parent links on desktop
$(document).ready(function(){
    if ($(window).width() > 769) {

        $("#navbar .nav-link").click(function () {
            var hrefValue = $(this).attr("href");
            window.location = hrefValue;
        });

        $("#navbar .dropdown-item").click(function () {
            var hrefValue = $(this).attr("href");
            window.location = hrefValue;
        });

    }
});

//Navbar dropdown on hover
$(document).ready(function() {
    if ($(window).width() > 769) {

        //Main Products
        $('#products_menu').hover(function () {
            $(this).find('#products_submenu').stop(true, true).delay(200).fadeIn(500);
        }, function () {
            $(this).find('#products_submenu').stop(true, true).delay(200).fadeOut(500);
        });

        //HHS
        $('#hhs_menu').hover(function () {
            $(this).find('#hhs_submenu').stop(true, true).delay(200).fadeIn(500);
        }, function () {
            $(this).find('#hhs_submenu').stop(true, true).delay(200).fadeOut(500);
        });
    }
});