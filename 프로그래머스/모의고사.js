function solution(answers) {
  let arr1 = [1, 2, 3, 4, 5];
  let arr2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let arr3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let cnt1 = 0, cnt2 = 0, cnt3 = 0;
  let max = [];

  for (let i = 0; i < answers.length; i++) {
    let stu1 = i % 5;
    let stu2 = i % 8;
    let stu3 = i % 10;
    if (answers[i] === arr1[stu1]) {
      cnt1++;
    }
    if (answers[i] === arr2[stu2]) {
      cnt2++;
    }
    if (answers[i] === arr3[stu3]) {
      cnt3++;
    }
  }

  if (cnt1 >= cnt2 && cnt1 >= cnt3) {
    max.push(1);
  }

  if (cnt2 >= cnt1 && cnt2 >= cnt3) {
    max.push(2);
  }

  if (cnt3 >= cnt1 && cnt3 >= cnt2) {
    max.push(3);
  }

  return max;
}