// https://programmers.co.kr/learn/courses/30/lessons/12922?language=javascript
function solution(n) {
  var answer = [];

  for (var i = 0; i < n; i++) {
    if (i % 2 == 0) {
      answer[i] = '수';
    } else {
      answer[i] = '박';
    }
  }
  answer = answer.join('');

  return answer;
}