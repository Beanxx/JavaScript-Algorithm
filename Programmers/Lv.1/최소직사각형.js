// 2022.11.26(Sat)
// 완전탐색 > 최소직사각형.js

// my way
function solution(sizes) {
  let arrW = []; // 명함의 가로 길이만 담는 배열
  let arrH = []; // 명함의 세로 길이만 담는 배열
  let maxW = 0; // 명함의 최대 가로 길이
  let maxH = 0; // 명함의 최대 세로 길이

  for (let el of sizes) {
    el.sort((a, b) => b - a); // 각 배열 내에서 더 긴 길이를 앞으로 배치하기
    arrW.push(el[0]); // 더 긴 길이를 가로 길이로 가정해서 가로 길이만 arrW 배열에 담기
    arrH.push(el[1]); // 세로 길이만 arrH 배열에 담기
    maxW = Math.max(...arrW); // 가로 길이 중 가장 긴 길이를 maxW
    maxH = Math.max(...arrH); // 세로 길이 중 가장 긴 길이를 maxH
  }
  return maxW * maxH;
}

// other way
function solution(sizes) {
  let w = 0; // 가장 긴 가로 길이
  let h = 0; // 가장 긴 세로 길이

  sizes.forEach((s) => {
    const [a, b] = s.sort((a, b) => a - b); // 더 짧은 길이를 배열 앞 원소로 배치
    if (a > h) h = a; // 각 배열의 index 0인 원소 값이 h보다 큰 경우 가장 긴 길이를 h로 할당해주기
    if (b > w) w = b; // 각 배열의 index 1인 원소 값이 w보다 큰 경우 가장 긴 길이를 w로 할당해주기
  });
  return w * h;
}

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
); // 4000

console.log(
  solution([
    [14, 4],
    [19, 6],
    [6, 16],
    [18, 7],
    [7, 11],
  ])
); // 133
