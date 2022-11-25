// 2022.11.25(Fri)
// 2019 KAKAO BLIND RECRUITMENT
// Lv.1_실패율.js

// my way
function solution(N, stages) {
  let answer = [];
  let total = stages.length; // 스테이지에 도전한 인원 => 분모
  for (let i = 1; i <= N; i++) {
    let count = 0; // 각 스테이지 단계 실패자 수
    for (let el of stages) {
      // 스테이지 단계와 원소 숫자가 다르다는 것은 그 단계 숫자보다 크다는 의미이므로 스테이지 성공의 경우
      if (el !== i) continue;
      // 스테이지 단계와 원소 숫자가 같다는 것은 그 단계를 클리어하지 못한 경우가 됨 => 실패case 추가
      else count++;
    }
    answer.push([i, count / total]); // 스테이지 단계와 실패율 모두 answer 배열에 저장
    total -= count; // 다음 스테이지 단계로 넘어가는 사람들 = 현재 스테이지 도전자 수 - 실패자
  }
  // answer = [[ 1, 1/8 ], [ 2, 3/7 ], [ 3, 2/4 ], [ 4, 1/2 ], [ 5, 0/1 ]]
  answer.sort((a, b) => b[1] - a[1]); // 실패율을 기준으로 내림차순 정렬
  return answer.map((el) => el[0]); // 배열에서 스테이지 단계만 뽑아내기
}

// other way
function solution(N, stages) {
  let result = [];
  for (let i = 1; i <= N; i++) {
    // 실패율 분모: 다음 단계로 넘어갈 수 있는 사람 (스테이지 단계 이상의 수이면 성립)
    let reach = stages.filter((x) => x >= i).length;
    // 실패율 분자: 스테이지 단계와 같은 수이면 실패자에 해당
    let curr = stages.filter((x) => x === i).length;
    result.push([i, curr / reach]);
  }
  result.sort((a, b) => b[1] - a[1]);
  return result.map((x) => x[0]);
}
// 실패율 구하는 방법만 좀 다른데 이 방법으로 풀면 for문을 한번만 사용 가능하다! 코드도 더 간결해짐!!

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3])); // [3, 4, 2, 1, 5]
console.log(solution(4, [4, 4, 4, 4, 4])); // [4, 1, 2, 3]
