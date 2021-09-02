let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
// let input = ['4', 'aba', 'abab', 'abcabc', 'a'];

let result = input[0];

for (let i = 1; i <= input[0]; i++) {
  let obj = {};
  for (let j = 0; j < input[i].length; j++) {
    if (obj[input[i][j]]) {
      result--;
      break;
    }
    if (!obj[input[i][j]] && input[i][j] !== input[i][j + 1]) {
      obj[input[i][j]] = true;
    }
  }
}

console.log(result);
