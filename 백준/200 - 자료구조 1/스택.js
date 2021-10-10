let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
// let input = [
//   '14',
//   'push 1',
//   'push 2',
//   'top',
//   'size',
//   'empty',
//   'pop',
//   'pop',
//   'pop',
//   'size',
//   'empty',
//   'pop',
//   'push 3',
//   'empty',
//   'top',
// ];
let N = Number(input.shift());
let stack = [];
let result = [];

for (let i = 0; i < N; i++) {
  if (input[i] === 'pop') {
    result.push(stack.pop() || -1);
  } else if (input[i] === 'size') {
    result.push(stack.length);
  } else if (input[i] === 'empty') {
    result.push(stack[0] ? 0 : 1);
  } else if (input[i] === 'top') {
    result.push(stack[stack.length - 1] || -1);
  } else {
    stack.push(input[i].split(' ')[1]);
  }
}

console.log(result.join('\n'));
