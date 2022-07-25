// https://school.programmers.co.kr/learn/courses/30/lessons/42586
/*
function solution(progresses, speeds) {
  var answer = [];
  const length = progresses.length
  let days = new Array(length).fill(0)
  
  for (let i = 0; i < length; i++) {
      let progress = progresses[i]
      while (progress < 100) {
          progress += speeds[i]
          days[i]++
      }
  }
  
  while (days.length) {
      let day = days.shift()
      let count = 1
      let flag = true

      while (flag && days.length) {
          let next = days.shift()
          if (day >= next) {
              count++
          } else {
              days.unshift(next)
              flag = false
          }
      }
      answer.push(count)
  }
  
  return answer;
}
*/

// map 함수 사용 & 이중 반복문 개선
function solution(progresses, speeds) {
  var answer = [1];
  let days = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]))
  let i = 0
  let first = days.shift()
  
  while (days.length) {
      let next = days.shift()
      
      if (first >= next) {
          answer[i]++
      } else {
          first = next
          answer[++i] = 1
      }
  }
  
  return answer;
}