function solution(array, commands) {
  var answer = [];
  let num = 0;

  while (num < commands.length) {
      const [i, j, k] = commands[num];
      let temp = [];
      
      for (let start = i - 1; start <= j - 1; start++) {
          temp.push(array[start]);
      }
      insertion(temp);
      answer.push(temp[k - 1]);
      num++;
  }
  
  return answer;
}

function insertion(array) {
  for (let i = 1; i < array.length; i++) {
      let current = array[i];
      let left = i - 1;
      
      while (left >= 0 && array[left] > current) {
          array[left + 1] = array[left];
          left--;
      }
      array[left + 1] = current;
  }
  
  return array;
}