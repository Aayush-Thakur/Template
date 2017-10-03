$(window).on("load",function(){
    var skillBar = $(".skillsets .black-background");
    skillBar.append("<div></div>") ;
    var skillsets = $(".skillsets .black-background div");
    skillsets.addClass("skillset-bar");
    $("#design").children(".skillset-bar").animate({width:"90%"},1500);
    $("#prototyping").children(".skillset-bar").animate({width:"80%"},1500);
    $("#basic").children(".skillset-bar").animate({width:"95%"},1500);
    $("#visual-design").children(".skillset-bar").animate({width:"90%"},1500);
})