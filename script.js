console.log("Portfolio Loaded Successfully");
const text = "Computer Science Student | Data Analyst | AI Enthusiast";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 50);
    }
}
typeEffect();
