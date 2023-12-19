//1st Dice
var ran1=Math.floor(Math.random()*6) +1;
var randomimg1="images/dice"+ran1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomimg1);
//2nd Dice
var ran2=Math.floor(Math.random()*6) +1;
var randomimg2="images/dice"+ran2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomimg2);

if(ran1>ran2){document.querySelector("h1").innerHTML="Player 1 won";}
else if(ran1<ran2){document.querySelector("h1").innerHTML="Player 2 won";}
else{document.querySelector("h1").innerHTML="Badluck its a draw ";}