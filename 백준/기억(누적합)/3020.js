const solution = (input) => {
  const [n, h] = input[0].split(" ").map(Number);
  const arr = new Array(h).fill(0);

  for (let i = 1; i <= n; i++) {
    const height = Number(input[i]);

    if (i % 2 !== 0) {
      arr[0] += 1;
      arr[height] -= 1;
    } else {
      arr[h - height] += 1;
    }
  }

  const prefix = arr.reduce((acc, cur, index) => {
    index === 0 ? acc.push(cur) : acc.push(cur + acc[index - 1]);
    return acc;
  }, []);

  const min = Math.min(...prefix);
  const count = prefix.filter((i) => i === min).length;

  return `${min} ${count}`;
};

const filePath = process.platform === "linux" ? 0 : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
console.log(solution(input));
