let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');
// let input = ['1', '10', '13', '100', '1000', '10000', '100000', '0'];

let result = [];

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

for (let i = 0; i < input.length - 1; i++) {
  let n = Number(input[i]);
  let count = 0;
  for (let j = n + 1; j <= 2 * n; j++) {
    if (isPrime(j)) {
      count++;
    }
  }

  result.push(count);
}

console.log(result.join('\n'));
