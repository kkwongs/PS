const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');
// const input = ['1 1', '1000000000'];
const [N, S] = input.shift().split(' ').map(Number);
const A = input.shift().split(' ').map(Number);
const D = [];
let result = 0;

function GCD(a, b) {
  return b === 0 ? a : GCD(b, a % b);
}

for (let i = 0; i < N; i++) {
  D.push(Math.abs(A[i] - S));
}

if (N > 1) {
  result = GCD(D[0], D[1]);

  for (let i = 1; i < N; i++) {
    result = GCD(result, D[i]);
  }
} else {
  result = D[0];
}

console.log(result);
