const choices = document.querySelectorAll(".select");
const message = document.querySelector("#msg");

let userscore = 0;
let compscore = 0;

const userpara = document.querySelector("#uscore");
const comppara = document.querySelector("#cscore");

const genComp = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawgame = () => {
  message.innerText = "Game was a Draw. Play again.";
  message.style.backgroundColor = "#081b31";
};

const showwinner = (userwin, userchoice, compchoice) => {
  if (userwin) {
    userscore++;
    userpara.innerText = userscore;
    message.innerText = `You win! Your ${userchoice} beats ${compchoice}`;
    message.style.backgroundColor = "green";
  } else {
    compscore++;
    comppara.innerText = compscore;
    message.innerText = `You lost! ${compchoice} beats your ${userchoice}`;
    message.style.backgroundColor = "red";
  }
};

const playGame = (userchoice) => {
  const compchoice = genComp();

  if (userchoice === compchoice) {
    drawgame();
  } else {
    const userwin = (userchoice === "rock" && compchoice === "scissors") ||
                    (userchoice === "paper" && compchoice === "rock") ||
                    (userchoice === "scissors" && compchoice === "paper");

    showwinner(userwin, userchoice, compchoice);
  }
};

choices.forEach((select) => {
  select.addEventListener("click", () => {
    const userchoice = select.getAttribute("id");
    playGame(userchoice);
  });
});
