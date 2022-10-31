// 2022.10.31(Mon)

// my way
function solution(common) {
  let result = 0;

  let cha1 = common[1] - common[0];
  let cha2 = common[2] - common[1];

  let bi = common[1] / common[0];

  let last = common.slice(-1)[0]; // 마지막 원소
  // slice 대신 common.pop() 해줘도 마지막 원소만 추출 가능!

  // 등차수열
  if (cha1 === cha2) {
    result = last + cha1;
  } else {
    // 등비수열
    result = last * bi;
  }

  return result;
}
