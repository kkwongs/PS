let input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .split('\n')
  .map((x) => Number(x));

let num = 1;

for (let i = 0; i < 3; i++) {
  num *= input[i];
}

num = String(num);

for (let i = 0; i <= 9; i++) {
  let count = 0;

  for (let j = 0; j < num.length; j++) {
    if (Number(num[j]) === i) {
      count++;
    }
  }

  console.log(count);
}
