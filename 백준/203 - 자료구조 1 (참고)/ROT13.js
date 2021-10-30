const S = require('fs').readFileSync('/dev/stdin').toString().split('');
// const S = 'One is 1'.split('');
const result = [];

for (let i = 0; i < S.length; i++) {
  const decimal = S[i].charCodeAt();

  if (S[i] >= 'A' && S[i] <= 'Z') {
    if (decimal + 13 > 90) {
      result.push(String.fromCharCode(decimal - 13));
    } else {
      result.push(String.fromCharCode(decimal + 13));
    }
  } else if (S[i] >= 'a' && S[i] <= 'z') {
    if (decimal + 13 > 122) {
      result.push(String.fromCharCode(decimal - 13));
    } else {
      result.push(String.fromCharCode(decimal + 13));
    }
  } else {
    result.push(S[i]);
  }
}

console.log(result.join(''));
