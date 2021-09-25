let N = Number(require('fs').readFileSync('/dev/stdin'));
// let N = 27;
let result = '';

function star(i, j, num) {
  if (i % 3 === 1 && j % 3 === 1) {
    result += ' ';
  } else {
    if (num === 1) {
      result += '*';
    } else {
      star(Math.floor(i / 3), Math.floor(j / 3), Math.floor(num / 3));
    }
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    star(i, j, N);
  }
  result += '\n';
}

console.log(result);
