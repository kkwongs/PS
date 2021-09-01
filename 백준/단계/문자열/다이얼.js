let input = require('fs').readFileSync('/dev/stdin').toString().split('');
// let input = ['W', 'A'];
// let input = ['U', 'N', 'U', 'C', 'I', 'C'];

let result = 0;

let dial = ['ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV', 'WXYZ'];

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < dial.length; j++) {
    if (dial[j].includes(input[i])) {
      result += j + 3;
    }
  }
}

console.log(result);
