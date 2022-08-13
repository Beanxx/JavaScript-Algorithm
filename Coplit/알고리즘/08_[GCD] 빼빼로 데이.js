// [GCD] 빼빼로 데이.js
// 2022.08.11(Thurs)

function divideChocolateStick(M, N) {
  // 유클리드 호제법을 이용하여 최대공약수 구하기
  const gcd = (a, b) => {
    return a % b ? gcd(b, a % b) : b;
  };

  let result = [];
  let num = gcd(M, N);
  let sqrt = Math.floor(Math.sqrt(num));

  for (let i = 1; i <= sqrt; i++) {
    if (num % i === 0) {
      result.push([i, M / i, N / i]);

      // num(최대공약수)의 제곱근 값이 i보다 클 경우 (제곱근이 아닐 경우)
      if (i < Math.sqrt(num)) {
        // 최대공약수를 제곱근이 아닌 수로 나누면 제곱근보다 큰 약수를 구할 수 있음
        let a = num / i;
        result.push([a, M / a, N / a]);
      }
    }
  }

  // 최대공약수의 약수를 오름차순으로 정렬
  result.sort((a, b) => a[0] - b[0]);
  return result;
}

console.log(divideChocolateStick(4, 8));
// [ [ 1, 4, 8 ], [ 2, 2, 4 ], [ 4, 1, 2 ] ]
