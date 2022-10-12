// https://school.programmers.co.kr/learn/courses/30/lessons/72410
/* 내 풀이
function solution(new_id) {
  new_id = new_id
      .toLowerCase()
      .replace(/[^\w-.]/g, '')
      .replace(/\.{2,}/g, '.')
      .replace(/^\.|\.$/g, '');
  if (!new_id) new_id = 'a';
  if (new_id.length >= 16) new_id = new_id.slice(0, 15).replace(/\.$/, '');
  if (new_id.length <= 2) new_id += new_id[new_id.length - 1].repeat(3 - new_id.length);

  return new_id;
}
*/

/* 정규식 공백 표현: /^$/
function solution(new_id) {
  new_id = new_id
      .toLowerCase()
      .replace(/[^\w-.]/g, '')
      .replace(/\.{2,}/g, '.')
      .replace(/^\.|\.$/g, '')
      .replace(/^$/, 'a')
      .slice(0, 15).replace(/\.$/, '');
  
  return new_id.length <= 2 ? new_id + new_id[new_id.length - 1].repeat(3 - new_id.length) : new_id;
}
*/

// padEnd 메서드를 통해 주어진 길이만큼 문자 채워넣기
function solution(new_id) {
  new_id = new_id
      .toLowerCase()
      .replace(/[^\w-.]/g, '')
      .replace(/\.{2,}/g, '.')
      .replace(/^\.|\.$/g, '')
      .replace(/^$/, 'a')
      .slice(0, 15).replace(/\.$/, '');
  
  return new_id.padEnd(3, new_id[new_id.length - 1]);
}