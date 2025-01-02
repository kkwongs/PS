const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());
let i = 2;

while (n > 1) {
  if (n % i === 0) {
    console.log(i);
    n /= i;
  } else {
    i++;
  }
}
