// 복습완료💫(221106)
// 2022.10.25(Tues)

function solution(array) {
  return [...array.join("")].filter((el) => el === "7").length;
}

console.log([...array.join("")]); // [ '7', '7', '7', '1', '7' ]
console.log([array.join("")]); // 	[ '77717' ]
// spread연산자로 array를 풀어준 후, join('')을 해야 1자리 숫자를 원소로 갖는 배열을 만들 수 있다.

console.log(solution([7, 77, 17])); // 4
