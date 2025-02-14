jQuery(document).ready(function ($) {
    $(".hamburger-menu").click(function () {
        $(this).toggleClass("open");
        $(".mobile-nav").toggleClass("open");
    });

    $(document).click(function (e) {
        if (!$(e.target).closest(".mobile-menu").length) {
            $(".hamburger-menu").removeClass("open");
            $(".mobile-nav").removeClass("open");
        }
    });
});
