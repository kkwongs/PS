/*
let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
// let input = ['3', '16'];

let M = Number(input.shift());
let N = Number(input.shift());

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

for (let i = M; i <= N; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}
*/

// 에라토스테네스의 체
let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .split(' ')
  .map(Number);
// let input = [3, 16];

let result = [];
let [M, N] = input;
let isPrime = Array(N + 1).fill(true);
isPrime[1] = false;

for (let i = 2; i * i <= N; i++) {
  if (isPrime[i]) {
    for (let j = i * i; j <= N; j += i) {
      isPrime[j] = false;
    }
  }
}

for (let i = M; i <= N; i++) {
  if (isPrime[i]) {
    result.push(i);
  }
}

console.log(result.join('\n'));
