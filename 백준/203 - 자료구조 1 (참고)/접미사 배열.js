const S = require('fs').readFileSync('/dev/stdin').toString().trim().split('');
const N = S.length;
const result = [];

for (let i = 0; i < N; i++) {
  result.push(S.join(''));
  S.shift();
}

console.log(result.sort().join('\n'));
