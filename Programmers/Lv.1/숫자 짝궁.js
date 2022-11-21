// 2022.11.21(Mon)
// 숫자 짝궁.js

// 시간초과로 통과 못한 풀이
function solution(X, Y) {
  let result = "";

  for (let i = 0; i < X.length; i++) {
    if (Y.includes(X[i])) {
      let temp = X[i];
      result += X[i];
      X = X.replace(X[i], "");
      Y = Y.replace(temp, "");
    }
  }

  // 무슨 이유인지는 모르겠지만 위의 반복문으로는 중복되는 숫자가 하나 더 있는데 거기까지 순회를 돌지 않는다,,
  // 그래서 반복문을 한번 더 작성해서 해결해줌
  // But, 시간 초과로 테스트 통과 못함ㅜ
  for (let j = 0; j < Y.length; j++) {
    if (X.includes(Y[j])) {
      let temp = Y[j];
      result += Y[j];
      Y = Y.replace(Y[j], "");
      X = X.replace(temp, "");
    }
  }

  if (result.length === 0) return "-1";
  if (result == 0) return "0";

  return [...result].sort((a, b) => b - a).join("");
}

// 객체로 접근 => PASS
function solution(X, Y) {
  let result = [];
  let obj = {};

  for (let el of X) {
    // obj에 이미 존재하면 값 +1, 없으면 값으로 1 할당
    if (el in obj) obj[el]++;
    else obj[el] = 1;
  }
  // obj: { '1': 2, '2': 2, '3': 1 }

  for (let el of Y) {
    // 값이 양수이면 이미 X에 존재한다는 의미이므로 el는 X,Y 공통으로 나타나는 수임!
    // 그러므로 result에 el 수를 push!
    // 중복되는 숫자도 모든 카운트 하므로 push한 후에 값 -1해주기
    // -1한 후에도 값이 양수라는 것은 또 존재한다는 것이므로 위와 같은 과정 반복해주기
    if (obj[el] > 0) {
      result.push(el);
      obj[el]--;
    }
  }

  // 만들 수 있는 가장 큰 정수로 만들기 (숫자 내림차순)
  result = result.sort((a, b) => b - a).join("");

  if (result.length === 0) return "-1";
  // result = 00 인 경우도 느슨한 비교를 했을 땐 0으로 인식하므로 == 으로 비교해주기!
  if (result == 0) return "0";

  return result;
}

// other way
function solution(X, Y) {
  let answer = "";
  X = [...X]; // [ '1', '2', '3', '2', '1' ]
  Y = [...Y]; // [ '4', '2', '5', '3', '1' ]

  // X, Y를 구성하는 수의 범위는 0~9이므로 아래와 같이 범위 설정
  for (let i = 0; i < 10; i++) {
    // 만약 i가 1일 때, X엔 2번, Y엔 1번 존재
    const curX = X.filter((a) => Number(a) === i).length; // 2
    const curY = Y.filter((a) => Number(a) === i).length; // 1
    // 즉, curX, curY 중에서 더 작은 값이 X, Y에서 1이 중복되는 횟수이므로
    // i를 curX, curY 중에서 더 작은 값만큼 반복해서 answer에 더해준다.
    answer += String(i).repeat(Math.min(curX, curY)); // => i = 1를 1번 반복 => 1
  }
  if (answer === "") return "-1";
  if (Number(answer) === 0) return "0";

  return [...answer].sort((a, b) => b - a).join("");
}

console.log(solution("12321", "42531")); // "321"
// console.log(solution("100", "2345")); // "-1"
