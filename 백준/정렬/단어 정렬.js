let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');
// let input = [
//   '13',
//   'but',
//   'i',
//   'wont',
//   'hesitate',
//   'no',
//   'more',
//   'no',
//   'more',
//   'it',
//   'cannot',
//   'wait',
//   'im',
//   'yours',
// ];
input.shift();

input.sort().sort((a, b) => {
  return a.length - b.length;
});

console.log(Array.from(new Set(input)).join('\n')); // 메모리↓ 시간↑
// console.log([...new Set(input)].join('\n')); // 메모리↑ 시간↓
