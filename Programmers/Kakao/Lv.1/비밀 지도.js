// 2022.09.23(Fri)
// 2018 KAKAO BLIND RECRUITMENT
// Lv.1_비밀 지도.js

function solution(n, arr1, arr2) {
  let result = [];

  for (let i = 0; i < n; i++) {
    // toString(2): 2진수로 변환
    // padStart(n, 0): 문자열 시작을 0으로 채워 n 길이를 만족하는 새로운 문자열 반환
    // ex. 9 -> 1001 -> 01001
    const map1 = arr1[i].toString(2).padStart(n, 0);
    const map2 = arr2[i].toString(2).padStart(n, 0);

    let line = ""; // 한 줄씩 line에 저장
    for (let j = 0; j < n; j++) {
      // 이진수로 변환한 값에 1이 존재한다면
      if (map1[j] === "1" || map2[j] === "1") {
        line += "#";
      } else {
        // 1이 존재하지 않는다면 즉, 0이라면
        line += " ";
      }
    }
    // 빈 배열 result에 한 줄씩 원소로 push
    result.push(line);
  }
  return result;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
// [ '#####', '# # #', '### #', '#  ##', '#####' ]

console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]));
// [ '######', '###  #', '##  ##', ' #### ', ' #####', '### # ' ]

// 시간이 너무 오래걸려서 온전한 내 힘으로는 풀지 못했따,,
// 새로운 메서드 2개나 새롭게 알게 됨! (toString(2), padStart(n, 0))
