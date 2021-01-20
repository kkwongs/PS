// https://programmers.co.kr/learn/courses/30/lessons/12906?language=javascript#
function solution(arr) {
  var answer = [];
  var j = 0;
  for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i] != arr[i + 1]) {
      answer[j] = arr[i];
      j++;
    }
  }
  if (arr[i] != arr[arr.length]) {
    answer[j] = arr[i];
  }

  return answer;
}