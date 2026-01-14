jQuery(document).ready(function ($) {
    let lastScrollTop = 0;
    let header = $("header");
    let scrollThreshold = 50;

    // Hide/Show Header on Scroll
    $(window).on("scroll", function () {
        let scrollTop = $(this).scrollTop();
        
        if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
            header.addClass("hidden");

            // Close mobile menu when scrolling down
            $(".hamburger-menu").removeClass("active");
            $(".mobile-nav").removeClass("open");
        } else {
            header.removeClass("hidden");
        }
        
        lastScrollTop = scrollTop;
    });

    // Mobile Menu Toggle
    $(".hamburger-menu").on("click", function (e) {
        e.stopPropagation();
        $(this).toggleClass("active");
        $(".mobile-nav").toggleClass("open");
    });

    // Close menu when clicking outside
    $(document).on("click", function (e) {
        if (!$(e.target).closest(".mobile-menu").length) {
            $(".hamburger-menu").removeClass("active");
            $(".mobile-nav").removeClass("open");
        }
    });
});
