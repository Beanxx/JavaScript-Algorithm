// 복습완료💫(221116)
// 2022.10.26(Wed)

// my way
function solution(polynomial) {
  polynomial = polynomial.split(" + "); // ['6x', '14x', '4']

  let answer = "";
  let x = 0; // 일차항
  let n = 0; // 상수항

  for (let el of polynomial) {
    // x를 포함하고 있으면 일차항에 해당
    if (el.includes("x")) {
      if (el === "x")
        x++; // 그냥 x이면 1x과 같은 것이므로 일차항을 1 증가 시켜준다.
      else x += Number(el.slice(0, -1)); // x가 아니면 마지막 문자열인 x를 제외한 앞의 숫자만 잘라서 더하기
      // 6x -> 6만 잘라서 x 변수에 더하기
    } else {
      // x를 포함하고 있지 않으면 상수항에 해당
      n += Number(el);
    }
  }

  if (x === 1 && n === 0)
    answer = `x`; // 일차항만 존재하면서 숫자가 없는 그냥 x인 경우
  else if (x === 1)
    answer = `x + ${n}`; // 일차항, 상수항 모두 존재하면서 일차항은 그냥 x인 경우
  else if (x === 0) answer = `${n}`; // 상수항만 존재하는 경우
  else if (n === 0) answer = `${x}x`; // 일차항만 존재하는 경우
  else answer = `${x}x + ${n}`;

  return answer;
}

// 다 풀어놓고 통과가 안되서 보니까 x일 경우 1x으로 출력해서 일부가 통과가 안됐던거다,, 그래서 if문 남발해서 해결은 함..
// + polynomial[i] => el, if~else문의 중괄호 생략가능한 부분은 생략하니까 코드가 전보다 꽤 짧아짐!

// other way
function solution(polynomial) {
  const arr = polynomial.split(" + ");

  // 일차항 구하기
  const xNum = arr
    .filter((n) => n.includes("x"))
    .map((n) => n.replace("x", "") || "1")
    .reduce((acc, cur) => acc + Number(cur), 0);
  // x를 포함하는 원소만 구한 후, 만약 6x라면 x를 빈문자열로 바꾸고(6x->6),
  // 그냥 'x'의 경우는 위의 조건을 통과하면 '' 빈문자열(false)이 되므로 이럴 경우엔 or 연산자를 통해 '1'로 처리해준다!
  // map까지 구현했을 때 ['6', '14'] -> 모든 원소들을 reduce를 통해 더해주기 => xNum = 6+14 = 20

  // 상수항 구하기
  const num = arr
    .filter((n) => !isNaN(n))
    .reduce((acc, cur) => acc + Number(cur), 0);
  // isNaN(n)가 false라는 것은 숫자를 뜻하므로 !isNaN(n) 또한 숫자를 뜻한다. => 즉, 상수항을 의미

  let answer = [];
  // 1x인 경우 '' 출력해서 => x 나오도록 처리
  if (xNum) answer.push(`${xNum === 1 ? "" : xNum}x`);
  // num = 0인 경우 false이므로 아래 조건을 만족하지 못해서 + 0으로 아예 push가 안됨!
  if (num) answer.push(num);

  return answer.join(" + "); // ' + '로 원소들을 하나의 문자열로 합쳐주기
}

// fitler, map, reduce 메소드를 사용하니까 코드가 짧아졌다.

console.log(solution("6x + 14x + 4")); // "20x + 4"
