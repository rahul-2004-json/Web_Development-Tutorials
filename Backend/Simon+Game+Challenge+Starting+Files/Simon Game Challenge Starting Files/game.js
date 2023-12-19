
var buttonColours=["red","blue","green","yellow"];
var gamePattern=[];

function nextsequence(){
    var randnum=Math.floor(Math.random()*4);
    var randomcolor=buttonColours[randnum];
    gamePattern.push(randomcolor);
    
    $("#"+randomcolor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    document.getElementById("#"+randomcolor).play();
}

nextsequence();