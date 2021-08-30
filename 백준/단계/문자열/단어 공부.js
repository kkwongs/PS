let input = require('fs').readFileSync('/dev/stdin').toString().split('');
// let input = ['M', 'i', 's', 's', 'i', 's', 's', 'i', 'p', 'i'];
// let input = ['b', 'a', 'a', 'a'];

let count = new Array(26).fill(0);

// 대문자
for (let i = 0; i < input.length; i++) {
  for (let j = 65; j <= 90; j++) {
    if (input[i] === String.fromCharCode(j)) {
      count[j - 65]++;
    }
  }
}

// 소문자
for (let i = 0; i < input.length; i++) {
  for (let j = 97; j <= 122; j++) {
    if (input[i] === String.fromCharCode(j)) {
      count[j - 97]++;
    }
  }
}

// 알파벳 사용 횟수
let max = count[0];

for (let i = 0; i < count.length; i++) {
  if (count[i] >= max) {
    max = count[i];
  }
}

// 중복된 횟수
let index = count.indexOf(max);
let isCount = false;

for (let i = 0; i < 26; i++) {
  if (count[i] === max && index !== i) {
    isCount = true;
  }
}

console.log(isCount ? '?' : String.fromCharCode(index + 65));
