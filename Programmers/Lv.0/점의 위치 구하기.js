// 복습완료💫(221106)
// 2022.10.17(Mon)

// my way
function solution(dot) {
  // dot[0]: x, dot[1]: y
  if (dot[0] > 0 && dot[1] > 0) return 1;
  else if (dot[0] < 0 && dot[1] > 0) return 2;
  else if (dot[0] < 0 && dot[1] < 0) return 3;
  else return 4;
}

// other way
function solution(dot) {
  return dot[0] > 0 ? (dot[1] > 0 ? 1 : 4) : dot[1] > 0 ? 2 : 3;
}
