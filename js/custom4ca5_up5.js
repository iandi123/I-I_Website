var sw=$(window).width(),sh=$(window).height();function fontResizer(){var e=parseInt(sw)/118.9375;$("body").css("font-size",e)}function mobSliderheight(){var e=$(".servicesBrandsSlider .swiper-slide").outerWidth();$(".servicesBrandsSlider .mob-frame").css("width",e)}if($(document).ready(function(){if($("#toggle").click(function(){$(this).toggleClass("active"),$(".mobNav").toggleClass("open"),$("html").toggleClass("overflow-hidden")}),sw>767&&$(document).find("div").hasClass("services-thumb-slider")){var e=new Swiper(".services-thumb-slider",{slidesPerView:5,speed:400,direction:"vertical",centeredSlides:!0,mousewheel:!0,initialSlide:"2"});$(".services-thumb-slider .swiper-slide").click(function(){e.slideTo($(this).index())})}if(sw>767&&$(document).find("div").hasClass("services-slider")){var s=new Swiper(".services-slider",{slidesPerView:1,initialSlide:"2",speed:400,centeredSlides:!0,effect:"fade",fadeEffect:{crossFade:!1}});s.controller.control=e,e.controller.control=s}if($(document).find("div").hasClass("faq__Slider")&&new Swiper(".faq__Slider",{slidesPerView:1.1,spaceBetween:10,speed:2e3,breakpoints:{576:{slidesPerView:2,spaceBetween:30},992:{slidesPerView:3,spaceBetween:30},1025:{slidesPerView:5,spaceBetween:30}}}),$(document).find("div").hasClass("worth-read__Slider")&&new Swiper(".worth-read__Slider",{slidesPerView:1.25,spaceBetween:30,centeredSlides:!1,speed:2e3,loop:!0,loopedSlides:10,scrollbar:{el:".worth-read__Slider .swiper-scrollbar",draggable:!0},breakpoints:{576:{slidesPerView:2,spaceBetween:80,centeredSlides:!0},992:{slidesPerView:3,spaceBetween:80,centeredSlides:!1},1025:{slidesPerView:4.5}}}),$(document).find("div").hasClass("our-services__services-slider")&&new Swiper(".our-services__services-slider",{freeMode:!0,slidesPerView:"auto",speed:12e3,autoplay:{delay:1,enable:!0},loop:!0,grabCursor:!1,shortSwipes:!1,longSwipes:!1,allowTouchMove:!1,watchSlidesProgress:!0}),sw<576&&$(document).find("div").hasClass("serviceHelp__slider")&&new Swiper(".serviceHelp__slider",{slidesPerView:1,spaceBetween:5,loop:!1,speed:2e3}),$(document).find("div").hasClass("serviceDevelopment__thumb"))var i=new Swiper(".serviceDevelopment__thumb",{slidesPerView:1,loop:!1,speed:1200,spaceBetween:30,breakpoints:{576:{slidesPerView:1.5},1024:{slidesPerView:3}}});$(document).find("div").hasClass("serviceDevelopment__gallery")&&new Swiper(".serviceDevelopment__gallery",{slidesPerView:1,loop:!1,speed:1200,effect:"fade",fadeEffect:{crossFade:!0},thumbs:{swiper:i},navigation:{nextEl:".serviceDevelopment__galleryWrapper .swiper-button-next",prevEl:".serviceDevelopment__galleryWrapper .swiper-button-prev"}}),$(document).find("div").hasClass("happyEmplyees__slider")&&new Swiper(".happyEmplyees__slider",{slidesPerView:1,loop:!1,speed:800,effect:"fade",fadeEffect:{crossFade:!0},navigation:{nextEl:".happyEmplyees__rightsec .swiper-button-next",prevEl:".happyEmplyees__rightsec .swiper-button-prev"}}),$(document).find("div").hasClass("servicesBrandsSlider")&&new Swiper(".servicesBrandsSlider",{slidesPerView:1.85,spaceBetween:0,loop:!0,speed:1e3,centeredSlides:!0,slideToClickedSlide:!0,autoplay:{delay:3e3,disableOnInteraction:!0},breakpoints:{576:{spaceBetween:0,slidesPerView:3},768:{slidesPerView:4},1100:{slidesPerView:5,spaceBetween:0}}}),$(document).find("div").hasClass("uiPortfolio__slider")&&new Swiper(".uiPortfolio__slider",{slidesPerView:1,spaceBetween:0,loop:!1,speed:500,effect:"fade",fadeEffect:{crossFade:!0},navigation:{nextEl:".uiPortfolio .swiper-button-next",prevEl:".uiPortfolio .swiper-button-prev"}}),$(document).find("div").hasClass("research-design__slider")&&new Swiper(".research-design__slider",{slidesPerView:2,spaceBetween:0,loop:!1,speed:500,autoplay:{delay:3e3,disableOnInteraction:!0},breakpoints:{576:{spaceBetween:0,slidesPerView:3},768:{slidesPerView:3},1100:{slidesPerView:5,spaceBetween:0}}}),setTimeout(function(){mobSliderheight()},1500),$(".experties__tabs-wrapper--small-cards").on("click",function(){var e=$(this).attr("data-rel");return $(".experties__tabs-wrapper--small-cards").removeClass("active"),$(this).addClass("active"),$("#"+e).fadeIn("slow").siblings(".experties__tabs-wrapper--detail-tab").hide(),!1}),$(".experties__tabs-wrapper--small-cards:first").addClass("active")}),$(".toggle-btn > p").on("click",function(){if(sw<992){var e=$(this).parent().find("ul");$(this).hasClass("opened")?($(this).removeClass("opened"),$(".toggle-btn > .qlinks-menu").slideUp()):($(".toggle-btn > p").removeClass("opened"),$(".toggle-btn > .qlinks-menu").slideUp(),$(this).addClass("opened"),e.slideDown())}}),$(".menu-toggleBtn").on("click",function(){var e=$(this).siblings(".inner-menu"),s=$(this).siblings(".menu-link");$(this).hasClass("active")?($(this).removeClass("active"),$(".menu-link").removeClass("active"),$(".inner-menu").slideUp()):($(".menu-toggleBtn").removeClass("active"),$(".menu-link").removeClass("active"),$(".inner-menu").slideUp(),$(this).addClass("active"),e.slideDown(),s.addClass("active"))}),$(".inner-menu-toggleBtn").on("click",function(){var e=$(this).siblings(".sub-inner-menu"),s=$(this).siblings(".inner-menu__item--link");$(this).hasClass("active")?($(this).removeClass("active"),$(".inner-menu__item--link").removeClass("active"),$(".sub-inner-menu").slideUp()):($(".inner-menu-toggleBtn").removeClass("active"),$(".inner-menu__item--link").removeClass("active"),$(".sub-inner-menu").slideUp(),$(this).addClass("active"),e.slideDown(),s.addClass("active"))}),$(window).on("resize orientation",function(){sw=$(window).width(),(sh=$(window).height())<450&&sw>480&&sw<820?$("#portrait-warnning").css("display","flex"):$("#portrait-warnning").css("display","none"),setTimeout(function(){sw>1025&&(sw<1400&&sw>1300&&sh>900||fontResizer());var e=$(".servicesBrandsSlider .swiper-slide").outerWidth();$(".servicesBrandsSlider .mob-frame").css("width",e)},1e3)}),$(window).scroll(function(){var e=$(".header");window.pageYOffset>0?e.addClass("sticky"):e.removeClass("sticky")}),sw>991&&$(".menu__menuitem").hover(function(){$(this).is(":hover")?($(this).children(".dropdown-js").stop().slideToggle(),$(this).closest(".menu__menuitem").addClass("dropdown-open")):($(this).children(".dropdown-js").stop().slideToggle(),$(this).closest(".menu__menuitem").removeClass("dropdown-open"))}),sw<992&&$(".menu__menuitem--menulink").click(function(){var e=$(this).siblings(".dropdown-js");$(this).parent(".menu__menuitem").hasClass("dropdown-open")?($(this).parent(".menu__menuitem").removeClass("dropdown-open"),$(this).siblings(".dropdown-js").slideUp(600)):($(".menu > .menu__menuitem ").removeClass("dropdown-open"),$(".menu__menuitem > .dropdown-js").slideUp(600),$(this).parent().addClass("dropdown-open"),e.slideDown())}),$(".menu-slider-thumb li:first-child").addClass("active"),$(".menu-slider-gallery-slide").hide(),$(".menu-slider-gallery-slide:first-child").show(),$(".menu-slider-thumb li").mouseenter(function(){console.log("aaaaaa");var e=$(this).attr("data-menu");$(this).addClass("active").siblings().removeClass("active"),"all"==e||($(".menu-slider-gallery-slide").css("display","none"),$(".menu-slider-gallery-slide[data-menu="+e+"]").css("display","block").fadeIn(10))}),$(".serviceBrands__menu li:first-child a").addClass("active"),$(".serviceBrands__tabBoxWrapper .serviceBrands__tabBox").hide(),$(".serviceBrands__tabBoxWrapper .serviceBrands__tabBox:first-child").show(),$(".newserviceBrands li:first-child a").addClass("active"),$(".newserviceBrands__tabBoxWrapper .newserviceBrands__tabBox").hide(),$(".newserviceBrands__tabBoxWrapper .newserviceBrands__tabBox:first-child").show(),$(".serviceBrands__menu li a").on("click",function(){var e=$(this).attr("data-rel");$(".serviceBrands__menu li a").removeClass("active"),$(this).addClass("active"),$("#"+e).fadeIn(1e3).siblings(".serviceBrands__tabBox").hide()}),$(".newserviceBrands__menu li a").on("click",function(){var e=$(this).attr("data-rel");$(".newserviceBrands__menu li a").removeClass("active"),$(this).addClass("active"),$("#"+e).fadeIn(1e3).siblings(".newserviceBrands__tabBox").hide()}),$(".moreless-button").click(function(){$(".moretext").toggleClass("active"),"Read more"==$(this).children("span").text()?$(this).children("span").text("Read less"):$(this).children("span").text("Read more")}),$(document).ready(function(){(function(){function e(){event.preventDefault(),$("body").removeClass("show-video-modal noscroll"),$("#youtube").attr("src","")}$(".js-trigger-video-modal").on("click",function(e){e.preventDefault();var s=$(this).attr("data-youtube-id");$("#youtube").attr("src","//www.youtube.com/embed/"+s+"?autoplay=1&rel=0"),$("body").addClass("show-video-modal noscroll")}),$("body").on("click",".close-video-modal, .video-modal .overlay",function(s){e()}),$("body").keyup(function(s){27==s.keyCode&&e()})})(),$(".apply-btn").click(function(){$(".career-detail-form").fadeIn(200),$("html").css("overflow","hidden")}),$(".cross-times").click(function(){$(".career-detail-form").fadeOut(200),$("html").css("overflow-y","scroll")});var e=window.location.pathname;$('.mobNav__menu--item  a[href="'+e+'"]').addClass("active-menu").parents(".mobNav__menu--item").addClass("active-menu"),$('.menu__menuitem  a[href="'+e+'"]').addClass("active").parents(".menu__menuitem").addClass("active"),$(".counting").each(function(){$(this).prop("Counter",0).animate({Counter:$(this).text()},{duration:4e3,easing:"swing",step:function(e){$(this).text(Math.ceil(e))}})}),document.querySelectorAll(".block"),window.addEventListener("load",function(){})}),document.addEventListener("DOMContentLoaded",function(){function e(e){let s=document.querySelectorAll(".select-items"),i=document.querySelectorAll(".select-selected");i.forEach((s,i)=>{s!==e&&s.classList.remove("select-arrow-active")}),s.forEach((s,t)=>{i[t]!==e&&s.classList.add("select-hide")})}document.querySelectorAll(".custom-select").forEach(s=>{let i=s.querySelector("select"),t=document.createElement("div");t.classList.add("select-selected"),t.innerHTML=i.options[i.selectedIndex].innerHTML,s.appendChild(t);let n=document.createElement("div");n.classList.add("select-items","select-hide");for(let r=1;r<i.length;r++){let l=document.createElement("div");l.innerHTML=i.options[r].innerHTML,l.addEventListener("click",function(){i.selectedIndex=r,t.innerHTML=this.innerHTML;let e=n.getElementsByClassName("same-as-selected");for(let s of e)s.classList.remove("same-as-selected");this.classList.add("same-as-selected"),t.click()}),n.appendChild(l)}s.appendChild(n),t.addEventListener("click",function(s){s.stopPropagation(),e(this),n.classList.toggle("select-hide"),this.classList.toggle("select-arrow-active")})}),document.addEventListener("click",function(){e()})}),document.addEventListener("DOMContentLoaded",function(){document.querySelector(".js-logoSliderBox")&&new Swiper(".js-logoSliderBox .swiper-container",{centeredSlides:!1,loop:!0,speed:2e3,slidesPerView:2,spaceBetween:0,observer:!0,observeParents:!0,navigation:{nextEl:".js-logoSliderBox .swiper-button-next",prevEl:".js-logoSliderBox .swiper-button-prev"},autoplay:{delay:1e3},breakpoints:{576:{slidesPerView:3},768:{slidesPerView:3},992:{slidesPerView:5},1200:{slidesPerView:6},1400:{slidesPerView:7},1600:{slidesPerView:8}}})}),document.addEventListener("DOMContentLoaded",function(){document.querySelector(".js-BrandsSlider")&&new Swiper(".js-BrandsSlider",{loop:!0,speed:1e3,slidesPerView:1,spaceBetween:0,observer:!0,observeParents:!0,centeredSlides:!1,autoplay:{delay:1e3},breakpoints:{576:{slidesPerView:1},768:{slidesPerView:2},992:{slidesPerView:3},1200:{slidesPerView:"auto",centeredSlides:!1}}})}),document.addEventListener("DOMContentLoaded",function(){document.querySelector(".js-testimonialsSlider")&&new Swiper(".js-testimonialsSlider .swiper-container",{loop:!0,speed:1e3,slidesPerView:"auto",spaceBetween:0,observer:!0,observeParents:!0,navigation:{nextEl:".js-testimonialsSlider .swiper-button-next",prevEl:".js-testimonialsSlider .swiper-button-prev"},autoplay:{delay:1e3},breakpoints:{576:{},992:{centeredSlides:!0}}})}),$(document).find("div").hasClass("servicenDevelopment__thumb"))var servicenDevelopment__thumb=new Swiper(".servicenDevelopment__thumb",{slidesPerView:1,loop:!1,speed:1200,spaceBetween:30,breakpoints:{576:{slidesPerView:1.5},1024:{slidesPerView:3}}});if($(document).find("div").hasClass("servicenDevelopment__gallery"))var servicenDevelopment__gallery=new Swiper(".servicenDevelopment__gallery",{slidesPerView:1,loop:!1,speed:1200,effect:"fade",fadeEffect:{crossFade:!0},thumbs:{swiper:servicenDevelopment__thumb},navigation:{nextEl:".servicenDevelopment__galleryWrapper .swiper-button-next",prevEl:".servicenDevelopment__galleryWrapper .swiper-button-prev"}});document.addEventListener("DOMContentLoaded",function(){document.querySelector(".js-techSliderBox")&&new Swiper(".js-techSliderBox .swiper-container",{speed:1e3,slidesPerView:2,spaceBetween:0,observer:!0,observeParents:!0,navigation:{nextEl:".js-techSliderBox .swiper-button-next",prevEl:".js-techSliderBox .swiper-button-prev"},autoplay:{delay:2e3},breakpoints:{576:{},768:{slidesPerView:3},992:{slidesPerView:4},1200:{slidesPerView:"auto"}}})}),document.addEventListener("DOMContentLoaded",function(){let e=document.querySelector(".service-listing-wrapper-tab");if(e){let s=e.querySelectorAll(".menu .menu__item");if(window.innerWidth>1099){if(e){let i=e.querySelectorAll(".menu .menu__item");function t(){i.forEach(e=>{e.classList.remove("active")}),this.classList.add("active")}function n(){i.forEach(e=>{e.classList.remove("active")}),i[0].classList.add("active")}e.querySelector(".menu__item.active")||i[0].classList.add("active"),i.forEach(e=>{e.addEventListener("mouseover",t),e.addEventListener("mouseout",n)})}}else{let r=s[0],l=e.querySelectorAll(".menu__item--link");e.querySelector(".menu__item.active")||r.classList.add("active"),l.forEach(e=>{e.addEventListener("click",function(i){i.preventDefault(),s.forEach(e=>{e.classList.remove("active")}),e.parentElement.parentElement.classList.add("active")})})}}}),$(document).ready(function(){});