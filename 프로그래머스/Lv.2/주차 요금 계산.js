// https://school.programmers.co.kr/learn/courses/30/lessons/92341
/* 내 풀이
function solution(fees, records) {
  const obj = {};
  const totalTime = {};
  let result = [];
  records.map(v => {
      const arr = v.split(' ');
      if (Object.keys(obj).includes(arr[1])) {
          const hour = arr[0].split(':')[0] - obj[arr[1]].time.split(':')[0];
          const minute = arr[0].split(':')[1] - obj[arr[1]].time.split(':')[1];
          const total = hour * 60 + minute;
          Object.keys(totalTime).includes(arr[1]) ? totalTime[arr[1]] += total : totalTime[arr[1]] = total;
          delete obj[arr[1]];
      } else {
          obj[arr[1]] = {
              time: arr[0],
              inOut: arr[2]
          };   
      }
  })
  
  // 출차된 내역이 없는 차량
  for (const key in obj) {
      const hour = 23 - obj[key].time.split(':')[0];
      const minute = 59 - obj[key].time.split(':')[1];
      const total = hour * 60 + minute;
      Object.keys(totalTime).includes(key) ? totalTime[key] += total : totalTime[key] = total;
  }
  
  
  Object.keys(totalTime).sort((a, b) => a - b).forEach(key => {
      result.push(totalTime[key]);
  });
  
  result = result.map(v => {
      if (v > fees[0]) {
          return fees[1] + Math.ceil((v - fees[0]) / fees[2]) * fees[3];
      } else return fees[1];
  })
  
  return result;
}
*/
// 다른 사람 풀이 참고 후 내 풀이
function solution(fees, records) {
  const parkingTime = {};
  const parkingFee = {};
  const result = [];
  
  // 주차 시간
  records.map(e => {
      const [time, carNum, isInOut] = e.split(' ');
      const [h, m] = time.split(':');
      const total = h * 60 + +m;
      if (!parkingTime[carNum]) parkingTime[carNum] = 0;
      if (isInOut === 'IN') parkingTime[carNum] += 23 * 60 + 59 - total;
      else parkingTime[carNum] -= 23 * 60 + 59 - total;
  });
  
  // 주차 요금
  for (const key in parkingTime) {
      if (parkingTime[key] > fees[0]) {
        parkingFee[key] = fees[1] + Math.ceil((parkingTime[key] - fees[0]) / fees[2]) * fees[3];
    } else parkingFee[key] = fees[1];
  }
  
  // 차량 번호 오름차순 정렬
  Object.keys(parkingFee).sort((a, b) => a - b).map(key => result.push(parkingFee[key]));
  
  return result;
}