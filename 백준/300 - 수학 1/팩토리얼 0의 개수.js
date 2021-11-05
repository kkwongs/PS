// const N = Number(require('fs').readFileSync('/dev/stdin'));
const N = 30;
let number = factorial(N);
let count = 0;

function factorial(n) {
  if (n < 1) return 1;

  return n * factorial(n - 1);
}

console.log(number);
while (number.toString()[number.toString().length - 1] === '0') {
  number /= 10;
  count++;
}

console.log(count);
