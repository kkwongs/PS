// https://school.programmers.co.kr/learn/courses/30/lessons/12914
function solution(num) {
  let oneStepCount = num % 2;
  let twoStepCount = Math.floor(num / 2);
  let total = oneStepCount + twoStepCount;
  let result = 0;
  
  while (twoStepCount >= 0) {
      result += (combination(total, oneStepCount));
      total++;
      oneStepCount += 2;
      twoStepCount--;
  }
  
  return result;
}

function combination(a, b) {
  if (!b || a === b) return 1;
  if (b === 1 || a - b === 1) return a;
  let x = 1n;
  let y = 1n;
  while (b > 0) {
      x *= BigInt(a);
      y *= BigInt(b);
      a--;
      b--;
  }
  
  return Number(x / y % 1234567n);
}

/* 피보나치와 동일
function solution(n) {
  let first = 1;
  let second = 1;
  while(n >= 2) {
      const sum = (first + second) % 1234567;
      first = second;
      second = sum;
      n--;
  }
  return second;
}
*/