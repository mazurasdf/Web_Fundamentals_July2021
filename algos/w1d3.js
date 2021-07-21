//booleans!
var isCloudy = true;
var temperature = 65;
var isRaining = false;
var whatToBring = "I should bring: ";

if(isCloudy){
    whatToBring += "cloudglasses, ";
}

if(temperature > 60){
    whatToBring += "shorts, ";
}

if(isRaining){
    whatToBring += "umbrella, ";
}

whatToBring += "and a smile!😀";

// console.log(whatToBring);

//preapre for downcount!
// for(var i = 10; i > 0; --i){
//     if(i !== 2){
//         console.log(i);
//     } else{
//         console.log("ignition!");
//     }
// }

// console.log("liftoff!");

//count positives
var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0, 7, 1, -7];
    
// your code here!
for(var i = 0; i < numbers.length; i++){
    if(numbers[i] > 0){
        countPositives += 1;
    }
}
    
console.log("there are " + countPositives + " positive values");