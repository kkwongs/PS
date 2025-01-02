// 제곱수를 구하는 문제

const fs = require("fs");
const N = Number(fs.readFileSync(0).toString());

console.log(Math.floor(Math.sqrt(N)));
