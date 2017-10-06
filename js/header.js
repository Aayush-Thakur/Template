$("#search-icon").on("click",function(){
    $("#search-icon-wrapper").hide();
    $("#search").show();
})

$("#close").on("click",function(){
    $("#search-icon-wrapper").show();
    $("#search").hide();
})

$(".nav-toggle").on("click",function(){
    $(".nav-toggle span").toggleClass("close");
    if($("#main-nav").css("display") != "none"){
        $("#main-nav").removeClass("mobile-view");
        $("#main-nav").hide();
        if(screen.width > 600){
            $(".logo:first").css("width","40%");
        }
        $(".main-content").show();
        $("footer").show();
    }
    else{
        $("#main-nav").addClass("mobile-view");
        if(screen.width < 600){
            $(".logo:first").css("width","100%");
        }
        else{
            $(".logo:first").css("width","90%");
        }
        $("#main-nav").show();
        $("#main-nav").css("height",screen.height);
        $(".main-content").hide();
        $("footer").hide();
    }
        
})