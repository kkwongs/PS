const n = Number(require("fs").readFileSync(0).toString().trim());

function sod(n) {
  let sum = 0;

  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      if (i === n / i) {
        sum += i;
      } else {
        sum += i + n / i;
      }
    }
  }

  return sum;
}

function csod(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += sod(i);
  }

  return sum;
}

console.log(csod(n) % 1000000);
