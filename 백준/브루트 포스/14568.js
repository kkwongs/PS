const fs = require("fs");
const N = Number(fs.readFileSync(0).toString().trim());

let result = 0;

for (let i = 2; i <= N; i += 2) {
  for (let j = 1; j <= N - i; j++) {
    if (N - i - j >= j + 2) result++;
  }
}

console.log(result);
