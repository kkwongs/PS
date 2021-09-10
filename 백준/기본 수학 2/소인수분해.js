let N = Number(require('fs').readFileSync('/dev/stdin'));
// let N = 9991;

let prime = 2;

function isPrime(num) {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

while (N !== 1 || prime <= Math.sqrt(N)) {
  if (isPrime(N)) {
    console.log(N);
    break;
  }

  if (N % prime === 0) {
    console.log(prime);
    N /= prime;
  } else {
    prime++;
  }
}
