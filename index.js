let randomNumber1 = Math.floor(Math.random() * 6) +1;  //random number from 1-6
let randomDiceImage = "dice" + randomNumber1 + ".png";  //assigns number to image 
let randomImageSource = "images/" + randomDiceImage; // images/dice1png - images/dice6.png

let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

let randomNumber2 = Math.floor(Math.random()*6) +1;
let randomImage2Source = "images/dice" + randomNumber2 + ".png";
 
document.querySelectorAll("img")[1].setAttribute("src", randomImage2Source);

if (randomNumber1 > randomNumber2) {
document.querySelector("h1").innerHTML= "🏆 Player one wins!";
} 
else if (randomNumber2>randomNumber1){
 document.querySelector("h1").innerHTML = "🏆 Player two wins!";
} 
else {
    document.querySelector("h1").innerHTML = "It's a tie!";
}