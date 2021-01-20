// https://programmers.co.kr/learn/courses/30/lessons/42889?language=javascript

function solution(N, stages) {
  let fail = [];
  let result = [];

  for (let i = 1; i <= N; i++) {
    let totalPlayer = 0;
    let ingPlayer = 0;

    for (let j = 0; j < stages.length; j++) {
      if (stages[j] >= i) {
        totalPlayer++;
      }
      if (stages[j] === i) {
        ingPlayer++;
      }
    }

    fail[i - 1] = ingPlayer / totalPlayer;
  }

  let arr1 = JSON.parse(JSON.stringify(fail));
  let arr2 = fail.sort().reverse();
  console.log(arr1);
  console.log(arr2);

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1.length; j++) {
      if (arr2[i] === arr1[j]) {
        result[i] = j + 1;
        arr1[j] = 5;
      }
    }
  }

  return result;
}