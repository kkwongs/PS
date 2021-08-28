/* first solution
function d(n) {
  let num = Number(n);
  let count = 0;

  if (num < 100) {
    for (let i = 1; i <= num; i++) {
      count++;
    }
  } else {
    count = 99;
    for (let i = 100; i <= num; i++) {
      let arr = i.toString().split('');
      if (arr[0] - arr[1] === arr[1] - arr[2]) {
        count++;
      }
    }
  }

  return count;
}

let input = require('fs').readFileSync('dev/stdin').toString();
// let input = '1000';

console.log(d(input));
*/

// second solution
function d(n) {
  let num = String(n);
  if (n < 100) {
    return true;
  } else {
    return num[0] - num[1] === num[1] - num[2];
  }
}

let input = require('fs').readFileSync('dev/stdin').toString();
// let input = '1000';
let count = 0;

for (let i = 1; i <= input; i++) {
  if (d(i)) {
    count++;
  }
}

console.log(count);
