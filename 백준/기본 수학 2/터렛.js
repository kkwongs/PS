let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');
// let input = ['3', '0 0 13 40 0 37', '0 0 3 0 7 4', '1 1 1 1 1 5'];

let T = input.shift();

for (let i = 0; i < T; i++) {
  let x1 = Number(input[i].split(' ')[0]);
  let y1 = Number(input[i].split(' ')[1]);
  let r1 = Number(input[i].split(' ')[2]);
  let x2 = Number(input[i].split(' ')[3]);
  let y2 = Number(input[i].split(' ')[4]);
  let r2 = Number(input[i].split(' ')[5]);
  let d = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));

  if (d < r1 + r2 && d > Math.abs(r1 - r2)) {
    // 두 점
    console.log(2);
  } else if (d === r1 + r2 || (d === Math.abs(r1 - r2) && d !== 0)) {
    // 한 점
    console.log(1);
  } else if (d === 0 && r1 === r2) {
    // 같은 원
    console.log(-1);
  } else {
    // 만나지 않음
    console.log(0);
  }
}
