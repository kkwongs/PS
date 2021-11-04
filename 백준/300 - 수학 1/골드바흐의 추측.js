const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);
// const input = ['8', '20', '42', '0'];
const max = Math.max(...input);
const isPrime = new Array(max + 1).fill(true);
const result = [];

for (let i = 2; i < max; i++) {
  if (isPrime[i]) {
    for (let j = i * i; j <= max; j += i) {
      isPrime[j] = false;
    }
  }
}

for (let i = 0; i < input.length; i++) {
  const num = input[i];

  for (let j = 3; j < num; j += 2) {
    if (isPrime[j] && isPrime[num - j]) {
      result.push(`${num} = ${j} + ${num - j}`);
      break;
    }
  }
}

console.log(result.join('\n'));
