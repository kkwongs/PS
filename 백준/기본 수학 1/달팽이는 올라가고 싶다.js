let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
// let input = [100, 99, 10000000];

let A = input[0];
let B = input[1];
let V = input[2];

console.log(Math.ceil((V - B) / (A - B)));
