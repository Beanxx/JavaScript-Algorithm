// 복습완료💫(221106)
// 2022.10.16(Sun)

function solution(rsp) {
  let answer = "";

  for (let el of rsp) {
    if (el === "2") answer += "0"; // 가위 -> 바위
    else if (el === "5") answer += "2"; // 보 -> 가위
    else if (el === "0") answer += "5"; // 바위 -> 보
  }
  return answer;
}

console.log(solution("205")); // '052'
