//function intro
// var x = 4;

// function setX(newVal){
//     x = newVal;
// }

// console.log(x);
// setX(16);
// console.log(x);

//return example
// var x = 4;

// function addToX(amount){
//     return x + amount;
//     console.log("hey there!!!!");
// }

// console.log(x);
// var result = addToX(8);
// console.log(result);
// console.log(x);

//isPalindrome
function isPal(arr) {
    for(var left=0; left<arr.length/2; left++) {
        var right = arr.length-1-left;
        if(arr[left] !== arr[right]) {
            return "Not a pal-indrome!";
        }
    }
    return "Pal-indrome!";
}
    
var result1 = isPal( [1, 1, 2, 2, 1] );
console.log(result1);
    
var result2 = isPal( [3, 2, 1, 1, 2, 3] );
console.log(result2);

var result3 = isPal([4.1,6.2,5.72,6.2,4.1]);
console.log(result3);