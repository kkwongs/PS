// https://school.programmers.co.kr/learn/courses/30/lessons/92335
function solution(n, k) {
    let result = 0;
    n.toString(k).split(0).map(v => {
        if (isPrime(v)) result++;
    });
    return result;
}

const isPrime = (n) => {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}