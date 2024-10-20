const fs = require("fs");
const N = Number(fs.readFileSync(0).toString().trim());

let result = 1;

for (let i = 2; i * i <= N; i++) {
  result++;
}

console.log(result);
