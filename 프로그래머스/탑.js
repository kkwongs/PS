// https://programmers.co.kr/learn/courses/30/lessons/42588?language=javascript

function solution(heights) {
  var answer = [];

  answer[0] = 0;

  for (let i = heights.length - 1; i > 0; i--) {
    for (let j = i - 1; j >= 0; j--) {
      if (heights[i] < heights[j]) {
        answer[i] = j + 1;
        break;
      } else {
        answer[i] = 0;
      }
    }
  }

  return answer;
}