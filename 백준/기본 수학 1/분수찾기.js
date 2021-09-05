let input = require('fs').readFileSync('/dev/stdin');
// let input = 10;

let line = 1;
let lineLast = 0;

while (true) {
  lineLast += line;
  if (input <= lineLast) {
    let up = line - (lineLast - input);
    let down = line + 1 - up;
    if (line % 2 === 0) {
      console.log(up + '/' + down);
    } else {
      console.log(down + '/' + up);
    }
    break;
  }
  line++;
}
