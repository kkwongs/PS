let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((x) => Number(x));
// let input = [5, 5, 4, 3, 2, 1];

let N = input.shift();

input.sort((x, y) => {
  return x - y;
});

console.log(input.join('\n'));
