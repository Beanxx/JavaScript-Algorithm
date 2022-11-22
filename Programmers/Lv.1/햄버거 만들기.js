// 2022.11.22(Tues)
// 햄버거 만들기.js

// replace, slice 사용시 시간초과..
function solution(ingredient) {
  ingredient = ingredient.join("");
  let result = 0;
  let cook = "";

  for (let i = 0; i < ingredient.length; i++) {
    cook += ingredient[i];
    if (cook.slice(-4) === "1231") {
      // cook = cook.slice(0, -4);  <- time out,,
      // cook = cook.replace("1231", "");  <- time out,,
      result++;
    }
  }
  return result;
}

// 첨엔 replace 써서 풀었는데 시간 초과 ㅠ
// 그래서 다른 방법을 slice를 써서 풀었는데도 여전히 시간 초과가 났다,,
// 그래서 방법을 더 고민해보다가 stack으로 구현하는 방법으로 splice로 잘라내서 했더니 드뎌 pass...
// 요즘엔 시간초과로 문제를 통과 못하는 경우도 많은데 시간복잡도까지 고려해서 코드를 짜도록 노력해보잡,.

// PASS code
function solution(ingredient) {
  let result = 0;
  let stack = [];

  for (let el of ingredient) {
    stack.push(el);

    // slice(-4): 뒤에서 4개 원소 뽑아서 문자열로 변환
    if (stack.slice(-4).join("") == "1231") {
      stack.splice(-4); // 1231 포장한 재료는 잘라내기
      result++;
    }
  }
  return result;
}

console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1])); // 2
console.log(solution([1, 3, 2, 1, 2, 1, 3, 1, 2])); // 0
