// 2023.01.08(Sun)
// 해시 > 폰켓몬.js

// my way
function solution(nums) {
  let halfLength = nums.length / 2; // 선택할 폰켓몬 수
  nums = new Set(nums); // 중복되는 값을 제거한 객체

  // 선택할 수 있는 다른 종류 개수가 선택할 폰켓몬 수보다 적을 경우엔 종류의 개수를 return,
  // 선택할 폰켓몬 수가 종류의 개수보다 적을 경우엔 선택할 폰켓몬 수를 returns
  if (nums.size < halfLength) return nums.size;
  else return halfLength;
  // return nums.size < halfLength ? nums.size : halfLength;
}

// if문을 삼항조건연산을 통해 코드를 줄일 수 있다!
// new Set()으로 중복되는 값을 제거한 nums는 객체 형태가 된다 이는 length가 아닌 size를 통해 원소 개수를 구할 수 있음

console.log(solution([3, 1, 2, 3])); // 2
console.log(solution([3, 3, 3, 2, 2, 4])); // 3
console.log(solution([3, 3, 3, 2, 2, 2])); // 2
