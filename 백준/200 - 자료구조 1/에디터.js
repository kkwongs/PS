let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');
// let input = ['abcd', '3', 'P x', 'L', 'P y'];
// let input = ['abc', '9', 'L', 'L', 'L', 'L', 'L', 'P x', 'L', 'B', 'P y'];
// let input = [
//   'dmih',
//   '11',
//   'B',
//   'B',
//   'P x',
//   'L',
//   'B',
//   'B',
//   'B',
//   'P y',
//   'D',
//   'D',
//   'P z',
// ];
let lStack = input.shift().split('');
let rStack = [];
let M = Number(input.shift());

for (let i = 0; i < M; i++) {
  let cmd = input[i];

  switch (cmd) {
    case 'L':
      if (lStack.length) {
        rStack.push(lStack.pop());
      }
      break;
    case 'D':
      if (rStack.length) {
        lStack.push(rStack.pop());
      }
      break;
    case 'B':
      lStack.pop();
      break;
    default:
      lStack.push(cmd.split(' ')[1]);
  }
}

console.log(`${lStack.join('')}${rStack.reverse().join('')}`);
