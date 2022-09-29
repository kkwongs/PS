// https://school.programmers.co.kr/learn/courses/30/lessons/12953
function solution(arr) {
  return arr.reduce((prev, cur) => lcm(prev, cur));
}

function gcd(a, b) { // 유클리드 호제법(최대공약수)
  // 재귀
  return a % b === 0 ? b : gcd(b, a % b);
  /* 반복문
  let c = null;
    
  while (b) {
      c = a % b;
      a = b;
      b = c;
  }
  
  return a;
  */
}

function lcm(a, b) {
  return a * b / gcd(a, b);
}