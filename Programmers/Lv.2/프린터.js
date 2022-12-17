// 2022.12.17(Sat)
// 프린터(스택/큐).js

// [Failed Code]
// 무지성으로 for문 사용 방식 실패..
// 테스트케이스만 통과되고, 어디에서 실패가 되는지 이유를 알 수 없어서 다른 사람 풀이 참고 쓱-
function solution(priorities, location) {
  let arr = [];

  for (let i = 0; i < priorities.length; i++) {
    arr.push([priorities[i], i]);
  }

  for (let i = 0; i < arr.length; i++) {
    let arrValue = arr.map((el) => el[0]);
    let max = Math.max(...arrValue);

    if (max > arr[0][0]) {
      let shift = arr.shift();
      arr.push(shift);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i][1] === location) return i + 1;
  }
}

// other way [Success Code]
function solution(priorities, location) {
  let count = 0; // 몇번째로 인쇄되는지

  while (true) {
    let max = Math.max(...priorities); // 배열 요소 중 최대값 구하기
    let shift = priorities.shift(); // 맨 앞 요소 빼기

    // 뺀 요소가 최댓값이라면
    if (shift === max) {
      count++;

      // location 즉, index가 0 => 맨 앞에 위치하고 있다면
      if (location === 0) return count;
    } else {
      // 뺀 요소가 최대값이 아니라면
      priorities.push(shift); // 뺀 요소를 배열 맨 뒤에 추가
    }

    location--; // 순회할 때마다 location -1

    // location이 -1이 되면 배열의 맨 끝에 위치하도록
    if (location == -1) location = priorities.length - 1;
  }
}

console.log(solution([2, 1, 3, 2], 2)); // 1
console.log(solution([1, 1, 9, 1, 1, 1], 0)); // 5
