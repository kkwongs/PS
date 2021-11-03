const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');
// const input = ['4', '1 3 5 7'];
const N = Number(input.shift());
const numbers = input.shift().split(' ').map(Number);
let count = 0;

function isPrime(n) {
  if (n <= 1) {
    return false;
  }

  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

for (let i = 0; i < N; i++) {
  if (isPrime(numbers[i])) {
    count++;
  }
}

console.log(count);
