https://programmers.co.kr/learn/courses/30/lessons/12940?language=javascript
function solution(n, m) {
  var answer = [];
  let max;

  if (n === m) {
    answer = [n, m];
  }

  // 최대공약수
  let num = n > m ? n : m;

  for (let i = 1; i <= num; i++) {
    if (n % i === 0 && m % i === 0) {
      max = i;
    }
  }

  answer = [max, n * m / max];

  return answer;
}