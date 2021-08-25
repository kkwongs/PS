let input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((x) => Number(x));

let rest = {};
let count = 0;

for (let i = 0; i < input.length; i++) {
  let restNum = input[i] % 42;
  if (!rest[restNum]) {
    rest[restNum] = 1;
    count++;
  }
}

console.log(count);
