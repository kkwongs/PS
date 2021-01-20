// https://programmers.co.kr/learn/courses/30/lessons/12982?language=javascript

// 69.6 점
function solution(d, budget) {
  let cnt = 0;

  d = d.sort();

  for (let i = 0; i < d.length; i++) {
    if (budget - d[i] >= 0) {
      budget = budget - d[i]
      cnt++;
    }
  }

  return cnt;
}

// 52.2 점
function solution(d, budget) {
  let cnt = 0;

  d = d.sort();

  for (let i = 0; i < d.length; i++) {
    if (budget - d[i] > 0) {
      budget = budget - d[i]
      cnt++;
    } else if (budget - d[i] === 0) {
      budget = budget - d[i]
      cnt++;
      break;
    } else {
      break;
    }
  }

  return cnt;
}

// sort() 메소드의 기본 정렬 순서는 문자열의 유니코드 코드 포인트를 따른다.
// const array1 = [1, 30, 4, 21, 100];
// array1.sort();
// console.log(array1); output: Array [1, 100, 21, 30, 4]
// 따라서 sort 메소드의 함수식을 직접 만든다.
// 100점
function solution(d, budget) {
  let answer = 0;

  d.sort(function (a, b) {
    return a - b;
  });

  for (let i = 0; i < d.length; i++) {
    if (budget - d[i] >= 0) {
      budget = budget - d[i];
      answer++;
    } else {
      break;
    }
  }

  return answer;
}