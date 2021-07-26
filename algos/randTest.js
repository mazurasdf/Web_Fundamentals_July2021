const tests = 1000;
const range = 21;
const offset = 20;

const counts = {};

for(let i = 0; i < tests; ++i){
    const randInt = Math.floor(Math.random() * range) + offset;
    counts[randInt] = counts[randInt] ? counts[randInt] + 1 : 1;
}


console.log(counts);