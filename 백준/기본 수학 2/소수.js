let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
// let input = ['64', '65'];

let M = Number(input.shift());
let N = Number(input.shift());
let sum = 0;
let min = 0;

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

for (let i = N; i >= M; i--) {
  if (isPrime(i)) {
    sum += i;
    min = i;
  }
}

if (sum === 0) {
  console.log(-1);
} else {
  console.log(sum + '\n' + min);
}
