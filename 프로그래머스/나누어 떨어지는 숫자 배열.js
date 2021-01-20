// https://programmers.co.kr/learn/courses/30/lessons/12910
function solution(arr, divisor) {
  var answer = [];
  var i = 0, j = 0;

  // element != 0
  while (i < arr.length) {
    if (arr[i] % divisor == 0) {
      answer[j] = arr[i];
      j++;
    }
    i++;
  }
  // element = 0
  if (j == 0) {
    answer[0] = -1;
  }

  // sort
  for (var e = 0; e < answer.length; e++) {
    for (var f = 0; f < answer.length; f++) {
      if (answer[e] < answer[f]) {
        var temp = answer[e];
        console.log(temp);
        
        answer[e] = answer[f];
        answer[f] = temp;
      }
    }
  }

  console.log(answer);
  //  answer;
}

solution([4,2,1,5,3], 3);