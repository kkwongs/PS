const S = require('fs').readFileSync('/dev/stdin').toString().trim().split('');
// const S = ['b', 'a', 'e', 'k', 'j', 'o', 'o', 'n'];
const result = new Array(26).fill(0);

for (let i = 0; i < S.length; i++) {
  result[S[i].charCodeAt(0) - 97]++;
}

console.log(result.join(' '));
