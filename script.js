const choices=document.querySelectorAll(".select");
const message=document.querySelector("#msg");

let userscore=0;
let compscore=0;

const userpara=document.querySelector("#uscore");

const comppara=document.querySelector("#cscore");

choices.forEach((select) => {
    select.addEventListener("click", () => {
      const userchoice = select.getAttribute("id");
      playGame(userchoice);
    });
  });

const genComp=()=>{
   const obj=["ROCK","PAPER","SCISSOR"];
   const idx=Math.floor(Math.random()*3);
   return obj[idx];
}
 
const drawgame=()=>{
    message.innerHTML="IT WAS A DRAW";
}

const playGame=(userchoice)=>{

    const compchoice=genComp();

    if(compchoice==userchoice)
    {
        drawgame();
    }
    else
    {
        let userwin=true;
        if(userchoice=="ROCK")
        {
            userwin=compchoice=="PAPER"?false:true;
        }
        else if(userchoice=="PAPER")
        {
            userwin=compchoice=="ROCK"?true:false;
        }
        else
        {
            userwin=compchoice=="PAPER"?true:false;
        }
       showwinner(userwin,userchoice,compchoice);
    }

} 

const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin)
    {
        userscore++;
        userpara.innerHTML=userscore;
        message.innerHTML=`You win! Your ${userchoice} beats ${compchoice}`;
        message.style.backgroundColor='green';
    }
    else
    {
        compscore++;
        comppara.innerHTML=compscore;
        message.innerHTML=`You lost! Your ${userchoice} beats ${compchoice}`;
        message.style.backgroundColor='red';
    }
}