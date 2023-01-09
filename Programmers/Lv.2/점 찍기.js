// 2023.01.09(Mon)
// 점 찍기.js

function solution(k, d) {
  let result = 0;
  for (let x = 0; x <= d; x += k) {
    const y = Math.sqrt(d ** 2 - x ** 2); // 원의 방정식을 이용해서 y 구하기
    // k만큼 떨어진 곳에 점을 찍을 수 있기 때문에
    // y / k 를 한 곳까지 까지 점 찌기
    // 만약 Math.floor(y / k)가 4고, k가 2라면 0, 2, 4에 점을 찍을 수 있으므로 +1을 해서 3개의 점을 찍을 수 있도록 하기
    result += Math.floor(y / k) + 1;
  }
  return result;
}

// 원의 방정식: x**2 + y**2 = d**2 이용해서 문제 풀기
// y**2 = d**2 - x**2
// y = Math.sqrt(d**2 - x**2)

console.log(solution(2, 4)); // 6
console.log(solution(1, 5)); // 26
