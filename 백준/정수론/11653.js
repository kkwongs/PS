let N = Number(require('fs').readFileSync(0).toString());
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
