let N = Number(require('fs').readFileSync('/dev/stdin'));
// let N = 3;

let count = 0;
let answer = '';

function hanoi(num, left, center, right) {
  if (num === 0) {
    return 0;
  } else {
    hanoi(num - 1, left, right, center);
    answer += `${left} ${right}\n`;
    hanoi(num - 1, center, left, right);
    count++;
  }
}
hanoi(N, '1', '2', '3');

console.log(`${count}\n${answer}`);
