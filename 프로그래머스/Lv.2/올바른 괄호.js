// https://school.programmers.co.kr/learn/courses/30/lessons/12909
function solution(s){
  if (s[0] === ')' || s[s.length - 1] === '(') {
      return false;
  }
  const temp = [];
  for (let i = 0; i < s.length; i++) {
      if (s[i] === '(') {
          temp.push(1);
      } else {
          if (!temp.length) {
              return false;
          } else temp.pop();
      }
  }
  return temp.length ? false : true;
}