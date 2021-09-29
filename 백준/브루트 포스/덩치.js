let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');
// let input = ['5', '55 185', '58 183', '88 186', '60 175', '46 155'];
let N = Number(input.shift());
let result = [];

for (let i = 0; i < N; i++) {
  input[i] = input[i].split(' ').map((x) => Number(x));
}

function comparison(x, y) {
  let count = 1;

  for (let i = 0; i < input.length; i++) {
    let p = input[i][0];
    let q = input[i][1];

    if (x < p && y < q) {
      count++;
    }
  }

  return count;
}

for (let i = 0; i < N; i++) {
  result.push(comparison(input[i][0], input[i][1]));
}

console.log(result.join(' '));
