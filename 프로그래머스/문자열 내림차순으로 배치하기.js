// https://programmers.co.kr/learn/courses/30/lessons/12917?language=javascript
function solution(s) {
  var arr = s.split('');

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (arr[i].charCodeAt() > arr[j].charCodeAt()) {
        var tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
      }
    }
  }
  s = arr.join('');

  return s;
}