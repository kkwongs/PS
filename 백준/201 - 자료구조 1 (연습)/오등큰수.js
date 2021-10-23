const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');
// const input = ['7', '1 1 2 3 4 2 1'];
const N = Number(input.shift());
const A = input.shift().split(' ');
const result = new Array(N).fill(-1);
let stack = [];
let count = {};

for (let i = 0; i < N; i++) {
  if (count[A[i]]) {
    count[A[i]]++;
  } else {
    count[A[i]] = 1;
  }
}

for (let i = 0; i < N; i++) {
  while (stack.length && count[A[i]] > count[A[stack[stack.length - 1]]]) {
    result[stack.pop()] = A[i];
  }
  stack.push(i);
}

console.log(result.join(' '));
