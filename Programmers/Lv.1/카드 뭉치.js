// 2023.04.01(Sat)
// Lv.1_카드 뭉치.js

function solution(cards1, cards2, goal) {
  for (let el of goal) {
    if (cards1.indexOf(el) === 0) {
      cards1.shift(); // 배열 맨 앞 원소와 일치하면 맨 앞 원소 제거
    } else if (cards2.indexOf(el) === 0) {
      cards2.shift();
    } else {
      return "No";
    }
  }
  return "Yes";
}

// 배열 원소를 맨 앞에서 부터 확인해서 goal의 원소와 비교한다
// 비교해서 같으면 각 cards1, cards2 배열에서 제거하고 for문을 다 순회하면 반복문을 빠져나와 return "Yes"!

console.log(
  solution(
    ["i", "drink", "water"],
    ["want", "to"],
    ["i", "want", "to", "drink", "water"]
  )
); // "Yes"

console.log(
  solution(
    ["i", "water", "drink"],
    ["want", "to"],
    ["i", "want", "to", "drink", "water"]
  )
); // "No"
