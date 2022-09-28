// https://school.programmers.co.kr/learn/courses/30/lessons/70129
function solution(s) {
  let zeroCount = 0;
  let count = 0;

  while(s !== '1') {
      const sLength = s.split('').length;
      const temp = s.split('0').length - 1;
      s = (sLength - temp).toString(2);
      zeroCount += temp;
      count++;
  }


  return [count, zeroCount]
}