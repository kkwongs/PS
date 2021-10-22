/* 시간 초과
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');
// const input = ['4', '9 5 4 8'];
const N = Number(input.shift());
const A = input.shift().split(' ').map(Number);
let result = [];

function NGE(n) {
  for (let i = n; i < N; i++) {
    if (A[n - 1] < A[i]) {
      return A[i];
    }
  }
  return -1;
}

for (let i = 1; i <= N; i++) {
  result.push(NGE(i));
}

console.log(result.join(' '));
*/

const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');
// const input = ['4', '9 5 4 8'];
const N = Number(input.shift());
const A = input.shift().split(' ').map(Number);
const result = new Array(N).fill(-1);
let stack = [];

for (let i = 0; i < N; i++) {
  while (stack.length && A[i] > A[stack[stack.length - 1]]) {
    result[stack.pop()] = A[i];
  }
  stack.push(i);
}

console.log(result.join(' '));
