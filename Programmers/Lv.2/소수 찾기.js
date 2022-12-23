// 2022.12.23(Fri)
// 소수 찾기(완전 탐색).js

function solution(elements) {
  let result = [];
  elements = elements.split(""); // [ '1', '7' ]

  // 소수 판별 함수
  const isPrime = (n) => {
    if (n === 1) return false; // 1은 소수가 아님
    if (n === 2) return true; // 2는 소수임

    // 2로 나눠지는 수 즉, 2를 제외한 모든 짝수는 소수가 아님
    if (n % 2 === 0) return false;

    // 위에서 짝수로 나눠지는 경우를 제외했으므로 i는 3부터 홀수만 판별!
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
      // 어떠한 수 i로 나눠진다는 것은 소수가 아님을 의미
      if (n % i === 0) return false;
    }
    // 위의 조건들을 만족하지 않으면 소수라는 것이므로 true 반환
    return true;
  };

  // 순열을 생성하는 재귀 함수
  const permutation = (arr, n, pick) => {
    // 재귀 멈출 조건 (뽑을 개수가 0이 되면 stop!)
    if (n === 0) return;

    for (let i = 0; i < arr.length; i++) {
      // 뽑아서 만들 수 있는 순열 결과값
      const newNum = pick + arr[i]; // 1 | 17 | 7 | 71
      const copyArr = [...arr]; // 원본 값 유지를 위해 배열 복사
      copyArr.splice(i, 1); // index i에 위치한 값 하나 제거

      // result 배열에 값이 이미 존재하지 않으면서 소수이면 result 배열에 newNum을 push
      if (!result.includes(Number(newNum)) && isPrime(Number(newNum))) {
        result.push(Number(newNum));
      }

      // 재귀함수 실행
      permutation(copyArr, n - 1, newNum);
    }
  };

  permutation(elements, elements.length, ""); // 재귀함수의 초기값 설정
  return result.length;
}

// 순열 생성 함수와 소수 판별 함수를 잘 섞어서 답을 구하는 과정이 넘 어려웠다...ㅜ

console.log(solution("17")); // 3
console.log(solution("011")); // 2
