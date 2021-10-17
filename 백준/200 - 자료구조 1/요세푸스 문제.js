const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .split(' ')
  .map(Number);
// const input = [7, 3];
const N = input.shift();
const K = input.shift();
const arr = new Array(N).fill().map((_, i) => i + 1);
let result = '<';

while (arr.length) {
  for (let i = 0; i < K; i++) {
    arr.push(arr.shift());
  }

  if (arr.length === 1) {
    result += `${arr.pop()}>`;
  } else {
    result += `${arr.pop()}, `;
  }
}

console.log(result);
