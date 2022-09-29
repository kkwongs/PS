// https://school.programmers.co.kr/learn/courses/30/lessons/77484
function solution(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1];
  let min = lottos.filter(e => win_nums.includes(e)).length;
  let zero = lottos.filter(e => !e).length;
  
  return [rank[min + zero], rank[min]];
}