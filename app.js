let humanScore = 0;
let computerScore = 0;
let Round = 1;


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
    const div_Round = document.querySelector("#round");
    const score_card = document.querySelector("#score");
    const final_result = document.querySelector("#result");

    div_Round.textContent = `ROUND: ${Round}`;
    if(human === computer){
        score_card.textContent = `You Got A Tie`;
    }
    else if(human === "ROCK" && computer === "SCISSORS" || human === "PAPER" && computer === "ROCK" || human === "SCISSORS" && computer === "PAPER"){
        humanScore++;
        score_card.textContent = `Score's are ${humanScore} for You and ${computerScore} for Computer`;
    }
    else{
        computerScore++;
        score_card.textContent = `Score's are ${humanScore} for You and ${computerScore} for Computer`;
    }
    Round++;
    
    if(humanScore == 5){
        score_card.textContent = "Congratulations You Are The Winner!";
        final_result.textContent = `Win by ${humanScore - computerScore}`;

        Round = 1;
        humanScore = 0;
        computerScore = 0;
    }
    else if(computerScore == 5){
        score_card.textContent = "Sorry You Loss The Game!";
        final_result.textContent = `Loss by ${computerScore - humanScore}`;
        
        Round = 1;
        humanScore = 0;
        computerScore = 0;
    }

}

const bt1 = document.querySelector("#btn1");
bt1.addEventListener("click", () => {
    playRound("STONE",getComputerResponse());
});
const bt2 = document.querySelector("#btn2");
bt2.addEventListener("click", () => {
    playRound("PAPER",getComputerResponse());
});
const bt3 = document.querySelector("#btn3");
bt3.addEventListener("click", () => {
    playRound("SCISSORS",getComputerResponse());
});



