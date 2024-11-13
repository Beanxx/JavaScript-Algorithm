// 2024.11.13(Wed)

function solution(a, b, c, d) {
  const obj = [a, b, c, d].reduce((acc, cur) => {
    acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
    return acc;
  }, {}); // { '2': 2, '5': 1, '6': 1 }

  // 숫자가 등장한 횟수 기준으로 내림차순 정렬
  const val = Object.keys(obj).sort((a, b) => obj[b] - obj[a]); // [ '2', '5', '6' ]

  const p = Number(val[0]);
  const q = Number(val[1]);
  const r = Number(val[2]);

  // 숫자 4개가 모두 같은 경우
  if (obj[p] === 4) return 1111 * p;

  // 숫자 3개가 같은 경우
  if (obj[p] === 3) return Math.pow(p * 10 + q, 2); // Math.pow(): 제곱 함수

  // 숫자 2개씩 같은 경우
  if (obj[p] === 2 && obj[q] === 2) return (p + q) * Math.abs(p - q); // Math.abs(): 절대값 반환

  // 숫자 2개만 같은 경우
  if (obj[p] === 2) return q * r;

  // 모두 다른 경우
  return p;
  // obj에서 key는 삽입 순서에 관계없이 오름차순으로 표시된다 -> 그러므로 마지막에 따로 정렬할 필요 없이 0번째 인덱스 값 반환하면 됨
}

console.log(solution(2, 2, 2, 2)); //	2222
console.log(solution(4, 1, 4, 4)); // 1681
console.log(solution(6, 3, 3, 6)); // 27
console.log(solution(2, 5, 2, 6)); // 30
console.log(solution(6, 4, 2, 5)); // 2
