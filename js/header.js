$("#search-icon").on("click",function(){
    $("#search-icon-wrapper").hide();
    $("#search").show();
})

$("#close").on("click",function(){
    $("#search-icon-wrapper").show();
    $("#search").hide();
})

$(".nav-toggle").on("click",function(){
    if($("#main-nav").css("display") != "none"){
        $("#main-nav").removeClass("mobile-view");
        $("#main-nav").hide();
        $(".logo:first").css("width","40%");
        $(".main-content").show();
    }
    else{
        $("#main-nav").addClass("mobile-view");
        $(".logo:first").css("width","90%");
        $("#main-nav").css("height",($(window).height()-100));
        $("#main-nav").show();
        $(".main-content").hide();
    }
        
})