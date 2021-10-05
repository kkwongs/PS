let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((x) => Number(x));
// let input = [5, -1, -2, -3, -1, -2];
let N = input.shift();
let sum = 0;
let obj = {};
let max = 0;
let mode = [];
let result = [];

input.sort((x, y) => {
  return x - y;
});

for (let i = 0; i < N; i++) {
  sum += input[i];
}
result.push(Math.round(sum / N));
result.push(input[Math.floor(N / 2)]);

for (let i = 0; i < N; i++) {
  if (!obj[input[i]]) {
    obj[input[i]] = 1;
  } else {
    obj[input[i]]++;
  }
}

for (let i = 0; i < N; i++) {
  if (obj[input[i]] >= max) {
    max = obj[input[i]];
  }
}

for (let i = 0; i < N; i++) {
  if (max === obj[input[i]] && !mode.includes(input[i])) {
    mode.push(input[i]);
  }
}

result.push(mode.length >= 2 ? mode[1] : mode[0]);
result.push(input[N - 1] - input[0]);

console.log(result.join('\n'));
