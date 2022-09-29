// https://school.programmers.co.kr/learn/courses/30/lessons/67256
function solution(numbers, hand) {
  let result = '';
  const obj = {
      1: [0, 0],
      2: [0, 1],
      3: [0, 2],
      4: [1, 0],
      5: [1, 1],
      6: [1, 2],
      7: [2, 0],
      8: [2, 1],
      9: [2, 2],
      10: [3, 0],
      11: [3, 1],
      12: [3, 2]
  };
  let l = obj[10];
  let r = obj[12];
  
  numbers.map(e => {
      if (!e) e = 11;
      if (e % 3 === 1) {
          result += 'L';
          l = obj[e];
      } else if (e % 3 === 0) {
          result += 'R';
          r = obj[e];
      } else {
          const l_Distance = Math.abs(l[0] - obj[e][0]) + Math.abs(l[1] - obj[e][1]);
          const r_Distance = Math.abs(r[0] - obj[e][0]) + Math.abs(r[1] - obj[e][1]);
          console.log(e, l_Distance, r_Distance);
          if (l_Distance < r_Distance) {
              result += 'L';
              l = obj[e];
          } else if (l_Distance > r_Distance) {
              result += 'R';
              r = obj[e];
          } else {
              if (hand === 'left') {
                  result += 'L';
                  l = obj[e];
              } else {
                  result += 'R';
                  r = obj[e];
              }
          }
      }
  });

  return result;
}