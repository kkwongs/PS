const solution = (input) => {
  const [n, m] = input[0].split(" ").map(Number);
  const seq = [];
  const visited = [...Array(n)].fill(false);
  let result = "";

  function recur(idx, cnt) {
    if (cnt === m) {
      result += `${seq.join(" ")}\n`;
      return;
    }

    for (let i = idx; i < n; i++) {
      if (visited[i] === true) continue;
      visited[i] = true;
      seq.push(i + 1);
      recur(i, cnt + 1);
      seq.pop();
      visited[i] = false;
    }
  }

  recur(0, 0);
  return result;
};

const filePath = process.platform === "linux" ? 0 : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
console.log(solution(input));
