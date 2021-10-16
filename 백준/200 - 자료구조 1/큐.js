let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
// let input = [
//   '15',
//   'push 1',
//   'push 2',
//   'front',
//   'back',
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
//   'front',
// ];
let N = Number(input.shift());
let queue = [];
let result = [];

for (let i = 0; i < N; i++) {
  if (input[i] === 'pop') {
    result.push(queue.shift() || -1);
  } else if (input[i] === 'size') {
    result.push(queue.length);
  } else if (input[i] === 'empty') {
    result.push(queue[0] ? 0 : 1);
  } else if (input[i] === 'front') {
    result.push(queue[0] || -1);
  } else if (input[i] === 'back') {
    result.push(queue[queue.length - 1] || -1);
  } else {
    queue.push(input[i].split(' ')[1]);
  }
}

console.log(result.join('\n'));
