let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
// let input = ['839', '237'];

let tempArray = [];
let temp;

for (let i = 0; i < 2; i++) {
  tempArray.push(input[i].split(''));
  temp = tempArray[i][0];
  tempArray[i][0] = tempArray[i][2];
  tempArray[i][2] = temp;
  tempArray[i] = tempArray[i].join('');
}

console.log(tempArray[0] > tempArray[1] ? tempArray[0] : tempArray[1]);
