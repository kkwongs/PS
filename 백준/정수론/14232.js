const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());
let count = 0;
const jewelry = [];
let weight = 2;

while (weight * weight <= n) {
  while (n % weight === 0) {
    count++;
    jewelry.push(weight);
    n /= weight;
  }
  weight++;
}

if (n > 1) {
  count++;
  jewelry.push(n);
}

console.log(count);
console.log(jewelry.join(" "));
