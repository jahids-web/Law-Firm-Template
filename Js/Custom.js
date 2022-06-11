$(function () {
//////nav bar start///
 $(function () {
        var $dis = $(".low_nav").offset().top;
        $(window).scroll(function () {
            var $scroll = $(this).scrollTop();
            if ($scroll >= $dis) {
                $(".low_nav").addClass("fixed")
            } else {
                $(".low_nav").removeClass("fixed")
            }

        })
    });
//////nav bar start///







});

