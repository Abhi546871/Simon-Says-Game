let gameseq = [];
let userseq = [];
let start = false;
let btns = ["yellow","red","green","blue"];
let level = 0;
let score = 0;
let highest = 0;
let h2 = document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(start==false){
        console.log("Game Started");
        start = true;
    }
    levelup();
});
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },250);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    },250);
}
function levelup(){
    level++;
    userseq = [];
    h2.innerText = `Level ${level}`;
    let index = Math.floor(Math.random()*3);
    let color = btns[index];
    let randbtn = document.querySelector(`.${color}`);
    gameseq.push(color);
    console.log(gameseq)
    gameFlash(randbtn);
}
function btnPress(){
    // console.log("Button is Clikced");
    let btn = this;
    userFlash(btn);
    let usercolor = btn.getAttribute('id');
    userseq.push(usercolor);
    console.log(userseq);
    checkAns(userseq.length-1);
}
let allbtns = document.querySelectorAll(".btn");
for(let btn1 of allbtns){
    btn1.addEventListener("click",btnPress);

}
function checkAns(idx){
    if(userseq[idx]==gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        if(level>highest){
            highest = level;
        }
        h2.innerHTML = `Highest Score is ${highest}<br>Game Over! Your Score Was <b>${level}</b><br> Press Any key Continue`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        gameReset();
    }
}
function gameReset(){
    userseq = [];
    gameseq = [];
    level = 0;
     start = false;
}