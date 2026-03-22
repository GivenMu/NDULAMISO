const questions = [
{
q: "In Naruto Shippuden, what is Naruto’s chakra nature?",
a: ["Lightning", "Wind", "Fire", "Earth"],
c: "Wind"
},
{
q: "Who is the main antagonist in Bleach’s Arrancar arc?",
a: ["Aizen", "Ulquiorra", "Yhwach", "Grimmjow"],
c: "Aizen"
},
{
q: "In Death Note, what is L’s real name?",
a: ["Near", "Light", "L Lawliet", "Mello"],
c: "L Lawliet"
},
{
q: "In Attack on Titan, what type of Titan is Eren?",
a: ["Armored", "Colossal", "Attack Titan", "Beast"],
c: "Attack Titan"
},
{
q: "Who is Gojo Satoru in Jujutsu Kaisen?",
a: ["Villain", "Teacher", "Student", "Curse"],
c: "Teacher"
},
{
q: "In Demon Slayer, what is Tanjiro’s main breathing style?",
a: ["Water", "Flame", "Wind", "Thunder"],
c: "Water"
},
{
q: "In Tokyo Ghoul, what is Kaneki’s rank?",
a: ["SSS", "A", "Half-ghoul", "Human"],
c: "Half-ghoul"
},
{
q: "In Code Geass, what power does Lelouch have?",
a: ["Sharingan", "Geass", "Bankai", "Domain"],
c: "Geass"
},
{
q: "In Black Clover, what is Asta’s ability?",
a: ["Magic", "Anti-magic", "Fire", "Lightning"],
c: "Anti-magic"
},
{
q: "In Sword Art Online, what is Kirito known as?",
a: ["Black Swordsman", "Shadow King", "Dragon", "Hero"],
c: "Black Swordsman"
},
{
q: "In Steins;Gate, what is Okabe’s nickname?",
a: ["Mad Scientist", "Time Lord", "Zero", "Doctor"],
c: "Mad Scientist"
},
{
q: "In Fullmetal Alchemist, what is Edward searching for?",
a: ["Gold", "Philosopher’s Stone", "Weapon", "Power"],
c: "Philosopher’s Stone"
},
{
q: "In Hunter x Hunter, what is Gon’s Nen type?",
a: ["Emitter", "Enhancer", "Manipulator", "Specialist"],
c: "Enhancer"
},
{
q: "In Chainsaw Man, what does Denji turn into?",
a: ["Devil", "Chainsaw Man", "Ghost", "Hunter"],
c: "Chainsaw Man"
},
{
q: "In Solo Leveling, what is Sung Jin-Woo?",
a: ["Mage", "Shadow Monarch", "Knight", "Hunter"],
c: "Shadow Monarch"
},
{
q: "In Classroom of the Elite, what is Ayanokoji known for?",
a: ["Strength", "Intelligence", "Magic", "Speed"],
c: "Intelligence"
},
{
q: "In Re:Zero, what ability does Subaru have?",
a: ["Teleport", "Return by Death", "Fire", "Time Stop"],
c: "Return by Death"
},
{
q: "In Spy x Family, what is Anya’s ability?",
a: ["Mind reading", "Strength", "Speed", "Invisibility"],
c: "Mind reading"
},
{
q: "In Tokyo Revengers, what does Takemichi do?",
a: ["Fight demons", "Time travel", "Magic", "Fly"],
c: "Time travel"
},
{
q: "FINAL: Ndumiso… are you actually HIM? 😭🔥",
a: ["YES 😤", "No 😭", "I guessed", "What is anime"],
c: "YES 😤"
}
];

let current = 0;
let score = 0;
let timer = 15;
let interval;

const qEl = document.getElementById("question");
const ans = document.getElementById("answers");
const progress = document.getElementById("progress");
const scoreEl = document.getElementById("score");
const timerEl = document.getElementById("timer");
const fill = document.getElementById("progressFill");
const resultText = document.getElementById("resultText");
const rank = document.getElementById("rank");
const extra = document.getElementById("extra");

function startGame(){
document.getElementById("startScreen").classList.add("hidden");
document.getElementById("gameScreen").classList.remove("hidden");
loadQ();
}

function loadQ(){
clearInterval(interval);
timer = 15;
startTimer();

let q = questions[current];
qEl.textContent = q.q;

// 🔥 RANDOMIZE ANSWERS
let shuffled = [...q.a].sort(() => Math.random() - 0.5);

ans.innerHTML = "";

shuffled.forEach(option=>{
let b = document.createElement("button");
b.className = "btn";
b.textContent = option;

b.onclick = () => select(option, q.c, b);

ans.appendChild(b);
});

progress.textContent = `${current+1}/20`;
scoreEl.textContent = `Score: ${score}`;
fill.style.width = `${(current/20)*100}%`;
}

function startTimer(){
interval = setInterval(()=>{
timer--;
timerEl.textContent = timer+"s";

if(timer <= 5) timerEl.style.color = "red";

if(timer === 0){
clearInterval(interval);
next();
}
},1000);
}

function select(selected, correct, btn){
clearInterval(interval);

if(selected === correct){
score++;
btn.classList.add("correct");
}else{
btn.classList.add("wrong");
}

setTimeout(next, 800);
}

function next(){
current++;
if(current < questions.length){
loadQ();
}else{
end();
}
}

function end(){
document.getElementById("gameScreen").classList.add("hidden");
document.getElementById("resultScreen").classList.remove("hidden");

if(score >= 14){
resultText.innerHTML = `🔥 ${score}/20`;
rank.innerHTML = "🏆 ANIME MASTER";
extra.innerHTML = "Ndumiso… okay nah you're HIM 😭🔥❤️";
}else if(score >= 10){
resultText.innerHTML = `😅 ${score}/20`;
rank.innerHTML = "🎌 OTAKU";
extra.innerHTML = "You know anime… but not elite 😭";
}else{
resultText.innerHTML = `💀 ${score}/20`;
rank.innerHTML = "📚 BEGINNER";
extra.innerHTML = "Please go study anime immediately 😭";
}
}

function restartGame(){
current = 0;
score = 0;

document.getElementById("resultScreen").classList.add("hidden");
document.getElementById("startScreen").classList.remove("hidden");
}