const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');
// const input = ['5', 'ABC*+DE/-', '1', '2', '3', '4', '5'];
input.shift();
const postfix = input.shift().split('');
const stack = [];

for (let i = 0; i < postfix.length; i++) {
  if (
    postfix[i] === '+' ||
    postfix[i] === '-' ||
    postfix[i] === '*' ||
    postfix[i] === '/'
  ) {
    const b = stack.pop();
    const a = stack.pop();

    if (postfix[i] === '+') {
      stack.push(a + b);
    } else if (postfix[i] === '-') {
      stack.push(a - b);
    } else if (postfix[i] === '*') {
      stack.push(a * b);
    } else if (postfix[i] === '/') {
      stack.push(a / b);
    }
  } else {
    stack.push(postfix[i].charCodeAt(0) - 64);
  }
}

console.log(stack.shift().toFixed(2));
