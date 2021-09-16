let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');
// let input = ['30 20', '10 10', '10 20'];

let isX = {};
let isY = {};
let result = [];

for (let i = 0; i < input.length; i++) {
  let [x, y] = input[i].split(' ');

  if (isX[x]) {
    isX[x] = false;
  } else {
    isX[x] = true;
  }

  if (isY[y]) {
    isY[y] = false;
  } else {
    isY[y] = true;
  }
}

for (key in isX) {
  if (isX[key]) {
    result.push(key);
  }
}

for (key in isY) {
  if (isY[key]) {
    result.push(key);
  }
}

console.log(result.join(' '));
