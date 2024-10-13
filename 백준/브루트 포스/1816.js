const fs = require("fs");
const [_, ...S] = fs.readFileSync(0).toString().trim().split("\n").map(BigInt);

S.forEach((s) => {
  for (let i = 2n; i <= 1000000n; i++) {
    if (s % i === 0n) {
      console.log("NO");
      break;
    }
    if (i === 1000000n) console.log("YES");
  }
});
