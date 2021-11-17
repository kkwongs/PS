const n = Number(require('fs').readFileSync('/dev/stdin'));
// const n = 2;
const DP = new Array(n + 1).fill(0);
DP[1] = 1;
DP[2] = 3;

for (let i = 3; i <= n; i++) {
  DP[i] = (DP[i - 2] * 2 + DP[i - 1]) % 10007;
}

console.log(DP[n]);
