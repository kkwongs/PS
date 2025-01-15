const solution = (input) => {
  const n = Number(input[0]);
  const xList = [];
  const yList = [];

  for (let i = 1; i <= n; i++) {
    const [x, y] = input[i].split(" ").map(Number);
    xList.push(x);
    yList.push(y);
  }

  const getMax = (list, ishorizontal) => {
    const max = Math.max(...list);
    const min = Math.min(...list);
    const arr = new Array(max - min + 1).fill(0);
    const _list = list.map((i) => i - min);

    for (let i = 0; i < n; i += 2) {
      const start = ishorizontal ? _list[i] : _list[i + 1];
      const end = ishorizontal ? _list[i + 1] : _list[(i + 2) % n];

      if (start < end) {
        arr[start] += 1;
        arr[end] -= 1;
      } else {
        arr[end] += 1;
        arr[start] -= 1;
      }
    }
    arr.pop();

    const prefix = arr.reduce((acc, cur, index) => {
      index === 0 ? acc.push(cur) : acc.push(cur + acc[index - 1]);
      return acc;
    }, []);

    return Math.max(...prefix);
  };

  const h = getMax(yList, true);
  const v = getMax(xList, false);

  return Math.max(h, v);
};

const filePath = process.platform === "linux" ? 0 : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
console.log(solution(input));
