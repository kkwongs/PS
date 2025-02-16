const solution = (input) => {
  const [n, m] = input[0].split(" ").map(Number);
  const seq = [...Array(m)].fill(0);
  const visited = [...Array(n)].fill(false);
  let result = "";

  function recur(k) {
    if (k === m) {
      const arr = [];
      for (let i = 0; i < m; i++) {
        arr.push(seq[i]);
      }
      return (result += `${arr.join(" ")}\n`);
    }
    for (let i = 1; i <= n; i++) {
      if (!visited[i]) {
        seq[k] = i;
        visited[i] = true;
        recur(k + 1);
        visited[i] = false;
      }
    }
  }

  recur(0);
  return result;
};

const filePath = process.platform === "linux" ? 0 : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
console.log(solution(input));
