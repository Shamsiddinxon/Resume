!function(t){"use strict";t(document).on("ready",function(){(t(window).on("scroll",function(){var o=t(".theme-top-button");t(window).scrollTop()>=100?o.addClass("fixed"):o.removeClass("fixed")}),t(".scroll-top").on("click",function(){return t("html, body").animate({scrollTop:0},1500),!1}),t("#theme-menu-list").length)&&(t("#theme-menu-list a").on("click",function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var o=t(this.hash);if((o=o.length?o:t("[name="+this.hash.slice(1)+"]")).length)return t("html, body").animate({scrollTop:o.offset().top-0},1e3,"easeOutCubic"),!1}}),t("a.scroll-target").on("click",function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")||location.hostname==this.hostname){var o=t(this.hash);if((o=o.length?o:t("[name="+this.hash.slice(1)+"]")).length)return t("html,body").animate({scrollTop:o.offset().top-75},1e3),!1}}),t("body").scrollspy({target:"body",offset:20}));var o=t(".timer");o.length&&o.appear(function(){o.countTo()});var e=t(".fancybox");e.length&&e.fancybox({arrows:!0,animationEffect:"zoom-in-out",transitionEffect:"zoom-in-out"}),t(".progress-bar").each(function(){var o=t(this).data("percent");t(this).css({transition:"width 3s"}),t(this).appear(function(){console.log("hello"),t(this).css("width",o+"%"),t(this).find(".count").countTo({from:0,to:o,speed:3e3,refreshInterval:50})})})}),t(window).on("load",function(){if(t("#isotop-gallery-wrapper").length){var o=t("#isotop-gallery-wrapper").isotope({itemSelector:".isotop-item",percentPosition:!0,masonry:{columnWidth:".grid-sizer"}});t(".isotop-menu-wrapper").on("click","li",function(){var e=t(this).attr("data-filter");o.isotope({filter:e})}),t(".isotop-menu-wrapper").each(function(o,e){var n=t(e);n.on("click","li",function(){n.find(".is-checked").removeClass("is-checked"),t(this).addClass("is-checked")})})}})}(jQuery);
document.addEventListener("DOMContentLoaded", function() {
  var lazyloadImages = document.querySelectorAll("img.lazy");    
  var lazyloadThrottleTimeout;
  
  function lazyload () {
    if(lazyloadThrottleTimeout) {
      clearTimeout(lazyloadThrottleTimeout);
    }    
    
    lazyloadThrottleTimeout = setTimeout(function() {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function(img) {
            if(img.offsetTop < (window.innerHeight + scrollTop)) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
            }
        });
        if(lazyloadImages.length == 0) { 
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
    }, 20);
  }
  
  document.addEventListener("scroll", lazyload);
  window.addEventListener("resize", lazyload);
  window.addEventListener("orientationChange", lazyload);
});