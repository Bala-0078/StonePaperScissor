const rockPaperScissor = ["rock", "paper", "scissor"];
let humanScore = 0;
let computerScore = 0;
let roundCount = 0;
const maxRounds = 5;

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');
const resultContainer = document.querySelector('#result-container');
const resultDisplay = document.createElement('h1');
resultContainer.appendChild(resultDisplay);



function getComputerChoice() {
    const chooseRandom = Math.floor(Math.random() * rockPaperScissor.length);
    return rockPaperScissor[chooseRandom];
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "rock" && computerChoice === "scissor") ||
        (humanChoice === "scissor" && computerChoice === "paper")
    ) {
        humanScore += 1;
        console.log("Human wins this round!");
    } else {
        computerScore += 1;
        console.log("Computer wins this round!");
    }

    console.log(`HumanScore: ${humanScore} and ComputerScore: ${computerScore}`);
}

function endGame() {
    let resultMessage;
    if (humanScore > computerScore) {
        resultMessage = "Human wins the game!";
    } else if (computerScore > humanScore) {
        resultMessage = "Computer wins the game!";
    } else {
        resultMessage = "The game is a tie!";
    }
    
    resultDisplay.textContent = resultMessage; // Display the final result
  
    rock.disabled = true;
    paper.disabled = true;
    scissor.disabled = true;
}

function handleClick(choice) {
    if (roundCount < maxRounds) {
        roundCount++;
        const computerChoice = getComputerChoice();
        playRound(choice, computerChoice);

        if (roundCount === maxRounds) {
            endGame();
        }
    }
}

rock.addEventListener('click', () => handleClick('rock'));
paper.addEventListener('click', () => handleClick('paper'));
scissor.addEventListener('click', () => handleClick('scissor'));

