// 문제풀이: 팩토리얼에서 5의 개수만 알면 됨.
const N = Number(require('fs').readFileSync('/dev/stdin'));
// const N = 10;
let count = 0;

for (let i = 5; i <= N; i *= 5) {
  count += parseInt(N / i);
}

console.log(count);
