let input = require('fs').readFileSync('/dev/stdin');

let center = 1;
let room = 1;

while (center < input) {
  center += room * 6;

  room++;
}

console.log(room);
