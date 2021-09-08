let N = require('fs').readFileSync('/dev/stdin');
// let N = 11;

let count = 0;

while (N % 5 !== 0) {
  N -= 3;
  count++;
}

if (N < 0) {
  console.log(-1);
} else {
  count += N / 5;

  console.log(count);
}
