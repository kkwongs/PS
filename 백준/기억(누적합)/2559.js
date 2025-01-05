const solution = (input) => {
  const [a, b] = input[0].split(" ").map(Number);
  const arr = input[1].split(" ").map(Number);

  const prefix = [0];

  for (let i = 0; i < a; i++) {
    prefix[i + 1] = prefix[i] + arr[i];
  }

  let max = -200;
  for (let i = b; i <= a; i++) {
    max = Math.max(max, prefix[i] - prefix[i - b]);
  }

  return max;
};

const filePath = process.platform === "linux" ? 0 : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
console.log(solution(input));
