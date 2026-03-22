const questions = [
{q:"Naruto rival?",a:["Sasuke","Goku","Eren","Luffy"],c:0},
{q:"Luffy power?",a:["Rubber","Fire","Ice","Wind"],c:0},
{q:"Gojo ability?",a:["Infinity","Fire","Water","Shadow"],c:0},
{q:"AOT main?",a:["Eren","Naruto","Ichigo","Luffy"],c:0},
{q:"Light uses?",a:["Death Note","Sword","Magic","Gun"],c:0},
{q:"Strongest Saiyan?",a:["Goku","Krillin","Yamcha","Bulma"],c:0},
{q:"Demon Slayer MC?",a:["Tanjiro","Naruto","Deku","Luffy"],c:0},
{q:"JJK energy?",a:["Cursed","Magic","Ki","Aura"],c:0},
{q:"Ichigo role?",a:["Soul Reaper","Pirate","Ninja","Hero"],c:0},
{q:"Hero school anime?",a:["MHA","Naruto","Bleach","DN"],c:0},
{q:"Ndumiso are you HIM?",a:["YES 😤","No 😭","Reels","Who?"],c:0}
];

let current=0,score=0,timer=15,interval;

const qEl=document.getElementById("question");
const ans=document.getElementById("answers");
const progress=document.getElementById("progress");
const scoreEl=document.getElementById("score");
const timerEl=document.getElementById("timer");
const fill=document.getElementById("progressFill");
const resultText=document.getElementById("resultText");
const rank=document.getElementById("rank");
const extra=document.getElementById("extra");

function startGame(){
document.getElementById("startScreen").classList.add("hidden");
document.getElementById("gameScreen").classList.remove("hidden");
loadQ();
}

function loadQ(){
clearInterval(interval);
timer=15;
startTimer();

let q=questions[current];
qEl.textContent=q.q;

ans.innerHTML="";

q.a.forEach((text,i)=>{
let b=document.createElement("button");
b.className="btn";
b.textContent=text;
b.onclick=()=>select(i,b);
ans.appendChild(b);
});

progress.textContent=`${current+1}/${questions.length}`;
scoreEl.textContent=`Score: ${score}`;
fill.style.width=`${(current/questions.length)*100}%`;
}

function startTimer(){
interval=setInterval(()=>{
timer--;
timerEl.textContent=timer+"s";

if(timer<=5) timerEl.style.color="red";

if(timer===0){
clearInterval(interval);
next();
}
},1000);
}

function select(i,btn){
clearInterval(interval);

if(i===questions[current].c){
score++;
btn.classList.add("correct");
}else{
btn.classList.add("wrong");
}

setTimeout(next,800);
}

function next(){
current++;
if(current<questions.length){
loadQ();
}else{
end();
}
}

function end(){
document.getElementById("gameScreen").classList.add("hidden");
document.getElementById("resultScreen").classList.remove("hidden");

if(score>=7){
resultText.innerHTML=`🔥 ${score}/${questions.length}`;
rank.innerHTML="🏆 GOD LEVEL";
extra.innerHTML="Ndumiso… you unlocked EVERYTHING 😭❤️";
}else{
resultText.innerHTML=`💀 ${score}/${questions.length}`;
rank.innerHTML="📚 TRAINING ARC";
extra.innerHTML="Go watch anime 😭";
}
}

function restartGame(){
current=0; score=0;
document.getElementById("resultScreen").classList.add("hidden");
document.getElementById("startScreen").classList.remove("hidden");
}

/* PARTICLES */
const canvas=document.getElementById("particles");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let particles=[];
for(let i=0;i<80;i++){
particles.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height,r:Math.random()*2});
}

function animate(){
ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(p=>{
ctx.beginPath();
ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
ctx.fillStyle="#38bdf8";
ctx.fill();

p.y+=0.5;
if(p.y>canvas.height)p.y=0;
});

requestAnimationFrame(animate);
}
animate();