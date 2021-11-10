/* 시간 초과
let input = require('fs').readFileSync('/dev/stdin').toString().trim();
// let input = '11001100';
let result = [];

while (input.length >= 3) {
  result.unshift(parseInt(input.slice(input.length - 3), 2).toString(8));
  input = input.slice(0, input.length - 3);
}

if (input) {
  result.unshift(parseInt(input, 2).toString(8));
}

console.log(result.join(''));
*/

let input = require('fs').readFileSync('/dev/stdin').toString().trim();
// let input = '11001100';
let result = '';

while (input.length >= 3) {
  result = parseInt(input.slice(input.length - 3), 2).toString(8) + result;
  input = input.slice(0, input.length - 3);
}

if (input) {
  result = parseInt(input, 2).toString(8) + result;
}

console.log(result);
