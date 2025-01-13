const solution = (input) => {
  const [n, m] = input[0].split(" ").map(Number);
  const graph = [];
  for (let i = 1; i <= n; i++) {
    graph.push(input[i].split(" ").map(Number));
  }

  const prefix = Array.from(Array(n + 1), () => Array(n + 1).fill(0));

  for (let x = 0; x < n; x++) {
    for (let y = 0; y < n; y++) {
      prefix[x + 1][y + 1] =
        prefix[x][y + 1] + prefix[x + 1][y] - prefix[x][y] + graph[x][y];
    }
  }

  const answer = [];
  for (let i = n + 1; i <= n + m; i++) {
    const [x1, y1, x2, y2] = input[i].split(" ").map(Number);

    answer.push(
      prefix[x2][y2] -
        prefix[x2][y1 - 1] -
        prefix[x1 - 1][y2] +
        prefix[x1 - 1][y1 - 1]
    );
  }

  return answer.join("\n");
};

const filePath = process.platform === "linux" ? 0 : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
console.log(solution(input));
