// 복습완료💫(221119)
// 2022.06.24(Fri)
// 2016년.js

function solution(a, b) {
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const date = new Date(`2016, ${a}, ${b}`); // 2016-05-23T15:00:00.000Z
  // date.getDay() = 2
  return days[date.getDay()];
}

// new Date(year, monthIndex, day)
// getDay(): 주어진 날짜의 현지 시간 기준 요일을 반환 (0: 일요일)
// days[~~.getDay()]: getDay()로 요일 해당하는 index 번호를 리턴 (0: 일, 1: 월, ...)
// -> days 배열에서 해당하는 요일 문자열 리턴

// ---------

// other way
// Date() 메서드 사용하지 않고 푸는 방법
function solution(a, b) {
  // 2016.01.01 => 금욜이므로 금욜부터 시작
  const days = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  const months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // 1/1일에서  -> a/b일까지 며칠 차이인지 저장
  let count = 0;

  // a월 전까지 모든 달에 대해 각 달의 날짜 수를 더해줌
  for (let i = 0; i < a - 1; i++) {
    count += months[i];
  }

  // 날짜는 0일이 아닌 1일부터 시작이므로 -1
  count += b - 1;

  // 요일은 7개이므로 % 7
  return days[count % 7];
}

// 왜 i < a 가 아닌 i < a-1 인지 확실히 이해가 가진 않는다,,
