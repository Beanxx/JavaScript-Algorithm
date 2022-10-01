// 2022.10.01(Sat)
// Summer/Winter Coding(~2018)_Lv.1
// 예산.js

// my way
function solution(d, budget) {
  let result = 0;
  // 오름차순 정렬
  // [1, 3, 2, 5, 4] -> [1, 2, 3, 4, 5]
  d.sort((a, b) => a - b);

  for (let i = 0; i < d.length; i++) {
    budget -= d[i];
    if (budget >= 0) {
      result += 1;
    }
  }
  return result;
}

// 배열 내 원소들을 오름차순으로 정렬한 후에 budget에서 배열 d의 작은 원소들을 budget이 0보다 작아지기 전까지 차례대로 빼고
// 뺄 때마다 +1씩 해주는 식으로 풀면 된다.

// d.sort() 해도 테스트 케이스에선 잘 정렬되길래 이렇게 풀었더니 제출했을 때 실패가 와다다..
// 생각해보니까 d.sort()로 정렬했을 땐 숫자를 사전식으로 정렬해서 1, 100, 2 .. 요런 식으로 정렬이 되서 실패된둣,,
// d.sort((a, b) => a - b) 요렇게 정렬해서 1, 2, 100 .. 요런 식으로 숫자 오름차순 정렬이 된다.

// other way
function solution(d, budget) {
  return d
    .sort((a, b) => a - b)
    .reduce((count, price) => {
      return count + ((budget -= price) >= 0);
    }, 0);
}

// 아직도 reduce를 활용해서 문제를 풀어볼 생각도 안 하구 reduce로 문제 풀기 어렵다,,

console.log(solution([1, 3, 2, 5, 4], 9)); // 3
console.log(solution([2, 2, 3, 3], 10)); // 4
