const N = Number(require('fs').readFileSync('/dev/stdin'));
// const N = 10;

function factorial(n) {
  if (n < 1) return 1;

  return n * factorial(n - 1);
}

console.log(factorial(N));
