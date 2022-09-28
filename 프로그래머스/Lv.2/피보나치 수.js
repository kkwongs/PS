// https://school.programmers.co.kr/learn/courses/30/lessons/12945
/* 재귀 (시간 초과, 스택 오버플로우)
function solution(n) {
  if (n < 1) return 0;
  if (n === 1) return 1;
  return solution(n - 2) + solution(n - 1);
}
*/

function solution(n) {
  let first = 0;
  let second = 1;
  while(n >= 2) {
      const sum = (first + second) % 1234567;
      first = second;
      second = sum;
      n--;
  }
  return second;
}