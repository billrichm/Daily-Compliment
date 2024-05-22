const complimentBtn = document.getElementById("compBtn");
const theCompliment = document.getElementById("unsure");
const compliments = [
    "You light up my life in the most beautiful way.",
    "Your smile is my favorite thing in the world.",
    "Every moment with you feels like a dream come true.",
    "You make my heart skip a beat.",
    "I am so grateful to have you by my side.",
    "Your kindness and compassion inspire me every day.",
    "You have the most incredible sense of humor.",
    "I love how you always know how to make me laugh.",
    "You are my rock and my safe haven.",
    "Your beauty, inside and out, takes my breath away.",
    "You make me a better person just by being in my life.",
    "I am so lucky to be loved by someone as amazing as you.",
    "Your intelligence and wit are incredibly attractive.",
    "Being with you is my favorite part of the day.",
    "I admire your strength and resilience.",
    "You are my greatest adventure.",
    "I love how you always see the best in people.",
    "You have a heart of gold.",
    "Your love fills my life with so much joy and happiness.",
    "I fall more in love with you every single day."
]


complimentBtn.addEventListener("click",changeCompliment);

function changeCompliment(event){
    randomNumber = Math.floor(Math.random() * compliments.length);
    theCompliment.innerText = compliments[randomNumber];
    complimentBtn.innerText = "Need another?";
}