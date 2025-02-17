jQuery(document).ready(function ($) {
    let lastScrollTop = 0;
    let header = $("header");
    let scrollThreshold = 50; // Adjust if needed -VJ

    $(window).on("scroll", function () {
        let scrollTop = $(this).scrollTop();

        if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
            // Scrolling Down - Hide Header -VJ
            header.addClass("hidden");
        } else {
            // Scrolling Up - Show Header -VJ
            header.removeClass("hidden");
        }

        lastScrollTop = scrollTop;
    });
});
