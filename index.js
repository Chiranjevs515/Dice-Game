var randomNumber1=Math.floor(Math.random()*6)+1;
var randomSource1="images/dice" + randomNumber1 + ".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomSource1);

var randomNumber2=Math.floor(Math.random()*6+1);
var randomSource2="images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomSource2);

if(randomNumber1>randomNumber2){
    document.getElementById("heading").innerHTML = "player 1 wins !";
}
else if(randomNumber1<randomNumber2){
    document.getElementById("heading").innerHTML = "player 2 wins !";
}
else{
    document.getElementById("heading").innerHTML = "Tie !";
}
alert("HEllo");