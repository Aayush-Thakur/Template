$(window).on("load",function(){
    var skillBar = $(".skillsets .black-background");
    skillBar.append("<div></div>") ;
    var skillsets = $(".skillsets .black-background div");
    skillsets.addClass("skillset-bar");
    $("#design").children(".skillset-bar").animate({width:"90%"},"slow");
    $("#prototyping").children(".skillset-bar").animate({width:"80%"},"slow");
    $("#basic").children(".skillset-bar").animate({width:"95%"},"slow");
    $("#visual-design").children(".skillset-bar").animate({width:"90%"},"slow");
})