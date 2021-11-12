const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);
// const input = [5, 6, 8, 10, 12, 100];
const T = input.shift();
let result = '';

for (let i = 0; i < T; i++) {
  const N = input[i];
  const isPrime = new Array(N + 1).fill(true);
  let count = 0;

  for (let j = 2; j * j <= N; j++) {
    if (isPrime[j]) {
      for (let k = j * j; k <= N; k += j) {
        isPrime[k] = false;
      }
    }
  }

  for (let j = N / 2; j >= 2; j--) {
    if (isPrime[j] && isPrime[N - j]) {
      count++;
    }
  }

  result += `${count}\n`;
}

console.log(result);
