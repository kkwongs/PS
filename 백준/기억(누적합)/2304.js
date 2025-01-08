const solution = (input) => {
  const n = Number(input[0]);
  const map = new Map();
  const x_list = [];
  const y_list = [];

  for (let i = 1; i <= n; i++) {
    const [x, y] = input[i].split(" ").map(Number);
    map.set(x, y);
    x_list.push(x);
    y_list.push(y);
  }

  const min_x = Math.min(...x_list);
  const max_x = Math.max(...x_list);
  const max_y = Math.max(...y_list);

  let maxHeightStart = 0;
  let leftSum = 0;
  let height = 0;

  for (let i = min_x; i <= max_x; i++) {
    if (map.get(i) === max_y) {
      maxHeightStart = i;
      break;
    }
    height = Math.max(height, map.get(i) || 0);
    leftSum += height;
  }

  let maxHeightEnd = 0;
  let rightSum = 0;
  height = 0;

  for (let i = max_x; i >= min_x; i--) {
    if (map.get(i) === max_y) {
      maxHeightEnd = i;
      break;
    }
    height = Math.max(height, map.get(i) || 0);
    rightSum += height;
  }

  return leftSum + rightSum + (maxHeightEnd - maxHeightStart + 1) * max_y;
};

const filePath = process.platform === "linux" ? 0 : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
console.log(solution(input));
