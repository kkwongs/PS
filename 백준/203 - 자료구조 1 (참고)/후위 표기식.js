const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('');
// const input = ['A', '*', '(', 'B', '+', 'C', ')'];
let stack = [];
let result = [];

for (let i = 0; i < input.length; i++) {
  const char = input[i];

  if (char === '(') {
    stack.push(char);
  } else if (char === ')') {
    while (stack.length && stack[stack.length - 1] !== '(') {
      result.push(stack.pop());
    }
    stack.pop();
  } else if (char === '+' || char === '-') {
    while (stack.length && stack[stack.length - 1] !== '(') {
      result.push(stack.pop());
    }
    stack.push(char);
  } else if (char === '*' || char === '/') {
    while (
      (stack.length && stack[stack.length - 1] === '*') ||
      stack[stack.length - 1] === '/'
    ) {
      result.push(stack.pop());
    }
    stack.push(char);
  } else {
    result.push(char);
  }
}

while (stack.length) {
  result.push(stack.pop());
}

console.log(result.join(''));
