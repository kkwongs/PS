let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((x) => Number(x));
// let input = [5, 5, 2, 3, 4, 1];

let N = input.shift();

for (let i = 1; i < N; i++) {
  let temp = input[i];
  let j;
  for (j = i - 1; j >= 0 && temp < input[j]; j--) {
    input[j + 1] = input[j];
  }
  input[j + 1] = temp;
}

console.log(input.join('\n'));
