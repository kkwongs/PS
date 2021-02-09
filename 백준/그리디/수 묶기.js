const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let positive = [];
let negative = [];
let zeroOne = [];
let result = 0;

rl.on('line', function (line) {
  input.push(line)
})
  .on('close', function () {
    input.shift();

    for (let i = 0; i < input.length; i++) {
      if (input[i] > 1) {
        positive.push(input[i]);
      } else if (input[i] < 0) {
        negative.push(input[i]);
      } else {
        zeroOne.push(input[i]);
      }
    }

    positive.sort(function (a, b) {
      return b - a;
    });
    negative.sort(function (a, b) {
      return a - b;
    });
    zeroOne.sort(function (a, b) {
      return a - b;
    });

    for (let i = 0; i < positive.length; i += 2) {
      if ((positive[i + 1]) == undefined) {
        result += Number(positive[i]);
      } else {
        result += positive[i] * positive[i + 1];
      }
    }

    for ( let i = 0; i < negative.length; i += 2) {
      if (negative[i + 1] == undefined) {
        if (Number(zeroOne[0]) != 0) {
          result += Number(negative[i]);
        }
      } else {
        result += negative[i] * negative[i + 1];
      }
    }

    for (let i = 0; i < zeroOne.length; i++) {
      result += Number(zeroOne[i]);
    }
  
    console.log(result);
    process.exit();
  });