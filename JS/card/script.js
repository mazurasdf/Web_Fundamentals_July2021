console.log("hey it's me, the js file!");

// var display = document.getElementById("display");
// var count = 0;

// function countUp(){
//     ++count;
//     display.innerText = "Button has been clicked " + count + " times";
// }

var isHover = false;

function cardHover(element){
    console.log("one hover function!");

    if(isHover){
        element.src = "img/cardback.jpg";
        element.alt = "bidoof back of card";
    }
    else{
        element.src = "img/bidoof.png";
        element.alt = "bidoof front of card";
    }

    isHover = !isHover;
}