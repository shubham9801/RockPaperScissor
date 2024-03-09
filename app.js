let userScore = 0;
let CompScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];


}
const drawGame = () => {
    msg.innerText = "Game Was Draw.PLAY AGAIN"
    msg.style.backgroundColor = "black";
};


const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;

        msg.innerText = `you win! Your  ${userChoice}  beats  ${compChoice}`
        msg.style.backgroundColor = "green";

    } else {
        CompScore++;
        compScorePara.innerText = CompScore;

        msg.innerText = `you lose  ${compChoice}  beats Your  ${userChoice}`
        msg.style.backgroundColor = "red";
    }
};
const playGame = (userChoice) => {

    //generate computer choice -> modeuler model(Generate more function divide into small part and execute at a time)
    const compChoice = genCompChoice();
    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute('id')
        // console.log("choices was clicked" , choiceId)
        playGame(userChoice);
    });
});