const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');
// const input = ['3', '4 10 20 30 40', '3 7 5 12', '3 125 15 25'];
const t = Number(input.shift());
const result = [];

function GCD(a, b) {
  return b === 0 ? a : GCD(b, a % b);
}

for (let i = 0; i < t; i++) {
  const arr = input[i].split(' ').map(Number);
  const n = arr.shift();
  let sum = 0;

  for (let j = 0; j < n - 1; j++) {
    for (let k = j + 1; k < n; k++) {
      sum += GCD(arr[j], arr[k]);
    }
  }

  result.push(sum);
}

console.log(result.join('\n'));
