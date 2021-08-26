let input = require('fs').readFileSync('dev/stdin').toString().split('\n');

// let input = [
//   '5',
//   'OOXXOXXOOO',
//   'OOXXOOXXOO',
//   'OXOXOXOXOXOXOX',
//   'OOOOOOOOOO',
//   'OOOOXOOOOXOOOOX',
// ];

let num = Number(input[0]);

for (let i = 1; i <= num; i++) {
  let answer = input[i];
  let score = 0;
  let sum = 0;

  for (let j = 0; j < answer.length; j++) {
    if (answer[j] === 'O') {
      score++;
    } else {
      score = 0;
    }

    sum += score;
  }

  console.log(sum);
}
