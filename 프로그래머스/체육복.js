// https://programmers.co.kr/learn/courses/30/lessons/42862?language=javascript

function solution(n, lost, reserve) {
  n = n - lost.length;

  for (let i = 0; i < reserve.length; i++) {
    for (let j = 0; j < lost.length; j++) {
      if (reserve[i] === lost[j]) {
        lost[j] = 999;
        reserve[i] = 9999;
        n++;
      }
    }
  }

  for (let i = 0; i < reserve.length; i++) {
    for (let j = 0; j < lost.length; j++) {
      if (reserve[i] - 1 === lost[j] || reserve[i] + 1 === lost[j]) {
        lost[j] = 100;
        reserve[i] = 100;
        n++;
      }
    }
  }

  return n;
}