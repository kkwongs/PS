let N = Number(require('fs').readFileSync('/dev/stdin'));
// let N = 10;

function factorial(num) {
  if (num < 1) {
    return 1;
  }

  return num * factorial(num - 1);
}

console.log(factorial(N));
