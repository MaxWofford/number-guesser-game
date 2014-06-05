function newGame() {
  target = Math.ceil(Math.random()*10); //Gives us a new target number
  score = 0; //Initializes our scoreboard
  document.getElementById("gameContent").style.display = "inline"; //Makes our form visible
  document.getElementById("numberInput").value = "1"; //Resets our number input
  document.getElementById("messageOutput").value = "Ready?";
  console.log("Cake");
}

function submit() {
  //What do you mean "too many if statements"?!?!?!
  //console.log("Fcn triggered!");
  if (document.getElementById("numberInput").value == target) {
    document.getElementById("messageOutput").value = "You are credit to team! You guessed the number in " + score + " tries!";
    console.log("Win cake!");
  } else {
    score ++;
    document.getElementById("score").value = score;
    console.log("Lul didn't get it");
    if (document.getElementById("numberInput").value < target) {
      document.getElementById("messageOutput").value = "Too low";
      
    } else {
      document.getElementById("messageOutput").value = "Too high";
    }
    
  }
}