const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);
// const input = [3, 4, 7, 10];
const T = input.shift();
const n = 100000;
const mod = 1000000009;
const DP = Array.from(Array(n + 1), () => Array(4).fill(0));
DP[1][1] = DP[2][2] = DP[3][1] = DP[3][2] = DP[3][3] = 1;
let result = '';

for (let i = 4; i < n + 1; i++) {
  DP[i][1] = (DP[i - 1][2] + DP[i - 1][3]) % mod;
  DP[i][2] = (DP[i - 2][1] + DP[i - 2][3]) % mod;
  DP[i][3] = (DP[i - 3][1] + DP[i - 3][2]) % mod;
}

for (let i = 0; i < T; i++) {
  result += `${(DP[input[i]][1] + DP[input[i]][2] + DP[input[i]][3]) % mod}\n`;
}

console.log(result);
