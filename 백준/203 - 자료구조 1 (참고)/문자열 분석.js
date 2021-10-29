const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
// const input = [
//   'This is String',
//   'SPACE    1    SPACE',
//   ' S a M p L e I n P u T     ',
//   '0L1A2S3T4L5I6N7E8',
// ];
const N = input.length;

for (let i = 0; i < N; i++) {
  if (input[i] === '') continue;
  const S = input[i].split('');
  const result = new Array(4).fill(0);

  for (let j = 0; j < S.length; j++) {
    if (S[j] >= 'a' && S[j] <= 'z') {
      result[0]++;
    } else if (S[j] >= 'A' && S[j] <= 'Z') {
      result[1]++;
    } else if (S[j] >= '0' && S[j] <= '9') {
      result[2]++;
    } else if (S[j] === ' ') {
      result[3]++;
    }
  }

  console.log(result.join(' '));
}
