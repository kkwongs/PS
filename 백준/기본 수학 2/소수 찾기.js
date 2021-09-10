let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
// let input = ['4', '1 3 5 7'];

let N = input.shift();
let numbers = input.shift().split(' ');
let count = 0;

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
    count++;
  }
}

console.log(count);
