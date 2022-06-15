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

///scrole ismot start///
    $(document).ready(function () {

        $("a").on('click', function (event) {

            if (this.hash !== "") {

                event.preventDefault();
                var hash = this.hash;
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 1500, function () {
                    window.location.hash = hash;
                });
            } // End if
        });
    });
///scrole ismot end///





});

