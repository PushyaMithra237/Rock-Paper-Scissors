function getComputerChoice(){
  let choice = Math.random()*100;
  let computerChoice;

  if (choice <= 33){
    computerChoice = 'rock';
  }else if(choice > 33 && choice <= 66){
    computerChoice = 'paper';
  }else{
    computerChoice = 'scissors';
  }
  return computerChoice;

}

function getHumanChoice(){
  let humanChoice = prompt('PICK ROCK PAPER SCISSORS U DUMB IDIOT').toLowerCase();
  if(humanChoice == 'rock' || humanChoice == 'paper' || humanChoice == 'scissors'){
    return humanChoice;
  }
}

let compScore = 0;
let humanScore = 0;

function playRound(){
  let computerChoice = getComputerChoice()
  let humanChoice = getHumanChoice()
  let res
  if(computerChoice == humanChoice){
    res = 'both picked the same';
  }else if(
    (humanChoice == 'rock' && computerChoice == 'scissors') ||
    (humanChoice == 'paper' && computerChoice == 'rock') ||
    (humanChoice == 'scissors' && computerChoice == 'paper')
  ){
    humanScore++;
    res ='damn you won';
  }else{
    compScore++;
    choice='the computer won u stupid';
  }
  console.log(res);
  console.log(`human score:${humanScore}`)
  console.log(`computer score:${compScore}`)
  
}

function playGame(){
  for(let round = 1; round<=5; round++){
    console.log(`round ${round}`)
    playRound();
  }
  console.log('--- Game Over ---');
  if (humanScore > compScore) {
    console.log('You won the game!');
  } else if (compScore > humanScore) {
    console.log('The computer won the game!');
  } else {
    console.log('It\'s a tie!');
  }
  console.log(`Final Human Score: ${humanScore}`);
  console.log(`Final Computer Score: ${compScore}`);
}
playGame()