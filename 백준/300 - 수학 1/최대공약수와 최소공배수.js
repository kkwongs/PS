const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .split(' ')
  .map(Number)
  .sort()
  .reverse();
// const input = [24, 18].sort().reverse();
let A = input[0],
  B = input[1];

function GCD(a, b) {
  return b === 0 ? a : GCD(b, a % b);
}

function LCM(a, b) {
  return (a * b) / GCD(a, b);
}

console.log(`${GCD(A, B)}
${LCM(A, B)}`);
