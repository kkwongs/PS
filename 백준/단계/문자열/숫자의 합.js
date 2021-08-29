let input = require('fs').readFileSync('dev/stdin').toString().split('\n');
// let input = ['11', '10987654321'];

let num = input[1].split('').map((x) => Number(x));
let sum = 0;

for (let i = 0; i < input[0]; i++) {
  sum += num[i];
}

console.log(sum);
