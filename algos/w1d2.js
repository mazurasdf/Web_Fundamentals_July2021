//predict the output 1
// var a = 25;
// a = a - 13;
// console.log(a/2);
    
// a = "hello";
// console.log(a + " hello");

//predict the output 2
// for(var i=0; i<10; i++) {
//     console.log(i);
//     i = i + 3; 
// }
    
// console.log("outside of the loop " + i);

//predict the out 3
function getTotal(arrayOfNumbers) {
    
    var sum = arrayOfNumbers[0];
        
    for(var i=0; i<arrayOfNumbers.length; i++) {
        sum += arrayOfNumbers[i];
        console.log("the current sum is: " + sum); 
    }
        
    console.log("the total is: " + sum);
        
}
    
getTotal(1);