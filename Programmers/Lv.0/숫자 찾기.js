// 2022.10.24(Mon)

// my way
function solution(num, k) {
  num = String(num)
    .split("")
    .map((el) => Number(el));

  let answer = num.indexOf(k) + 1;

  if (answer === 0) {
    return -1;
  }

  return answer;
}

// other way
function solution(num, k) {
  return (
    num
      .toString()
      .split("")
      .map((el) => Number(el))
      .indexOf(k) + 1 || -1
  );
}

// 내가 푼 방법도 유사하지만 -1 처리를 한번에 해줘서 더 간결쓰
