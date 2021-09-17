let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');
// let input = ['6 8 10', '25 52 60', '5 12 13', '0 0 0'];

for (let i = 0; i < input.length - 1; i++) {
  let sides = input[i].split(' ').map((x) => Number(x));
  sides.sort((a, b) => a - b);

  if (sides[2] * sides[2] === sides[0] * sides[0] + sides[1] * sides[1]) {
    console.log('right');
  } else {
    console.log('wrong');
  }
}
