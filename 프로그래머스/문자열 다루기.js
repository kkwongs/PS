// https://programmers.co.kr/learn/courses/30/lessons/12918
function solution(s) {
  var answer = true;
  if (charSize(s)) {
    answer = false;
  }
  return answer;
}

function charSize(str) {
  var ans = true;
  if ((str.length === 4 || str.length === 6) && !isNaN(str)) {
    ans = false;
  }
  return ans;
}
// 1e22와 같은 지수 값이 숫자로 인식됨
// e와 같은 값이 나오면 false
function solution(s) {
  var answer;
  var findStr = 'e';
  if ((s.length === 4 || s.length === 6) && !isNaN(s)) {
    if (s.indexOf(findStr) != -1) {
      return answer = false;
    } else {
      return answer = true;
    }
  } else {
    return answer = false;
  }
}