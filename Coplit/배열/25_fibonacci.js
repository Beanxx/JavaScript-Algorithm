// first try - 2022.05.10(Tues)
// second try - 2022.06.30(Thurs)

// Q: 수(num)를 입력받아 num번째까지 총 num + 1개의 피보나치 수열을 리턴해야 합니다.

// 0번째 피보나치 수는 0이고, 1번째 피보나치 수는 1입니다.
// 그 다음 2번째 피보나치 수부터는 바로 직전의 두 피보나치 수의 합으로 정의합니다.
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...

// * 주의사항 *
// 반복문(for)문 사용
// 피보나치 수열은 0번부터 시작

// my way
function fibonacci(num) {
  // TODO: 여기에 코드를 작성합니다.
  let arr = [0, 1];

  if (num === 0) {
    return [0];
  }

  if (num === 1) {
    return [0, 1];
  }

  for (let i = 2; i <= num; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr;
}

// -------------------------------------

// other way
function fibonacci(num) {
  let fibNum = [];

  for (let i = 0; i <= num; i++) {
    if (i === 0) {
      fibNum.push(0);
    } else if (i === 1) {
      fibNum.push(1);
    } else {
      fibNum.push(fibNum[i - 2] + fibNum[i - 1]);
    }
  }

  return fibNum;
}

// 나는 0, 1일 때에 배열에 값을 하드코딩으로 꾸역 넣어서 처리해줬는데
// reference code에선 for문에 0,1를 for문 안에서 push 처리해줘서 더 굿잡 코드!
