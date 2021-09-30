let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');
// let input = [
//   '8 8',
//   'WBWBWBWB',
//   'BWBWBWBW',
//   'WBWBWBWB',
//   'BWBBBWBW',
//   'WBWBWBWB',
//   'BWBWBWBW',
//   'WBWBWBWB',
//   'BWBWBWBW',
// ];
// let input = [
//   '10 13',
//   'BBBBBBBBWBWBW',
//   'BBBBBBBBBWBWB',
//   'BBBBBBBBWBWBW',
//   'BBBBBBBBBWBWB',
//   'BBBBBBBBWBWBW',
//   'BBBBBBBBBWBWB',
//   'BBBBBBBBWBWBW',
//   'BBBBBBBBBWBWB',
//   'WWWWWWWWWWBWB',
//   'WWWWWWWWWWBWB',
// ];
let matrix = input
  .shift()
  .split(' ')
  .map((x) => Number(x));
let N = matrix.shift();
let M = matrix.shift();
let min = 99999;
let check = ['WBWBWBWB', 'BWBWBWBW'];

function checkStart(x, y) {
  for (let oddEven = 0; oddEven < 2; oddEven++) {
    let count = 0;

    for (let i = x; i < x + 8; i++) {
      for (let j = y; j < y + 8; j++) {
        if (input[i][j] !== check[(i + oddEven) % 2][j - y]) {
          count++;
        }
      }
    }

    if (count < min) {
      min = count;
    }
  }

  return min;
}

for (let i = 0; i < N - 7; i++) {
  for (let j = 0; j < M - 7; j++) {
    checkStart(i, j);
  }
}

console.log(min);
