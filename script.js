

const loader = document.getElementById("loader");
const home = document.getElementById("home");
const gallery = document.getElementById("gallery");
const question1 = document.getElementById("question1");
const question2 = document.getElementById("question2");
const letter = document.getElementById("letter");
const finalPage = document.getElementById("final");

// =============================
// BUTTONS
// =============================

const startBtn = document.getElementById("startBtn");
const nextGallery = document.getElementById("nextGallery");
const startQuiz = document.getElementById("startQuiz");

const loveYes = document.getElementById("loveYes");
const loveNo = document.getElementById("loveNo");

const marryYes = document.getElementById("marryYes");
const marryNo = document.getElementById("marryNo");

const finalBtn = document.getElementById("finalBtn");

const music = document.getElementById("bgMusic");

// =============================
// IMAGE SLIDER
// =============================

const images = [
    "images/photo1.jpg",
    "images/photo2.jpg",
    "images/photo3.jpg",
    "images/photo4.jpg",
    "images/photo5.jpg",
    "images/photo6.jpg",
    "images/photo7.jpg",
    "images/photo8.jpg",
    "images/photo9.jpg",
    "images/photo10.jpg"
];

let currentImage = 0;

const slideImage = document.getElementById("slideImage");

function showImage(){

    slideImage.src = images[currentImage];

}

document.getElementById("nextBtn").onclick = ()=>{

    currentImage++;

    if(currentImage>=images.length){

        currentImage=0;

    }

    showImage();

}

document.getElementById("prevBtn").onclick = ()=>{

    currentImage--;

    if(currentImage<0){

        currentImage=images.length-1;

    }

    showImage();

}

setInterval(()=>{

    currentImage++;

    if(currentImage>=images.length){

        currentImage=0;

    }

    showImage();

},3000);

// =============================
// START WEBSITE
// =============================

startBtn.onclick = ()=>{

    loader.classList.add("hidden");

    home.classList.remove("hidden");

    music.play();

}

// =============================

nextGallery.onclick = ()=>{

    home.classList.add("hidden");

    gallery.classList.remove("hidden");

}

// =============================

startQuiz.onclick = ()=>{

    gallery.classList.add("hidden");

    question1.classList.remove("hidden");

}

// =============================
// QUESTION 1
// =============================

const funnyLoveMessages=[

"🥺 Think Again...",

"❤️ Please...",

"😭 Don't Break My Heart...",

"🥹 I Know You Love Me...",

"😍 Click YES...",

"💕 One More Chance...",

"😘 Please..."

];

let loveIndex=0;

loveNo.onclick=()=>{

    document.getElementById("q1Message").innerHTML=

    funnyLoveMessages[loveIndex];

    loveIndex++;

    if(loveIndex>=funnyLoveMessages.length){

        loveIndex=0;

    }

}

loveYes.onclick=()=>{

    question1.classList.add("hidden");

    question2.classList.remove("hidden");

}

// =============================
// QUESTION 2
// =============================

const marryMessages=[

"🥹 Really?",

"❤️ Think Again",

"💍 Please Say YES",

"😍 We Look Cute Together",

"💕 Forever?",

"❤️ Last Chance"

];

let marryIndex=0;

marryNo.onclick=()=>{

document.getElementById("q2Message").innerHTML=

marryMessages[marryIndex];

marryIndex++;

if(marryIndex>=marryMessages.length){

marryIndex=0;

}

}

marryYes.onclick=()=>{

question2.classList.add("hidden");

letter.classList.remove("hidden");

typeLetter();

}

// =============================
// LOVE LETTER
// =============================

const message=

`Happy Birthday My Love ❤️

You are the most beautiful person in my life.

Every smile of yours makes my day brighter.

Every moment with you becomes a beautiful memory.

Thank you for always being there.

I promise to love you forever.

Happy Birthday Princess ❤️

I Love You So Much ❤️`;

let i=0;

function typeLetter(){

let typing=document.getElementById("typingText");

typing.innerHTML="";

i=0;

let interval=setInterval(()=>{

typing.innerHTML+=message.charAt(i);

i++;

if(i>=message.length){

clearInterval(interval);

}

},40);

}

// =============================

finalBtn.onclick=()=>{

letter.classList.add("hidden");

finalPage.classList.remove("hidden");

createHearts();

}

// =============================
// FLOATING HEARTS
// =============================

function createHearts(){

for(let i=0;i<50;i++){

let heart=document.createElement("span");

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"%";

heart.style.top=Math.random()*100+"%";

heart.style.position="fixed";

heart.style.fontSize=(20+Math.random()*30)+"px";

heart.style.animation="fade 4s linear";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},4000);

}

}

// =============================
// HEART ANIMATION
// =============================

let style=document.createElement("style");

style.innerHTML=`

@keyframes fade{

0%{

opacity:0;

transform:translateY(80px);

}

50%{

opacity:1;

}

100%{

opacity:0;

transform:translateY(-250px);

}

}

`;

document.head.appendChild(style);