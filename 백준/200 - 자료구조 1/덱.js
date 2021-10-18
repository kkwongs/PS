const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');
// const input = [
//   '15',
//   'push_back 1',
//   'push_front 2',
//   'front',
//   'back',
//   'size',
//   'empty',
//   'pop_front',
//   'pop_back',
//   'pop_front',
//   'size',
//   'empty',
//   'pop_back',
//   'push_front 3',
//   'empty',
//   'front',
// ];
const N = Number(input.shift());
const deque = [];
let result = [];

for (let i = 0; i < N; i++) {
  if (input[i].split(' ').length === 1) {
    if (input[i] === 'pop_front') {
      result.push(deque.shift() || -1);
    } else if (input[i] === 'pop_back') {
      result.push(deque.pop() || -1);
    } else if (input[i] === 'size') {
      result.push(deque.length);
    } else if (input[i] === 'empty') {
      result.push(deque.length ? 0 : 1);
    } else if (input[i] === 'front') {
      result.push(deque[0] || -1);
    } else if (input[i] === 'back') {
      result.push(deque[deque.length - 1] || -1);
    }
  } else {
    if (input[i].split(' ')[0] === 'push_front') {
      deque.unshift(input[i].split(' ')[1]);
    } else {
      deque.push(input[i].split(' ')[1]);
    }
  }
}

console.log(result.join('\n'));

/* class 사용
class Deque {
  constructor() {
    this.arr = [];
    this.head = 0;
    this.tail = 0;
  }
  push_front(item) {
    if (this.arr[0]) {
      for (let i = this.arr.length; i > 0; i--) {
        this.arr[i] = this.arr[i - 1];
      }
    }
    this.arr[this.head] = item;
    this.tail++;
  }
  push_back(item) {
    this.arr[this.tail++] = item;
  }
  pop_front() {
    if (this.head >= this.tail) {
      return null;
    } else {
      const result = this.arr[this.head++];
      return result;
    }
  }
  pop_back() {
    if (this.head >= this.tail) {
      return null;
    } else {
      const result = this.arr[--this.tail];
      return result;
    }
  }
  front() {
    return this.arr[this.head];
  }
  back() {
    return this.arr[this.tail - 1];
  }
}

const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');
const N = Number(input.shift());
const deque = new Deque();
let result = [];

for (let i = 0; i < N; i++) {
  if (input[i].split(' ').length === 1) {
    if (input[i] === 'pop_front') {
      result.push(deque.pop_front() || -1);
    } else if (input[i] === 'pop_back') {
      result.push(deque.pop_back() || -1);
    } else if (input[i] === 'size') {
      result.push(deque.length);
    } else if (input[i] === 'empty') {
      result.push(deque.length ? 0 : 1);
    } else if (input[i] === 'front') {
      result.push(deque.front() || -1);
    } else if (input[i] === 'back') {
      result.push(deque.back() || -1);
    }
  } else {
    if (input[i].split(' ')[0] === 'push_front') {
      deque.push_front(input[i].split(' ')[1]);
    } else {
      deque.push_back(input[i].split(' ')[1]);
    }
  }
}

console.log(result.join('\n'));
*/
