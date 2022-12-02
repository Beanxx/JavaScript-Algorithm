// 2022.11.28(Mon)
// 2021 Dev-Matching: 웹 백엔드 개발자(상반기)
// 로또의 최고 순위와 최저 순위.js

// my way
function solution(lottos, win_nums) {
  const rank = { 6: 1, 5: 2, 4: 3, 3: 4, 2: 5, 1: 6, 0: 6 }; // key: 맞춘 개수, value: 순위
  let answer = [];
  let minCount = 0; // 최저 맞춘 개수
  let maxCount = 0; // 최고 맞춘 개수

  for (let el of lottos) {
    // 당첨 번호가 맞는 경우
    if (win_nums.includes(lottos[i])) {
      maxCount++;
      minCount++; // 0 번호가 모두 당첨되지 않는다고 가정했을 때 최저 맞춘 개수는 여기서 끄읏
    } else {
      // 0 제외한 나머지 당첨 번호가 맞지 않는 경우
      // 0 번호가 모두 당첨 번호라고 가정했을 때 최고 맞춘 개수가 되므로 maxCount +1
      if (el === 0) maxCount++;
    }
    answer[0] = rank[maxCount]; // answer 배열 첫번째 원소로 최고순위
    answer[1] = rank[minCount]; // answer 배열 두번째 원소로 최저순위
  }
  return answer;
}

// other way
function solution(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1]; // 맞춘 개수는 index와 동일하므로 배열로도 초기값 할당이 가능하다!
  // 맞춘 개수    0  1  2  3  4  5  6

  let minCount = lottos.filter((v) => win_nums.includes(v)).length; // 당첨번호와 일치하는 경우
  let zeroCount = lottos.filter((v) => !v).length;
  // !v => 번호가 0일 경우 !0 가 true인 점을 활용해서 번호 0의 개수를 구할 수 있다!

  const maxCount = minCount + zeroCount; // 로또번호를 진짜 맞춘 개수 + 번호 0의 개수

  return [rank[maxCount], rank[minCount]];
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19])); // [3, 5]
