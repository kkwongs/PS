let S = require('fs').readFileSync('dev/stdin').toString().split('');
// let S = ['b', 'a', 'e', 'k', 'j', 'o', 'o', 'n'];

let output = [];

for (let i = 97; i <= 122; i++) {
  output.push(S.indexOf(String.fromCharCode(i)));
}

console.log(output.join(' '));
