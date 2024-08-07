userScore = 0;
aiScore = 0;

let userScorePara = document.querySelector('#user-score');
let aiScorePara = document.querySelector('#ai-score');



const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');


const drawGame = () => {
    msg.innerText = "Game Draw!"
}

const showWinner = (userWin, userChoice, aiChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Won! Your ${userChoice} beats ${aiChoice}.`;
        msg.style.backgroundColor = "#04910B";
    } else {
        aiScore++;
        aiScorePara.innerText = aiScore;
        msg.innerText = `You Lose! ${aiChoice} beats your ${userChoice}.`;
        msg.style.backgroundColor = "#E32929";
    }
}

const genAiChoice = () => {
    const options = ["Stone", "Paper", "Scissor"];
    const randomNo = Math.floor(Math.random() * 3);
    return options[randomNo];
}


const playGame = (userChoice) => {

    const aiChoice = genAiChoice();
    
    
    if (userChoice === aiChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "Stone") {
            userWin = aiChoice === "Paper" ? false : true; 
        } else if (userChoice === "Paper") {
            userWin = aiChoice === "Scissor" ? false : true;
        } else {
            userWin = aiChoice === "Stone" ? false : true;
        }
        showWinner(userWin, userChoice, aiChoice);
    }
}


choices.forEach(choice => {        
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute('id');
        playGame(userChoice);
    })
});