var responses = [
    "yes",
    "no",
    "maybe",
    "ask a different question",
    "what do you think I'm going to say?",
    "you DARE question me?!?",
    "yes of course ugh 🙄",
    "no, duh",
    "free britney",
    "🥦🐱‍🐉💸"
]
var answer = document.getElementById("answer");
var ball = document.getElementById("ball");
var input = document.getElementById("input");

function findFortune(){
    if(input.value.length > 0){
        ball.src = "img/ball.gif";
        setTimeout(endFortune, 1500);
    }
    else{
        alert("you gotta write something there...");
    }
}

function endFortune(){
    var randResponse = responses[Math.floor(Math.random() * responses.length)];
    answer.innerText = randResponse;
    ball.src = "img/ballStill.jpg";
}