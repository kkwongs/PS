let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');
// let input = ['5', '3 4', '1 1', '1 -1', '2 2', '3 3'];
let N = Number(input.shift());
let result = '';

for (let i = 0; i < N; i++) {
  input[i] = input[i].split(' ').map(Number);
}

input
  .sort((x, y) => {
    if (x[0] === y[0]) {
      return x[1] - y[1];
    } else {
      return x[0] - y[0];
    }
  })
  .forEach((e) => {
    result += `${e[0]} ${e[1]}\n`;
  });

console.log(result);
