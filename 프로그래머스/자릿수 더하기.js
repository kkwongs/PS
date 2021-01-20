https://programmers.co.kr/learn/courses/30/lessons/12931?language=javascript
function solution(n) {
  var answer = 0;
  let i = 1;

  while (Math.pow(10, i) <= n) {
    i++;
  }

  while (i >= 1) {
    i--;
    let mok = parseInt(n / Math.pow(10, i))
    answer += mok;
    n -= Math.pow(10, i) * mok;
  }

  return answer;
}