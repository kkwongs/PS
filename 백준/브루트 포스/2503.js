const fs = require("fs");
const [N, ...arr] = fs.readFileSync(0).toString().trim().split("\n");

let result = 0;
for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    for (let k = 1; k <= 9; k++) {
      if (i === j || j === k || k === i) continue;

      let count = 0;
      arr.forEach((e) => {
        const [question, strike, ball] = e.trim().split(" ").map(Number);

        let strikeCount = 0;
        let ballCount = 0;

        const [x, y, z] = question.toString().trim().split("").map(Number);

        if (x === i) strikeCount++;
        if (y === j) strikeCount++;
        if (z === k) strikeCount++;
        if (x === j || x === k) ballCount++;
        if (y === i || y === k) ballCount++;
        if (z === i || z === j) ballCount++;

        if (strike === strikeCount && ball === ballCount) count++;
      });

      if (count === +N) result++;
    }
  }
}

console.log(result);
