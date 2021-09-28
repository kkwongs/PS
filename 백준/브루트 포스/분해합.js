/* first solution
let N = Number(require('fs').readFileSync('/dev/stdin'));
// let N = 216;

for (let i = 1; i <= N; i++) {
  let arr = i
    .toString()
    .split('')
    .map((x) => Number(x));
  let sum = i;

  for (let j = 0; j < arr.length; j++) {
    sum += arr[j];
  }

  if (sum === N) {
    console.log(i);
    return 0;
  }
}

console.log(0);
*/

// second solution
let N = Number(require('fs').readFileSync('/dev/stdin'));
// let N = 216;

for (let i = 1; i <= N; i++) {
  let sum = i;
  let temp = i;

  while (temp) {
    sum += temp % 10;
    temp = parseInt(temp / 10);
  }

  if (sum === N) {
    console.log(i);
    return 0;
  }
}

console.log(0);
