const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');
// const input = ['3', '1 45000', '6 10', '13 17'];
const T = Number(input.shift());
const result = [];

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

for (let i = 0; i < T; i++) {
  [A, B] = input[i].split(' ').map(Number);
  result.push(lcm(A, B));
}

console.log(result.join('\n'));
