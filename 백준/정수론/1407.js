let [a, b] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

function count(num) {
  let sum = num;
  for (let i = 1; i < 99; i++) {
    sum += (2 ** i - 2 ** (i - 1)) * Math.floor(num / 2 ** i);
  }

  return sum;
}

console.log(count(b) - count(a - 1));
