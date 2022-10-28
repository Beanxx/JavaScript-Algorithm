// 2022.10.28(Fri)

function solution(n) {
  let arr = [];
  let count = 1; // arr 배열에 들어갈 원소 숫자
  let i = 0; // arr 배열의 index

  while (arr.length < n) {
    if (count % 3 !== 0 && !String(count).includes("3")) {
      arr.push(count);
    }
    count++;
    i++;
  }

  return arr.slice(-1)[0];
}

// 생각보다 로직 생각해서 구현하는데 오래 걸렸다,, 한 문제 푸는데 넘 오래걸려서 코테도 더 빡시게 공부해야할듯 ㅠ
// 3이 포함되지 않는 조건과 3으로 나눠 떨어지지 않는 조건을 or연산자(||)로 처리하면 될거라고 생각했는데
// 계속 통과가 안되서 생각해보니까 and연산자(&&)로 처리해야 두 가지 조건 모두 배열에 원소로 들어가지 않는것,,
// 생각을 더 하고 문제를 풀쟈..
