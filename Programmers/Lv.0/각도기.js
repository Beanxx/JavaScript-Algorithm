// 복습완료💫(221106)
// 2022.10.14(Fri)

// my way
function solution(angle) {
  if (angle > 0 && angle < 90) return 1;
  else if (angle === 90) return 2;
  else if (angle < 180) return 3;
  else if (angle === 180) return 4;
}

// other way 1
function solution(angle) {
  if (angle < 90) return 1;
  else if (angle === 90) return 2;
  else if (angle < 180) return 3;
  else return 4;
}
// 내가 풀었던 방식과 같지만 조건을 하나씩만 써줘서 더 간결한 느낌

// other way 2
function solution(angle) {
  return [0, 90, 91, 180].filter((el) => angle >= el).length;
}
// 만약 angle이 100이라면 filter 결과는 [0, 90, 91] length => 3

// 요건 생각하지도 못했던 신박한 방법쓰..
