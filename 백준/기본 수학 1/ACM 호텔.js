let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
// let input = ['2', '6 12 10', '30 50 72'];

for (let i = 1; i <= input[0]; i++) {
  let hotel = input[i].split(' ');
  let H = hotel[0];
  let N = hotel[2];
  let X, Y;

  // 꼭대기 층
  if (N % H === 0) {
    Y = H;
    X = parseInt(N / H);
  } else {
    Y = N % H;
    X = parseInt(N / H) + 1;
  }

  // 호수가 두 자리 이상
  if (X < 10) {
    console.log(`${Y}0${X}`);
  } else {
    console.log(`${Y}${X}`);
  }
}
