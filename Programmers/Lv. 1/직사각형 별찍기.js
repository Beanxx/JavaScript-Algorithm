// 2022.06.17(Fri)
// 직사각형 별찍기.js

// 주어진 code
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);

  let result = "";
  // 줄 수
  for (let i = 0; i < b; i++) {
    // 한 줄 안에 들어가는 * 반복
    for (let j = 0; j < a; j++) {
      result += "*";
    }
    result += "\n"; // 한 줄에 *을 모두 찍으면 줄바꿈
  }
  // 직접 *을 찍어야 하므로 return 대신 console.log()
  console.log(result);

  // other way
  console.log(("*".repeat(a) + `\n`).repeat(b));
  // repeat() 사용하면 한 줄에 초간단하게 구현 가능... 댑악
});

// ex. (a, b) = (5, 3)
// *****
// *****
// *****
// 위와 같이 가로에 5개인 별이 3줄 찍혀야 함
// 큰 반복문은 3번 돌아야하며, 그 안의 이중반복문으로 한줄에 5번씩 돌아야함.
// 즉, 큰 반복문은 a번, 그 안의 이중 반복문은 b번 반복

// 원래 주어진 code가 너무 생소한 형식으로 이게 뭐지 싶었는데 그냥 안에다가 코드 작성하면 됐다.
// 간단할 줄 알았는데 나에겐 생각보다 좀 생각을 해야 했던 문제였다,,
