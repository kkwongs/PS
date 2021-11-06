const [n, m] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .split(' ')
  .map(Number);
// const [n, m] = [25, 12];
const two = getCount(n)[0] - getCount(m)[0] - getCount(n - m)[0],
  five = getCount(n)[1] - getCount(m)[1] - getCount(n - m)[1];

function getCount(num) {
  let twoCount = 0;
  let fiveCount = 0;

  for (let i = 2; i <= num; i *= 2) {
    twoCount += parseInt(num / i);
  }
  for (let i = 5; i <= num; i *= 5) {
    fiveCount += parseInt(num / i);
  }

  return [twoCount, fiveCount];
}

console.log(two < five ? two : five);
