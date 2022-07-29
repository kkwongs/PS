// https://school.programmers.co.kr/learn/courses/30/lessons/42587?language=javascript
// shift, push 함수를 이용한 Queue 구현
function solution(priorities, location) {
  let answer = 0;
  
  while (priorities.length) {
      const max = Math.max(...priorities)
      const priority = priorities.shift()
      
      if (max === priority) {
          answer++
          if (location === 0) {
              return answer
          }
      } else {
          priorities.push(priority)
      }
      location--
      
      if (location < 0) {
          location = priorities.length - 1
      }
  }
}