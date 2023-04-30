// Guessmult can't go over 4 because that would eliminate randomness
var guessmult = 0; 
var guessweight = randomNumber(1,10);
var guess;
if(guessweight + guessmult >= 5){
  guess = 1;
} else {
  guess = 2;
}
var userguess = prompt("Select 1 or 2")
if(userguess == 1){ 
 if(guess == 1){
    console.log("Guess Correct!");
  } else {
    console.log("Guess Incorrect");
    guessmult = guessmult+0.5;
  }
  console.log("Adjusted Weight: " + guessmult);
}});
if(userguess == 2){
  if(guess == 1){
    console.log("Guess Incorrect!");
    guessmult = guessmult-0.5;
  } else {
    console.log("Guess Correct!");
  }
  console.log("Adjusted Weight: " + guessmult);
}});
