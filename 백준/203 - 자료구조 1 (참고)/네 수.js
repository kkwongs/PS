const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
// const input = ['10', '20', '30', '40'];
const A = input[0];
const B = input[1];
const C = input[2];
const D = input[3];

console.log(parseInt(A + B) + parseInt(C + D));
