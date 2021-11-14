const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .split(' ')
  .map(Number);
// const input = [60466175, 36];
const N = input[0];
const B = input[1];

console.log(N.toString(B).toUpperCase());
