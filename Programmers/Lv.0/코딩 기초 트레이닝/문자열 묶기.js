// 2024.07.05(Fri)

// my way
function solution(strArr) {
  const obj = {};

  // 배열 내 각 원소의 길이 출력
  const strLengthArr = strArr.map((el) => el.length); // [1, 2, 1, 3, 2]

  for (let num of strLengthArr) {
    if (obj[num]) obj[num]++;
    else obj[num] = 1;
  }

  // obj: { '1': 2, '2': 2, '3': 1 }

  const values = Object.values(obj); // [2, 2, 1] <- value 값만 배열 원소로 뽑아내기
  const maxValue = Math.max(...values); // value 중에 가장 큰 값

  return maxValue;
}

// ------------------------------------------------------------------------------

// other way 1
function solution(strArr) {
  const map = new Map(); // key-value 쌍인 집합
  // map : Map(0) {}

  for (const str of strArr) {
    // map.set('a', 1) -> key, value 순으로 삽입해줌 ->  {'a': 1}
    map.set(str.length, (map.get(str.length) || 0) + 1);
  }

  return Math.max(...map.values());
  // e.g. Math.max(1, 2, 3) -> 3
}

// other way 2
function solution(strArr) {
  // 문제 제한사항에 strArr 원소의 최대 길이가 30으로 지정되어 있으므로 idx 30까지 0으로 채워놓기
  const counter = Array(31).fill(0);

  // 만약 위의 제한사항이 존재하지 않는다면? -> 해당 방법은 fail일 수도 있으므로 하단 코드를 추가해서 strArr 원소 최대 길이를 활용하면 됨!
  // const strLengthArr = strArr.map((el) => el.length);
  // const strMaxLength = Math.max(...strLengthArr);
  // Array(strMaxLength +1).fill(0);

  for (const str of strArr) {
    counter[str.length]++;
  }

  return Math.max(...counter);
}

console.log(solution(["a", "bc", "d", "efg", "hi"])); // 2
