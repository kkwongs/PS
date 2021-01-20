// https://programmers.co.kr/learn/courses/30/lessons/12901?language=javascript

function solution(a, b) {
  let week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  return week[new Date('2016-' + a + '-' + b).getDay()];
}