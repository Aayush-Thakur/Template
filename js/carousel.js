$(document).ready(function(){
    var carousel = $(".carousel-wrapper ul");
    var carouselWidth = carousel.innerWidth();
    var sliderCount = carousel.children().length;
    var width = carouselWidth / sliderCount ;
    $(window).on("resize",function(){
        carouselWidth = carousel.innerWidth();
        width = carouselWidth / sliderCount ;
    })
    setInterval(function(){
        carousel.animate({marginLeft:-width},1000,function(){
            $(this).find("li:last").after($(this).find("li:first"));
            $(this).css({marginLeft:0});
        })
    },5000);
})