let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
// let input = ['2', 'I am happy today', 'We want to win the first prize'];
let T = Number(input.shift());
let result = [];

for (let i = 0; i < T; i++) {
  input[i] = input[i].split(' ');
  for (let j = 0; j < input[i].length; j++) {
    input[i][j] = input[i][j].split('').reverse().join('');
  }
  result.push(input[i].join(' '));
}

console.log(result.join('\n'));
