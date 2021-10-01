let N = Number(require('fs').readFileSync('/dev/stdin'));
// let N = 2;
let series = 666;

while (N > 1) {
  series++;
  if (series.toString().includes('666')) {
    N--;
  }
}

console.log(series);
