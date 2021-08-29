let S = require('fs').readFileSync('dev/stdin').toString().split('\n');
// let S = ['2', '3 ABC', '5 /HTP'];

let output = [];

for (let i = 1; i <= S[0]; i++) {
  let temp = [];
  let repeat = S[i].split(' ')[0];
  let word = S[i].split(' ')[1];

  for (let j = 0; j < word.length; j++) {
    for (let k = 0; k < repeat; k++) {
      temp.push(word.split('')[j]);
    }
  }
  output.push(temp.join(''));
}

console.log(output.join('\n'));
