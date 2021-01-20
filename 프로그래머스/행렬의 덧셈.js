// https://programmers.co.kr/learn/courses/30/lessons/12950?language=javascript

// 가장 빠름
function solution(arr1, arr2) {
  let arr = [];

  for (let i = 0; i < arr1.length; i++) {
    arr[i] = [];
    for (let j = 0; j < arr1[0].length; j++) {
      arr[i][j] = arr1[i][j] + arr2[i][j];
    }
  }

  return arr;
}

// Array.map 함수 사용
function solution(arr1, arr2) {
  let arr = Array(arr1.length).fill(null).map(() => Array());

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[0].length; j++) {
      arr[i][j] = arr1[i][j] + arr2[i][j];
    }
  }

  return arr;
}

// Array.from 함수 사용 (가장 느림)
function solution(arr1, arr2) {
  let arr = Array.from(Array(arr1.length), () => Array());

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[0].length; j++) {
      arr[i][j] = arr1[i][j] + arr2[i][j];
    }
  }

  return arr;
}