let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((x) => Number(x));
// let input = [10, 5, 2, 3, 1, 4, 2, 3, 5, 1, 7];

let N = input.shift();

let countingSort = function (array, k) {
  let count = [];
  let result = [];

  for (let i = 0; i <= k; i++) {
    count[i] = 0;
  }

  for (let j = 0; j < array.length; j++) {
    count[array[j]] += 1;
  }

  for (i = 0; i < k; i++) {
    count[i + 1] += count[i];
  }

  for (j = 0; j < array.length; j++) {
    result[count[array[j]] - 1] = array[j];
    count[array[j]] -= 1;
  }

  return result;
};

console.log(countingSort(input, N).join('\n'));
