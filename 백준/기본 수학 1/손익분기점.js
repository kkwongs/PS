let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

let A = input[0] * 1;
let B = input[1] * 1;
let C = input[2] * 1;

let margin = C - B;
let cost = Math.floor(A / margin) + 1;

console.log(margin <= 0 ? -1 : cost);
