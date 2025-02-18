const solution = (input) => {
  const recur = (number) => {
    if (number === m) {
      answer.push(arr.join(" "));
      return;
    }

    for (let i = 1; i <= n; i++) {
      if (arr.includes(i)) continue;
      arr.push(i);
      recur(number + 1);
      arr.pop();
    }
  };

  const [n, m] = input[0].split(" ").map(Number);
  const arr = [];
  const answer = [];

  recur(0);

  return answer.join("\n");
};

const filePath = process.platform === "linux" ? 0 : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
console.log(solution(input));
