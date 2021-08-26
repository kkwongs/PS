let input = require('fs').readFileSync('dev/stdin').toString().split('\n');

// let input = [
//   '5',
//   '5 50 50 70 80 100',
//   '7 100 95 90 80 70 60 50',
//   '3 70 90 80',
//   '3 70 90 81',
//   '9 100 99 98 97 96 95 94 93 91',
// ];

let num = Number(input[0]);

for (let i = 1; i <= num; i++) {
  let sum = 0;
  let count = 0;
  let score = input[i].split(' ').map((x) => Number(x));

  for (let j = 1; j < score.length; j++) {
    sum += score[j];
  }

  let avg = sum / score[0];

  for (let j = 1; j < score.length; j++) {
    if (avg < score[j]) {
      count++;
    }
  }

  console.log(((count / score[0]) * 100).toFixed(3) + '%');
}
