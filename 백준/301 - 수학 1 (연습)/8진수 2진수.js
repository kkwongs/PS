let input = require('fs').readFileSync('/dev/stdin').toString().trim();
// let input = '314';
let result = '';

while (input) {
  let binary = parseInt(input[0], 8).toString(2);

  while (binary.length !== 3) {
    binary = '0' + binary;
  }

  result += binary;
  input = input.slice(1);
}

while (result[0] === '0' && result.length !== 1) {
  result = result.slice(1);
}

console.log(result);
