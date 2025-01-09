const solution = (input) => {
  const [h, w] = input[0].split(" ").map(Number);
  const blocks = input[1].split(" ").map(Number);
  const maxHeight = Math.max(...blocks);
  let leftSum = 0;
  let rightSum = 0;
  let height = 0;
  let maxHeightLeft = 0;
  let maxHeightRight = 0;
  let centerSum = 0;

  for (let i = 0; i < w; i++) {
    if (blocks[i] === maxHeight) {
      maxHeightLeft = i;
      break;
    }
    if (height < blocks[i]) height = blocks[i];
    else leftSum += height - blocks[i];
  }

  height = 0;

  for (let i = w - 1; i >= 0; i--) {
    if (blocks[i] === maxHeight) {
      maxHeightRight = i;
      break;
    }
    if (height < blocks[i]) height = blocks[i];
    else rightSum += height - blocks[i];
  }

  for (let i = maxHeightLeft + 1; i < maxHeightRight; i++) {
    centerSum += maxHeight - blocks[i];
  }

  return leftSum + rightSum + centerSum;
};

const filePath = process.platform === "linux" ? 0 : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
console.log(solution(input));
