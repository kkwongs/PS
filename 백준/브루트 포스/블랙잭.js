let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');
// let input = ['10 500', '93 181 245 214 315 36 185 138 216 295'];

let N = Number(input[0].split(' ')[0]);
let M = Number(input[0].split(' ')[1]);
let numbers = input[1].split(' ').map((x) => Number(x));
let max = 0;

for (let i = 0; i < N - 2; i++) {
  for (let j = i + 1; j < N - 1; j++) {
    for (let k = j + 1; k < N; k++) {
      let sum = numbers[i] + numbers[j] + numbers[k];

      if (sum >= max && sum <= M) {
        max = sum;
      }
    }
  }
}

console.log(max);
