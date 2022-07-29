// https://school.programmers.co.kr/learn/courses/30/lessons/12906?language=javascript
// push와 pop 함수를 사용하여 Stack 구현
function solution(arr)
{
    let stack = [];
    let j = 0
    
    stack.push(arr[0])
    
    for (let i = 1; i < arr.length; i++) {
        stack.push(arr[i])
        if (stack[j] === arr[i]) {
            stack.pop()
        } else {
            j++
        }
    }
    
    return stack;
}