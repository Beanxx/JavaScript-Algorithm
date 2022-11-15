// 1110 더하기 사이클
// 2022.11.15(Tues)

const input = Number(require("fs").readFileSync("input.txt").toString());

let num = input; // 원본 input을 할당한 후, 추후에 break문 걸어주는 조건문에서 비교
let total = 0; // 10의 자리와 1의 자리 수를 더해서 저장해놓는 변수
let cycle = 0; // 사이클 길이

while (true) {
  let ten = parseInt(num / 10); // 10의 자리
  let one = num % 10; // 1의 자리
  total = ten + one;
  num = one * 10 + (total % 10); // num에 새로운 수 할당
  cycle++;

  if (input === num) break; // 입력한 수와 새로운 수와 같으면 break~!
}

console.log(cycle);
