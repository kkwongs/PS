const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');
// const input = ['4', '1 5 6 7'];
const N = Number(input.shift());
const P = input.shift().split(' ').map(Number);
P.unshift(0);
const DP = new Array(N + 1).fill(0);

for (let i = 1; i <= N; i++) {
  DP[i] = P[i];
  for (let j = 1; j <= i; j++) {
    DP[i] = Math.min(DP[i], DP[i - j] + P[j]);
  }
}

console.log(DP[N]);
