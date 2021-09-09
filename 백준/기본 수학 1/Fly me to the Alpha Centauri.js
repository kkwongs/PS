let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
// let input = ['3', '0 3', '1 5', '45 50'];

let num = input.shift();

for (let i = 0; i < num; i++) {
  let x = input[i].split(' ')[0];
  let y = input[i].split(' ')[1];

  let distance = y - x;

  if (distance <= 3) {
    console.log(distance);
  } else {
    let d = parseInt(Math.sqrt(distance));

    if (distance === Math.pow(d, 2)) {
      console.log(d * 2 - 1);
    } else if (distance > Math.pow(d, 2) && distance <= Math.pow(d, 2) + d) {
      console.log(d * 2);
    } else {
      console.log(d * 2 + 1);
    }
  }
}
