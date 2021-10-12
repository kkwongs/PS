let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');
// let input = [
//   '6',
//   '(())())',
//   '(((()())()',
//   '(()())((()))',
//   '((()()(()))(((())))()',
//   '()()()()(()()())()',
//   '(()((())()(',
// ];
let T = Number(input.shift());
let result = [];

function yesOrNo(arr) {
  let stack = [];
  arr = arr.split('');

  while (arr.length) {
    let arrRemoved = arr.shift();
    if (arrRemoved === ')') {
      if (stack.length === 0) {
        return false;
      }
      let stackRemoved = stack.pop();
      if (stackRemoved === ')') {
        return false;
      }
    } else {
      stack.push(arrRemoved);
    }
  }

  if (!stack.length) {
    return true;
  } else {
    return false;
  }
}

for (let i = 0; i < T; i++) {
  if (yesOrNo(input[i])) {
    result.push('YES');
  } else {
    result.push('NO');
  }
}

console.log(result.join('\n'));
