// using stack, queue
const S = require('fs').readFileSync('/dev/stdin').toString().trim();
// const S = '<ab cd>ef gh<ij kl>';
let stack = [];
let queue = [];
let result = [];
let isReversed = true;

for (let i = 0; i < S.length; i++) {
  if (S[i] === '<') {
    isReversed = false;
    if (stack.length) {
      result.push(stack.reverse().join(''));
      stack = [];
    }
  }

  if (S[i] === ' ' && isReversed) {
    if (stack.length) {
      result.push(stack.reverse().join(''));
      result.push(S[i]);
      stack = [];
    }
    continue;
  }

  if (isReversed) {
    stack.push(S[i]);
  } else {
    queue.push(S[i]);
  }

  if (S[i] === '>') {
    isReversed = true;
    result.push(queue.join(''));
    queue = [];
  }
}

if (stack.length) {
  result.push(stack.reverse().join(''));
}

console.log(result.join(''));

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

/*
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
*/
