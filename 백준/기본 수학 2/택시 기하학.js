let R = Number(require('fs').readFileSync('/dev/stdin'));
// let R = 21;

console.log((R * R * Math.PI).toFixed(6));
console.log((R * R * 2).toFixed(6));
