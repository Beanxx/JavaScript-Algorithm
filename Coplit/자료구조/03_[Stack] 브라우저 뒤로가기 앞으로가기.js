// 03_[Stack] 브라우저 뒤로가기 앞으로가기.js
// 2022.08.12(Fri)

function browserStack(actions, start) {
  // 주의사항1 - start 인자가 string이 아닌 것들은 전부 false로 리턴합니다.
  if (typeof start !== "string") {
    return false;
  }

  let prevStack = []; // 앞으로 가기 스택 변수 설정
  let nextStack = []; // 뒤로 가기 스택 변수 설정
  let current = start;

  for (let i = 0; i < actions.length; i++) {
    // 만약 actions 배열의 요소가 -1(뒤로가기 클릭) && prevStack의 길이가 0이 아닐 때(이전으로 돌아가는 페이지가 있다면)
    if (actions[i] === -1 && prevStack.length !== 0) {
      // prevStack에서 pop한 요소를 prevPage로 할당
      let prevPage = prevStack.pop();

      // nextStack에 current를 삽입
      nextStack.push(current);

      // current에 prevPage를 할당
      current = prevPage;

      // 만약 actions 배열의 요소가 1이고(앞으로가기 클릭) && nextStack의 길이가 0이 아닐 때(다음으로 넘어가는 페이지가 있다면)
    } else if (actions[i] === 1 && nextStack.length !== 0) {
      // nextStack에서 pop한 요소를 nextPage로 할당
      let nextPage = nextStack.pop();

      // prevStack에 current를 삽입
      prevStack.push(current);

      // current에 nextPage를 할당
      current = nextPage;

      // 만약 actions 배열의 요소가 알파벳이라면 (새로운 페이지라면)
    } else if (typeof actions[i] === "string") {
      // prevStack에 current를 삽입
      prevStack.push(current);

      // current에 현재 알파벳 요소 할당
      current = actions[i];

      // 새로운 페이지는 앞으로 갈 수 없기 때문에 nextStack 비우기
      nextStack = [];
    }
  }

  // 배열에 prevStack, current, nextStack을 순서대로 담아 반환
  return [prevStack, current, nextStack];
}

console.log(browserStack(["B", "C", -1, "D", "A", -1, 1, -1, -1], "A"));
// [ [ 'A' ], 'B', [ 'A', 'D' ] ]

console.log(
  browserStack(
    ["B", -1, "B", "A", "C", -1, -1, "D", -1, 1, "E", -1, -1, 1],
    "A"
  )
);
// [ [ 'A', 'B' ], 'D', [ 'E' ] ]
