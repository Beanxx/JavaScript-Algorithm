// 2023.05.06(Sat)

function solution(arr) {
  // 젤 간단한 방법!
  return arr.join("");

  // reduce를 활용한 방법도 있움
  return arr.reduce((acc, cur) => acc + cur);
}

// ["a", "b", "c"] => "abc"
