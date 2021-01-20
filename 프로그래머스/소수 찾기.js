https://programmers.co.kr/learn/courses/30/lessons/12921?language=javascript
// function solution(n) {
//   var answer = 0;

//   for (let i = 2; i <= n; i++) {
//     let cnt = 0;
//     for (let j = 2; j <= i; j++) {
//       if (i % j === 0) {
//         cnt++;
//       }
//     }
//     if (cnt === 1) {
//       answer++;
//     }
//   }

//   return answer;
// }

// 에라토스테네스의 체
function solution(n) {
  let answer = 0;
  let arr = [];

  for (let i = 2; i <= n; i++) {
    arr[i] = true;
  }

  for (let i = 2; i * i <= n; i++) {
    if (arr[i]) {
      for (let j = i * i; j <= n; j += i) {
        arr[j] = false;
      }
    }
  }

  for (let i = 2; i <= n; i++) {
    if (arr[i] === true) {
      answer++;
    }
  }

  return answer;
}