const fs = require("fs");
const [n, inputs] = fs.readFileSync(0).toString().trim().split("\n");
const numbers = inputs.split(" ").map((n) => Number(n));

let result = 0;
for (let i = 0; i < n; i++) {
  const number = numbers[i];

  let isPrime = true;

  if (number === 1) isPrime = false;
  else {
    for (let j = 2; j * j <= number; j++) {
      if (number % j === 0) {
        isPrime = false;
        break;
      }
    }
  }

  if (isPrime) result++;
}

console.log(result);
