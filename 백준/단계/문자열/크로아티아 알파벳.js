/* first solution
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('');
// let input = ['l', 'j', 'e', 's', '=', 'n', 'j', 'a', 'k'];
// let input = ['d', 'd', 'z', '=', 'z', '='];
// let input = ['n', 'l', 'j', 'j'];

let result = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i] === 'c') {
    if (input[i + 1] === '=' || input[i + 1] === '-') {
      result++;
      i++;
    } else {
      result++;
    }
  } else if (input[i] === 'd') {
    if (input[i + 1] === 'z' && input[i + 2] === '=') {
      result++;
      i += 2;
    } else if (input[i + 1] === '-') {
      result++;
      i++;
    } else {
      result++;
    }
  } else if (input[i] === 'l') {
    if (input[i + 1] === 'j') {
      result++;
      i++;
    } else {
      result++;
    }
  } else if (input[i] === 'n') {
    if (input[i + 1] === 'j') {
      result++;
      i++;
    } else {
      result++;
    }
  } else if (input[i] === 's') {
    if (input[i + 1] === '=') {
      result++;
      i++;
    } else {
      result++;
    }
  } else if (input[i] === 'z') {
    if (input[i + 1] === '=') {
      result++;
      i++;
    } else {
      result++;
    }
  } else {
    result++;
  }
}

console.log(result);

*/

// second solution
let input = require('fs').readFileSync('dev/stdin').toString().trim();
// let input = 'dz=ak';

let croatian = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];

for (let i = 0; i < croatian.length; i++) {
  input = input.split(croatian[i]).join(' ');
}

console.log(input.length);
