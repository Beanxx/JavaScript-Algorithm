// [멱집합] 집밥이 그리워.js
// 2022.08.11(Thurs)

function missHouseMeal(sideDishes) {
  const result = [];

  sideDishes.sort(); // sideDishses를 사전식 순서로 정렬

  // 재귀 함수
  function recursion(subset, start) {
    result.push(subset);

    for (let i = start; i < sideDishes.length; i++) {
      recursion(subset.concat(sideDishes[i]), i + 1);
    }
  }
  // 재귀함수 실행
  recursion([], 0);

  // result 결과를 사전식 순서로 정렬
  return result.sort();
}
