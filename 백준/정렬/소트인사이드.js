let N = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('')
  .map(Number);
// let N = [2, 1, 4, 3];

console.log(N.sort((x, y) => y - x).join(''));
