// 2024.10.17(Thurs)

// my way
function solution(rank, attendance) {
  // 참석 불가능한 학생 등수는 0으로 변경
  const arr = rank.map((el, idx) => (attendance[idx] ? el : 0));

  // idx 기준으로 a,b,c를 구해야 하므로 등수와 index를 배열 형태로 만들어 이중 배열로 구성
  // => 이를 통해 이후에 참석 불가능한 학생 원소를 제거해도 기존 인덱스를 알 수 있음
  // 이후 등수가 0(참석 불가능한 학생)인 원소는 제거해줌
  const arrWithIdx = arr.map((el, idx) => [el, idx]).filter((el) => el[0]);

  // 참석 가능한 학생의 등수 기준으로 오름차순 정렬
  const sortedArr = arrWithIdx.sort((a, b) => a[0] - b[0]);

  // 등수가 높은순대로 정렬 후에 index만으로 구성된 1차원 배열로 변경
  const idxArr = sortedArr.map((el) => el[1]);

  const [a, b, c, ...rest] = idxArr;

  return 10000 * a + 100 * b + c;
}

// other way
function solution(rank, attendance) {
  const [a, b, c] = rank
    .map((rank, idx) => [rank, idx]) // [등수, 인덱스] 형태의 원소를 갖는 이중 배열 형태로 변경
    .filter(([_, i]) => attendance[i]) // attendance 원소값이 true인 원소만 추출
    .sort(([a], [b]) => a - b); // 배열 원소의 1번째 원소 기준으로 오름차순 정렬

  return 10000 * a[1] + 100 * b[1] + c[1];
}

// 내가 푼 방식과 접근 자체는 비슷했지만 각 단계별로 상수로 정의하느냐, 한번에 간단히 작성하냐의 차이 정도..?
// 확실히 이 방식이 깔꼼하다 ~.~

// ** sort()
// 이 둘의 코드는 서로 동일한 기능을 한다.

// [first, second] 형태의 원소라면 first에 해당하는 1번째 원소를 뜻함 (둘 코드 동작 동일)
// const result = arr.sort((a, b) => a[0] - b[0]);
// const result = arr.sort(([a], [b]) => a - b);

// [first, second] 형태의 원소라면 second에 해당하는 1번째 원소를 뜻함 (둘 코드 동작 동일)
// const result = arr.sort((a, b) => a[1] - b[1]);
// const result = arr.sort(([, a], [, b]) => a - b);

console.log(
  solution([3, 7, 2, 5, 4, 6, 1], [false, true, true, true, true, false, false])
); // 20403
console.log(solution([1, 2, 3], [true, true, true])); // 102
console.log(
  solution([6, 1, 5, 2, 3, 4], [true, false, true, false, false, true])
); // 50200
