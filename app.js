let humanScore = 0;
let computerScore = 0;
let Round = 1;
function getHumanChoice(){
    let h = prompt(`Take Your Guess for Round ${Round} : `,"");
    if(h === null)return "null";
    h = h.toUpperCase();
    return h;
}
function getComputerResponse(){
    let digit = Math.floor(Math.random()*3);
    if(digit == 0){
        return "PAPER";
    }
    else if(digit == 1){
        return "STONE";
    }
    else{
        return "SCISSORS";
    }
}

function playRound(human, computer){
    console.log(`Round: ${Round}`);
    Round++;
    if(human === computer){
        humanScore++;
        computerScore++
    }
    else if(human === "ROCK" && computer === "SCISSORS"){
        humanScore++;
    }
    else if(human === "PAPER" && computer === "ROCK"){
        humanScore++;
    }
    else if(human === "SCISSORS" && computer === "PAPER"){
        humanScore++;
    }
    else{
        computerScore++;
    }

}

function playGame(){
    for (let i = 0; i < 5; i++) {
        let human = getHumanChoice();
        let computer = getComputerResponse();

        if (human === null) {
            console.log("Game cancelled.");
            return;
        }
        playRound(human, computer);
    }    
}
playGame();
console.log("Game Finished");
if(humanScore >= computerScore){
    console.log("Congratulations You Are The Winner");
    console.log(`You: ${humanScore} And Opponent: ${computerScore}`);
}
else{
    console.log("Sorry! You Loss");
    console.log(`You: ${humanScore} And Opponent: ${computerScore}`);
}
Round = 1;
humanScore = 0;
computerScore = 0;
