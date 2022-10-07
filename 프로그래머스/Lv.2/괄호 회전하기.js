// https://school.programmers.co.kr/learn/courses/30/lessons/76502
function solution(s) {
  let result = 0;
  s = s.split('');
  if (s.length % 2 === 1) return 0;
  for (let i = 0; i < s.length; i++) {
      if (isRight(s)) result++;
      s.push(s.shift());
  }
  return result;
}

function isRight(arr) {
  if (arr[0] === ')' || arr[0] === '}' || arr[0] === ']' || arr[arr.length - 1] === '(' || arr[arr.length - 1] === '{' || arr[arr.length - 1] === '[') return false;
  const temp = [];
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '(' || arr[i] === '{' || arr[i] === '[') temp.push(arr[i]);
      if (arr[i] === ')' && temp[temp.length - 1] === '(') temp.pop();
      if (arr[i] === '}' && temp[temp.length - 1] === '{') temp.pop();
      if (arr[i] === ']' && temp[temp.length - 1] === '[') temp.pop();
  }
  return temp.length ? false : true;
}