https://programmers.co.kr/learn/courses/30/lessons/12943?language=javascript
function solution(num) {
    let cnt = 0;
    
    while(num !== 1) {
        if(num%2 === 0) {
            num = num / 2;
            cnt++;
        } else {
            num = num * 3 + 1;
            cnt++;
        }
        if(cnt === 500) {
            return -1;
        }
    }
    
    return cnt;
}