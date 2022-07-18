// 재귀함수를 이용한 DFS 구현
function solution(numbers, target) {
  var answer = 0;

  dfs(0, 0);

  function dfs(index, sum) {
      if (index === numbers.length) {
          if (sum === target) {
              answer++;
          }

          return 0;
      }

      dfs(index + 1, sum + numbers[index]);
      dfs(index + 1, sum - numbers[index]);
  }

  return answer;
}