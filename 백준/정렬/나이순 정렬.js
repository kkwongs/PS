/*
let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');
// let input = ['3', '21 Junkyu', '21 Dohyun', '20 Sunyoung'];
input.shift();
let result = '';

input = input.map((x) => x.split(' '));
input
  .sort((a, b) => Number(a[0]) - Number(b[0]))
  .forEach((e) => (result += `${e[0]} ${e[1]}\n`));

console.log(result);
*/

let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');
// let input = ['3', '21 Junkyu', '21 Dohyun', '20 Sunyoung'];
input.shift();

input.sort((a, b) => parseInt(a) - parseInt(b));

console.log(input.join('\n'));
