// 복습완료💫(221108)
// 2022.10.31(Mon)

// my way
function solution(common) {
  let result = 0;

  let cha1 = common[1] - common[0]; // 1,2번째 두 수의 차
  let cha2 = common[2] - common[1]; // 2,3번째 두 수의 차

  let bi = common[1] / common[0]; // 1,2번째 두 수의 비

  let last = common.slice(-1)[0]; // 마지막 원소
  // slice 대신 common.pop() 해줘도 마지막 원소만 추출 가능!

  // 두 수의 차가 같다는 것은 등차수열이므로 마지막 수인 last에 +차
  // 다르다는건 등비수열이므로 마지막 수에 *비
  return cha1 === cha2 ? last + cha1 : last * bi;
}
