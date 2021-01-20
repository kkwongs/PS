https://programmers.co.kr/learn/courses/30/lessons/42576?language=javascript
// 정확성 50 효율성 0
function solution(participant, completion) {
  var answer = [];
  let cnt = 0;

  for (let i = 0; i < participant.length; i++) {
    for (let j = 0; j < completion.length; j++) {
      if (participant[i] === completion[j]) {
        participant[i] = null;
        completion[j] = null;
      }
    }
    if (participant[i] !== null) {
      answer[cnt] = participant[i];
      cnt++;
    }
  }

  return answer.toString();
}

// 정확성 50 효율성 50
function solution(participant, completion) {
  participant = participant.sort();
  completion = completion.sort();

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}