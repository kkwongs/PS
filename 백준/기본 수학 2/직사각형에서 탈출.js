let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .split(' ')
  .map((x) => Number(x));
// let input = [6, 2, 10, 3];

let x = input.shift();
let y = input.shift();
let w = input.shift();
let h = input.shift();
let distance = [x, y, w - x, h - y];
let min = 1000;

for (let i = 0; i < distance.length; i++) {
  if (distance[i] < min) {
    min = distance[i];
  }
}

console.log(min);
