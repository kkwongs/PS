let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((x) => Number(x));
// let input = ['3', '8', '10', '16'];

let isPrime = new Array(9999).fill(true);
isPrime[0] = isPrime[1] = false;
let T = input.shift();
let result = '';

for (let i = 2; i * i <= 9998; i++) {
  if (isPrime[i]) {
    for (let j = i * i; j <= 9998; j += i) {
      isPrime[j] = false;
    }
  }
}

for (let i = 0; i < T; i++) {
  let n = input.shift();

  for (let j = n / 2; j >= 2; j--) {
    if (isPrime[j] && isPrime[n - j]) {
      result += `${j} ${n - j}\n`;
      break;
    }
  }
}

console.log(result);
