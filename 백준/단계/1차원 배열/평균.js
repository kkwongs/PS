let input = require('fs').readFileSync('dev/stdin').toString().split('\n');

// let input = [[3], '40 80 60'];

let num = input[0];
let score = input[1].split(' ').map((x) => Number(x));
let maxScore = score[0];
let sum = score[0];

for (let i = 1; i < score.length; i++) {
  sum += score[i];
  if (maxScore < score[i]) {
    maxScore = score[i];
  }
}

console.log((sum / num / maxScore) * 100);
