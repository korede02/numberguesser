let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget(){
    let target = Math.floor(Math.random()*10);
    return target;
  }
  function compareGuesses(humanGuess, computerGuess, target){
    let humandiff = Math.abs(humanGuess-target);
    let computerdiff = Math.abs(computerGuess-target);
    if(humandiff < computerdiff){
      return true;
    }else if(computerdiff < humandiff){
      return false;
    }else if(humandiff===computerdiff){
      return true;
    }else {
      return false;
    }
  }
  function updateScore(){
    let winner = compareGuesses();
    if(winner === true){
      humanScore = humanScore + 1;
      return humanScore;
    }else if(winner === false){
      computerScore = computerScore + 1;
      return computerScore;
    }
  }
  function advanceRound(){
    currentRoundNumber = currentRoundNumber + 1;
    return currentRoundNumber;
  } 
  
  compareGuesses();
  updateScore();
  advanceRound();