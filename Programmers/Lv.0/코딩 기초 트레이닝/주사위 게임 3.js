// 2024.11.13(Wed)

// my way
function solution(a, b, c, d) {
  const obj = [a, b, c, d].reduce((acc, cur) => {
    acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
    return acc;
  }, {});

  // 나온 횟수 내림차순 정렬
  const val = Object.keys(obj).sort((a, b) => obj[b] - obj[a]);

  // 주사위값이 4개가 같은 경우
  if (obj[val[0]] === 4) return Number(val[0]) * 1111;

  if (obj[val[0]] === 3) {
    return Math.pow(Number(val[0]) * 10 + Number(val[1]), 2);
  }

  if (obj[val[0]] === 2 && obj[val[1]] === 2) {
    return (
      (Number(val[0]) + Number(val[1])) *
      Math.abs(Number(val[0]) - Number(val[1]))
    );
  }

  if (obj[val[0]] === 2) return Number(val[1]) * Number(val[2]);

  return Number(val[0]);
}

console.log(solution(2, 2, 2, 2)); //	2222
console.log(solution(4, 1, 4, 4)); // 1681
console.log(solution(6, 3, 3, 6)); // 27
console.log(solution(2, 5, 2, 6)); // 30
console.log(solution(6, 4, 2, 5)); // 2
