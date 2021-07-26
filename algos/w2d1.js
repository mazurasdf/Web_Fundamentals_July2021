//floor, ceiling, and random
var floor = Math.floor(1.8);
var ceiling = Math.ceil(Math.PI);
var random = Math.random();

// console.log(floor);
// console.log(ceiling);
// console.log(random);

//dice roller
function rollDie(){
    var roll = Math.floor(Math.random() * 6) + 1;

    return roll;
}

var playerRoll = rollDie();
console.log(`You just rolled a ${playerRoll}`);

//magic 8 ball
function magicEightBall(){
    var lifesAnswers = [
        "It is certain.",
        "It is decidedly so.",
        "Without a doubt.",
        "Yes – definitely.",
        "You may rely on it.",
        "As I see it, yes.",
        "Most likely.",
        "Outlook good.",
        "Yes.",
        "Signs point to yes.",
        "Reply hazy, try again.",
        "Ask again later.",
        "Better not tell you now.",
        "Cannot predict now.",
        "Concentrate and ask again.",
        "Don't count on it.",
        "My reply is no.",
        "My sources say no.",
        "Outlook not so good.",
        "Very doubtful.",
        "help me, I'm stuck in this magic 8 ball!!!!"
    ];
}

console.log(magicEightBall());