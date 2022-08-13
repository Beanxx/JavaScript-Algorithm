// [순열] 새로운 치킨 소스 레시피.js
// 2022.08.11(Thurs)

function newChickenRecipe(stuffArr, choiceNum) {
  // N가지의 재료 중에 단 M가지만을 사용하여 조합한 모든 경우의 수 중 하나
  // 재료는 0과 1로 암호화되어 있고 항상 1로 시작
  // 0이 3개 이상인 재료는 상한 재료이기 때문에 제외
  // 재료를 넣는 순서가 다르면 다른 레시피

  // 1. N가지의 재료 중에 단 M가지만을 사용하여 조합한 모든 경우의 수 중 하나
  // 2. 재료는 0과 1로만 이루어진 숫자로 암호화가 되어 있고, 항상 1로 시작하며 복호화할 수 없음
  // 2-1. 단, 0이 3개 이상인 재료는 상한 재료이기 때문에 제외
  // 3. 재료의 순서에 따라 맛이 달라지기 때문에, 재료를 넣는 순서가 다르다면 다른 레시피

  // 주의사항2 만족: 사용할 수 있는 재료가 choiceNum보다 작다면 빈 배열 []을 반환
  if (stuffArr.length < choiceNum) {
    return [];
  }

  // 문제 2-1 만족하도록 filter 구현
  // 0이 3개 이상인 재료를 배열에서 제외시키기
  // stuffArr: [1, 10, 11000, 1111] -> filtered: [1, 10, 1111]
  const filtered = stuffArr
    .filter((el) => {
      let count = 0;
      for (let i = 0; i < String(el).length; i++) {
        // 요소 값 내에 0이 포함되어 있는 요소 filter
        // count +1씩 증가
        String(el)[i] === "0" && count++;
      }
      // 위에서 반복문을 3번 미만으로 순회한 요소만 반환
      // 즉, 요소 내에 0이 3개 이상인 값만 제외하고 반환
      return count < 3;
    })
    .sort((a, b) => a - b); // 배열 내 요소 값 오름차순 정렬

  const result = [];

  // 재귀 함수 구현 (순열 조합 생성을 위해)
  const permutation = (arr, num, recipe) => {
    // 재귀 멈출 조건
    if (num === 0) {
      result.push(recipe);
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      // 배열 arr 내에 존재하지 않으면 pass~
      if (recipe.indexOf(arr[i]) !== -1) {
        continue;
      }

      // 재귀함수 실행
      permutation(arr, num - 1, [...recipe, arr[i]]);
    }
  };

  permutation(filtered, choiceNum, []);

  return result;
}

console.log(newChickenRecipe([1, 10, 1100, 1111], 2));
/* [
  [ 1, 10 ],      [ 1, 1100 ],
  [ 1, 1111 ],    [ 10, 1 ],
  [ 10, 1100 ],   [ 10, 1111 ],
  [ 1100, 1 ],    [ 1100, 10 ],
  [ 1100, 1111 ], [ 1111, 1 ],
  [ 1111, 10 ],   [ 1111, 1100 ]
] */
