let humanScore = 0;
let computerScore = 0;
function getHumanChoice(){
    let human = prompt("Take Your Guess : ","");
    human = human.toUpperCase();
    console.log(human);
}
function getComputerResponse(){
    let digit = Math.floor(Math.random()*(Math.floor(4)-Math.ceil(1))*Math.ceil(1));
    if(digit == 0){
        console.log("PAPER");
    }
    else if(digit == 1){
        console.log("STONE");
    }
    else{
        console.log("SCISSORS");
    }
}

getHumanChoice();
getComputerResponse();