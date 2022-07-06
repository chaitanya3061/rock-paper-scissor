const noofgame=prompt("How many games you want to play[number]");

//catching the dom
var userscore=0;
var computerscore=0;
const userscore_p=document.getElementById("user-score");
const computerscore_p=document.getElementById("computer-score");
const scoreboard_div=document.getElementsByClassName(".score-board");
const choices_p=document.querySelector("#moves p");
choices_p.innerHTML=noofgame;
const choices_h5=document.querySelector("#choice");
const choice_p=document.querySelector("#choice1");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissor_div=document.getElementById("s");

function getcomputerchoices(){
    const compterchoice=[
        "rock",
        "scissor",
        "paper"
    ]
    const rrandomnumber=Math.floor(Math.random()*3);
    return compterchoice[rrandomnumber];
}
var check=0;
var final;


function gamestarts(userchoice){
    const computerchoice=getcomputerchoices();
    console.log("user choice=>"+userchoice);
    console.log("computer choice=>"+computerchoice);
    switch(userchoice+computerchoice){
        case "rockscissor":
            userscore++;
            check++;
            choices_p.innerHTML=noofgame-check;
            document.getElementById("score").innerHTML=userscore+":"+computerscore;
            console.log("USER WINS");
            break;
        case "paperrock":
            userscore++;
            check++;
            choices_p.innerHTML=noofgame-check;
            document.getElementById("score").innerHTML=userscore+":"+computerscore;
            console.log("USER WINS");
            break;
        case "scissorpaper":
            userscore=userscore+1;
            check++;
            choices_p.innerHTML=noofgame-check;
            document.getElementById("score").innerHTML=userscore+":"+computerscore;
            console.log("USER WINS");
            break;
        case "rockpaper":
            computerscore=computerscore+1;
            check++;
            choices_p.innerHTML=noofgame-check;
            document.getElementById("score").innerHTML=userscore+":"+computerscore;
            console.log("USER LOSES");
            break;
        case "paperscissor":
            computerscore=computerscore+1;
            check++;
            choices_p.innerHTML=noofgame-check;
            document.getElementById("score").innerHTML=userscore+":"+computerscore;
            console.log("USER LOSES");
            break;
        case "scissorrock":
            computerscore=computerscore+1;
            check++;
            choices_p.innerHTML=noofgame-check;
            document.getElementById("score").innerHTML=userscore+":"+computerscore;
            console.log("USER LOSES");
            break;
        case "rockrock":
            userscore=userscore+1;
            check++;
            choices_p.innerHTML=noofgame-check;
            computerscore=computerscore+1;
              document.getElementById("score").innerHTML=userscore+":"+computerscore;
            console.log("Its a Draw");
            break;
        case "paperpaper":
            userscore=userscore+1;
            check++;
            choices_p.innerHTML=noofgame-check;
            computerscore=computerscore+1;
               document.getElementById("score").innerHTML=userscore+":"+computerscore;
            console.log("Its a Draw");
            break;
        case "scissorscissor":
            userscore=userscore+1;
            check++;
            choices_p.innerHTML=noofgame-check;
            computerscore=computerscore+1;
              document.getElementById("score").innerHTML=userscore+":"+computerscore;
            console.log("Its a Draw");
            break;
    }
}

function checking(){
     
  if(check==noofgame){
    const user=userscore;
   const comp=computerscore;
    let a=result1();
    choice1.innerHTML=a;
    choices_h5.innerHTML="Game Over, Press Any Key to Restart";
    document.getElementById("r").classList.add("dis");
    document.getElementById("p").classList.add("dis");
    document.getElementById("s").classList.add("dis");
    document.addEventListener("click",()=>
    {
           document.getElementById("moves").classList.add("dis");
    })
    document.addEventListener("keypress",()=>{
      location.reload();
    })
    
  }     
}
rock_div.addEventListener("click",()=>{
  gamestarts("rock");
  checking();
  })
paper_div.addEventListener("click",()=>{
gamestarts("paper"); 
checking(); 
})
scissor_div.addEventListener("click",()=>{
  gamestarts("scissor");
  checking();
})
function result1(){
    
    if(userscore>computerscore)
    final="You won The Game 🥳 ";
    else if(userscore==computerscore)
    final="Its a Draw 🤗";
    else
    final="You Loose The Game 😔";
return final;
}
