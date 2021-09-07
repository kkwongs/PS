let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
// let input = ['2', '1', '3', '2', '3'];

let T = input.shift();

while (T !== 0) {
  T--;
  let k = input.shift();
  let n = input.shift();
  let apartment = [];

  for (let i = 0; i <= k; i++) {
    apartment.push([1]);
    for (let j = 1; j < n; j++) {
      if (i === 0) {
        apartment[i].push(j + 1);
      } else {
        apartment[i].push(apartment[i - 1][j] + apartment[i][j - 1]);
      }
    }
  }

  console.log(apartment[k][n - 1]);
}
