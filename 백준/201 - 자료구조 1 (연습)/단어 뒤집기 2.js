/*
const S = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .split(/(<.+?>|\s)/g);
const result = [];

for (let i = 0; i < S.length; i++) {
  const word = S[i];

  if (word.includes('<') && word.includes('>')) {
    result.push(word);
  } else {
    if (word === ' ') {
      result.push(word);
    } else {
      result.push(word.split('').reverse().join(''));
    }
  }
}

console.log(result.join(''));
*/

// improve
const S = require('fs').readFileSync('/dev/stdin').toString();
// const S = 'baekjoon online judge';
const re = /(<.+?>|\s)/g;
const tmp = S.split(re);
let result = [];

tmp.map((x) => {
  if (re.test(x)) {
    result += x;
  } else {
    x = x.split('').reverse().join('');
    result += x;
  }
});

console.log(result);
