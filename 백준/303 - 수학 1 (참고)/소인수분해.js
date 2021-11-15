let N = Number(require('fs').readFileSync('/dev/stdin').toString());
// let N = 72;
let prime = 2;
let result = '';

while (N > 1) {
  if (N % prime === 0) {
    result += `${prime}\n`;
    N /= prime;
  } else {
    prime++;
  }
}

console.log(result);
