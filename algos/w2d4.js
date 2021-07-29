var arr = [
    [2,7,1],
    [9,0,-13],
    [7,7,2]
]

// console.log(arr[1][2]);

function isPresent(arr2d, value){
    //loop through the arrays in arr2d, arr2d.length
    for(var i = 0; i < arr2d.length; ++i){
        //loop through the actual values of the current array
        for(var j = 0; j < arr2d[i].length; ++j){
            console.log(arr2d[i][j]);
            if(arr2d[i][j] === value){
                return true;
            }
        }
            
    }
        
    return false
}

console.log(isPresent(arr,0));

function flatten(arr2d){
    var flat = [];
    //your code here
    return flat;
}

var result = flatten( [ [2, 5, 8], [3, 6, 1], [5, 7, 7] ] );
console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]