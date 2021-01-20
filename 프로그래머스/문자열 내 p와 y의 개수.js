// https://programmers.co.kr/learn/courses/30/lessons/12916?language=javascript
function solution(s) {
  var answer = true;
  // var arr = [];
  var p_count = 0, y_count = 0;

  // 문자열 배열에 담기
  // arr = s.split("");

  for (var i = 0; i < s.length; i++) {
    if (s[i] == 'p' || s[i] == 'P') {
      p_count++;
    }
    if (s[i] == 'y' || s[i] == 'Y') {
      y_count++;
    }
  }

  if (p_count != y_count) {
    answer = false;
  }

  return answer;
}