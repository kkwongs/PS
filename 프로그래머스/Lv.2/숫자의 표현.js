// https://school.programmers.co.kr/learn/courses/30/lessons/12924

// 시간 초과1 -> 갑자기 통과됨
function solution(n) {
  let answer = 1;
  let num = 1;

  while (num <= n / 2) {
    let start = num;
    let sum = 0;

    for (let i = start; i <= n; i++) {
      sum += i;
      if (sum === n) {
        answer++;
        break;
      }
      if (sum > n) break;
    }
    num++;
  }

  return answer;
}

// 시간 초과2 -> 갑자기 통과됨
function solution(n) {
  let answer = 1;

  for (let i = 1; i <= n / 2; i++) {
    let sum = 0;
    let num = i;

    while (sum < n) {
      sum += num;
      num++;
    }

    if (sum === n) answer++;
  }

  return answer;
}
