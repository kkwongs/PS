let N = Number(require('fs').readFileSync('/dev/stdin'));
// let N = 10;

function fibonacci(num) {
  if (num <= 0) {
    return 0;
  }

  if (num === 1) {
    return 1;
  }

  return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(N));
