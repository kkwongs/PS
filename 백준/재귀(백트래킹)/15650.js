// 수열 만들기
// 자연수 N과 M이 주어졌을 때, 길이가 M인 수열을 모두 구하는 프로그램을 작성하세요.
// 1부터 N까지의 자연수 중에서 중복 없이 M개를 고른 수열

const N = 4;
const M = 3;
const arr = [];

const recur = (number) => {
  if (number === M) {
    console.log(arr.join(" "));
    return;
  }
  for (let i = 1; i < N + 1; i++) {
    if (arr.includes(i)) {
      continue;
    }
    arr.push(i);
    recur(number + 1);
    arr.pop();
  }
};

recur(0);
