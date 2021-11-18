const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);
// const input = [3, 4, 7, 10];
const T = input.shift();
const DP = new Array(11).fill(0);
let result = '';

DP[1] = 1;
DP[2] = 2;
DP[3] = 4;

for (let i = 4; i <= 10; i++) {
  DP[i] = DP[i - 1] + DP[i - 2] + DP[i - 3];
}

for (let i = 0; i < T; i++) {
  result += `${DP[input[i]]}\n`;
}

console.log(result);
