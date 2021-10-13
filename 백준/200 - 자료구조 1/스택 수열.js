/* first solution 2036ms
let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);
// let input = [5, 1, 2, 5, 3, 4];
let n = input.shift();
let stack = [];
let result = [];
let idx = 1;

while (n) {
  if (stack[stack.length - 1] === input[0]) {
    stack.pop();
    input.shift();
    result.push('-');
  } else {
    stack.push(idx);
    result.push('+');
    idx++;
    n--;
  }
}

for (let i = 0; i < stack.length; i++) {
  if (stack[i] === input.pop()) {
    result.push('-');
  } else {
    console.log('NO');
    return 0;
  }
}

console.log(result.join('\n'));
*/

// second solution 276ms
let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);
// let input = [8, 4, 3, 6, 8, 7, 5, 2, 1];
let n = input.shift();
let stack = [];
let result = [];
let number = 1;
let idx = 0;

while (n) {
  stack.push(number);
  result.push('+');
  number++;
  while (true) {
    if (stack[stack.length - 1] === input[idx]) {
      stack.pop();
      result.push('-');
      idx++;
      if (idx === input.length) break;
    } else {
      break;
    }
  }
  n--;
}

console.log(!stack.length ? result.join('\n') : 'NO');
