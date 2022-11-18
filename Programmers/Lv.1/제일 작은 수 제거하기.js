// 복습완료💫(221118)
// 2022.06.15(Thurs)
// 제일 작은 수 제거하기.js

// other way
function solution(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  return arr.length === 0 ? [-1] : arr;
}

// Max.min도 사용하고, pop()도 써서 가장 작은 수를 제거하려고 했는데
// 실행 결과 테스트만 통과되고 정작 제출 실행 결과는 실패실패실패..ㅜ
// 결국 다른 사람 풀이를 이해하는 방식으로...

// ** splice(start index, deleteCount) **
// splice() 메소드 사용시 매개변수를 2개만 쓸 경우
// 첫번째 인자에 쓴 index부터 시작해서
// 두번째 인자에 쓴 개수만큼 자르게 된다.
// 여기서 arr를 return하면 splice()로 자른 최소 수를 제외한 나머지 요소 배열 return

console.log(solution([4, 3, 2, 1])); // [4, 3, 2]
