// https://school.programmers.co.kr/learn/courses/30/lessons/12911
// 첫 풀이
function solution(n) {
  let answer = n;
  let cnt = 0;

  n.toString(2)
    .split("")
    .forEach((num) => {
      if (num === "1") cnt++;
    });

  while (++answer >= n) {
    let temp = 0;
    answer
      .toString(2)
      .split("")
      .forEach((num) => {
        if (num === "1") temp++;
      });
    if (cnt === temp) break;
  }

  return answer;
}

// 정규식 사용 풀이
function solution(n) {
  const cnt = n.toString(2).match(/1/g).length;
  while (++n) {
    if (cnt === n.toString(2).match(/1/g).length) break;
  }

  return n;
}
