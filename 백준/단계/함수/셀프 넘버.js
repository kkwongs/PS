function d(n) {
  let sum = n;
  let div = 1000;

  while (div !== 1) {
    sum += parseInt(n / div);
    n -= parseInt(n / div) * div;
    div /= 10;
  }

  return sum + n;
}

let arr = [];

for (let i = 0; i < 10000; i++) {
  arr[i] = 1;
}

for (let i = 1; i <= 10000; i++) {
  arr[d(i) - 1] = 0;
  if (arr[i - 1]) {
    console.log(i);
  }
}
