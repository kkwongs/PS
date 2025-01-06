const solution = (input) => {
  const n = Number(input[0]);
  const arr = input[1].split(" ").map(Number);

  const prefix = [0];

  for (let i = 0; i < n; i++) {
    prefix[i + 1] = Math.max(prefix[i] + arr[i], arr[i]);
  }

  prefix.splice(0, 1);

  return prefix.sort((a, b) => b - a)[0];
};

const filePath = process.platform === "linux" ? 0 : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
console.log(solution(input));
