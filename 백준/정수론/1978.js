const input = require('fs').readFileSync(0).toString().split('\n');

const N = input.shift();
const numbers = input.shift().split(' ');
let result = 0;

function isPrime(num) {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

for (let i = 0; i < N; i++) {
  if (isPrime(numbers[i])) {
    result++;
  }
}

console.log(result);
