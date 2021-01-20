// https://programmers.co.kr/learn/courses/30/lessons/12926?language=javascript
function solution(s, n) {
  let answer = s.split('');

  for (let i = 0; i < s.length; i++) {
    if (answer[i] === ' ') {
      answer[i] = ' ';
    } else if (answer[i].charCodeAt() <= 90 && (answer[i].charCodeAt() + n) > 90 || answer[i].charCodeAt() >= 97 && (answer[i].charCodeAt() + n) > 122) {
      answer[i] = String.fromCharCode(answer[i].charCodeAt() + n - 26);
    } else {
      answer[i] = String.fromCharCode(answer[i].charCodeAt() + n);
    }
  }

  answer = answer.join('');

  return answer;
}