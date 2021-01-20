// https://programmers.co.kr/learn/courses/30/lessons/12912
function solution(a, b) {
  var sum = 0;

  if (a <= b) {
    while (a <= b) {
      sum = sum + a;
      a++;
    }
  } else {
    while (a >= b) {
      sum = sum + b;
      b++;
    }
  }
  return sum;
}

// Math Object를 사용해보았다.
function solution(a, b) {
  var sum = 0;
  var min = Math.min(a, b);
  var max = Math.max(a, b);

  while (min <= max) {
    sum += min;
    min++;
  }

  return sum;
}