// https://programmers.co.kr/learn/courses/30/lessons/12915?language=javascript

// function solution(strings, n) {
//   for (let i = 0; i < strings.length; i++) {
//     for (let j = 0; j < strings.length; j++) {
//       if (strings[i].split('')[n] < strings[j].split('')[n]) {
//         let temp = strings[i];
//         strings[i] = strings[j];
//         strings[j] = temp;
//       }
//     }
//   }

//   for (let i = 0; i < strings.length; i++) {
//     for (let j = 0; j < strings.length; j++) {
//       if (strings[i].split('')[n] === strings[j].split('')[n]) {
//         if (strings[i] < strings[j]) {
//           let temp = strings[i];
//           strings[i] = strings[j];
//           strings[j] = temp;
//         }
//       }
//     }
//   }

//   return strings;
// }

function solution(strings, n) {
  for (let i = 0; i < strings.length; i++) {
    for (let j = 0; j < strings.length; j++) {
      if (strings[i].split('')[n] < strings[j].split('')[n]) {
        let temp = strings[i];
        strings[i] = strings[j];
        strings[j] = temp;
      }
      else if (strings[i].split('')[n] === strings[j].split('')[n]) {
        if (strings[i] < strings[j]) {
          let temp = strings[i];
          strings[i] = strings[j];
          strings[j] = temp;
        }
      }
    }
  }

  return strings;
}


// sort 함수
function solution(strings, n) {
  return strings.sort(function (a, b) {
    if (a[n] === b[n]) {
      return (a > b) - (a < b);
    } else {
      return a.charCodeAt(n) - b.charCodeAt(n);
    }
  })
}