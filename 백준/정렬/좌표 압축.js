let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');
// let input = ['5', '2 4 -10 4 -9'];
let N = Number(input.shift());
let X = input[0].split(' ').map(Number);
let result = [];
let obj = {};

let temp = Array.from(new Set(X)).sort((a, b) => a - b);
temp.forEach((i, index) => (obj[i] = index));

for (let i = 0; i < X.length; i++) {
  result.push(obj[X[i]]);
}

console.log(result.join(' '));
