/*
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('');
// const input = ['p', 'u', 'l', 'l', 'j', 'i', 'm', 'a'];
const result = [];

for (let i = 0; i < input.length; i++) {
  if (
    (input[i] >= 'a' && input[i] <= 'z') ||
    (input[i] >= 'A' && input[i] <= 'Z')
  ) {
    result.push(input[i]);
  }
}

if (JSON.stringify(input) === JSON.stringify(result)) {
  console.log(input.length);
}
*/

const input = require('fs').readFileSync('/dev/stdin').toString().trim();

console.log(input.length);
