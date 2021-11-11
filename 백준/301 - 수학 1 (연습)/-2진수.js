let N = Number(require('fs').readFileSync('/dev/stdin'));
// let N = -13;
const result = [];

while (N !== 0) {
  result.push(Math.abs(N % -2));
  N = Math.ceil(N / -2);
}

console.log(result.length ? result.reverse().join('') : 0);
