// 복습완료💫(221116)
// 2022.10.15(Sat)

// my way
function solution(emergency) {
  let result = [];

  // emergency 배열 원소 개수만큼 result 배열 초기값을 0으로 채워주기
  // 이 작업을 안하니까 index 부분에서 뭔가 꼬여서 마지막 테스트가 통과가 안됐다..
  for (let el of emergency) {
    result.push(0);
  }

  // 각 원소들의 원래 index 위치를 객체의 값으로 저장해놓기
  let idxObj = {};
  for (let i = 0; i < emergency.length; i++) {
    idxObj[emergency[i]] = i;
  }
  // idxObj: 	{ '3': 0, '24': 2, '76': 1 }

  // 각 원소들의 우선순위를 담는 객체 생성
  let obj = {};
  let arr = [...emergency].sort((a, b) => b - a); // [ 76, 24, 3 ]

  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = i + 1; // 앞에서부터 차례대로 우선순위 매기기
  }
  // obj: { '3': 3, '24': 2, '76': 1 }

  // 위의 두 객체의 key를 비교해서 같은 key에 해당하는 값들을 가져옴
  // idxObj 객체의 value는 원소를 넣을 index
  // obj 객체의 value는 해당하는 index에 넣을 원소를 뜻함
  for (idx in idxObj) {
    for (el in obj) {
      // idx, el는 key를 의미
      if (el === idx) {
        // idxObj[idx]: 0
        // obj[el]: 3
        result.splice(idxObj[idx], 1, obj[el]);
        // idxObj[idx]가 의미하는 index에 위치한 초기값 0 값 하나를 삭제하고, 그 위치에 obj[el]가 의미하는 우선순위 값을 추가
      }
    }
  }

  return result;
}

// 난 생각보다 푸는데 좀 걸렸고, 코드가 되게 길어졌는데 2줄 안에 구현할 수가 있다니.. wow

// 241120
function solution(emergency) {
  let sortedArr = [...emergency].sort((a, b) => b - a);

  return emergency.map((el) => sortedArr.indexOf(el) + 1);
}

console.log(solution([3, 76, 24])); // [3, 1, 2]
console.log(solution([1, 2, 3, 4, 5, 6, 7])); // [7, 6, 5, 4, 3, 2, 1]
console.log(solution([30, 10, 23, 6, 100])); // [2, 4, 3, 5, 1]
