// https://school.programmers.co.kr/learn/courses/30/lessons/42840?language=javascript
function solution(answers) {
  var answer = [];
  const firstStudent = [1, 2, 3, 4, 5];
  const secondStudent = [2, 1, 2, 3, 2, 4, 2, 5];
  const thirdStudent = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let point = [0, 0, 0];
  let max = 0;
  
  for (let i = 0; i < answers.length; i++) {
      if (answers[i] === firstStudent[i % 5]) point[0]++;
      if (answers[i] === secondStudent[i % 8]) point[1]++;
      if (answers[i] === thirdStudent[i % 10]) point[2]++;
  }
  max = Math.max(point[0], point[1], point[2]);
  
  for (let i = 0; i < point.length; i++) {
    if (max === point[i]) answer.push(i + 1);
  }
  
  return answer;
}