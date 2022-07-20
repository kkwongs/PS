/*
function solution(nums) {
  var answer = 0;
  let obj = {}, arr = [];
  
  nums.forEach(num => obj[num] = num);
  for (let num in obj) {
      arr.push(num);
  }
  
  answer = arr.length > nums.length / 2 ? nums.length / 2 : arr.length;
  
  return answer;
}
*/

// 표준 내장 객체 Set을 사용하여 배열 중복 제거
function solution(nums) {
  var answer = 0;
  const arr = [...new Set(nums)];
  
  answer = arr.length > nums.length / 2 ? nums.length / 2 : arr.length;
  
  return answer;
}