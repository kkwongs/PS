let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

// BigInt는 Number가 나타낼 수 있는 최대치 2^53 -1 보다 큰 정수를 표한할 수 있는 내장 객체
console.log((BigInt(input[0]) + BigInt(input[1])).toString());
