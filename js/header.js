$(document).ready(function(){
    $(window).on("resize",function(){
        if(screen.width > 1024){
            $("#main-nav").show();  
        }
    })
})

$("#search-icon").on("click",function(){
    $("#search-icon-wrapper").hide();
    $("#main-nav").hide();
    $("#search").show();
})

$("#close").on("click",function(){
    $("#search-icon-wrapper").show();
    $("#main-nav").show();
    $("#search").hide();
})

$(".nav-toggle").on("click",function(){
    $(".nav-toggle span").toggleClass("close");
    if($("#main-nav").css("display") != "none"){
        $("#main-nav").removeClass("mobile-view");
        $("#main-nav").hide();
        if(screen.width > 600){
            $(".header-nav-wrapper").removeClass("cover");
        }
        $(".main-content").show();
        $("footer").show();
    }
    else{
        $("#main-nav").addClass("mobile-view");
        $("#main-nav").show();
        $("#main-nav").css("height",screen.height);
        if(screen.width > 600){
            $(".header-nav-wrapper").addClass("cover");
        }
        $(".main-content").hide();
        $("footer").hide();
    }
        
})