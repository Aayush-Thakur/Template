$(window).on("load",function(){
    var skillBar = $(".skillsets .black-background");
    skillBar.append("<div></div>") ;
    var skillsets = $(".skillsets .black-background div");
    skillsets.addClass("skillset-bar");
    $("#design").children(".skillset-bar").animate({width:"90%"},3000);
    $("#prototyping").children(".skillset-bar").animate({width:"80%"},3000);
    $("#basic").children(".skillset-bar").animate({width:"95%"},3000);
    $("#visual-design").children(".skillset-bar").animate({width:"90%"},3000);
})