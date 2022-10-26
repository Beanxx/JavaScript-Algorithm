// 2022.10.26(Wed)

// my way
function solution(polynomial) {
  polynomial = polynomial.split(" + ");
  let answer = "";
  let x = 0;
  let n = 0;

  for (let i = 0; i < polynomial.length; i++) {
    if (polynomial[i].includes("x")) {
      if (polynomial[i] === "x") {
        x += 1;
      } else {
        x += Number(polynomial[i].slice(0, -1));
      }
    } else {
      n += Number(polynomial[i]);
    }
  }

  if (x === 1 && n === 0) {
    answer = `x`;
  } else if (x === 1) {
    answer = `x + ${n}`;
  } else if (x === 0) {
    answer = `${n}`;
  } else if (n === 0) {
    answer = `${x}x`;
  } else {
    answer = `${x}x + ${n}`;
  }

  return answer;
}

// 막 짰더니 코드가 넘 길어졌다.. 다 풀어놓고 통과가 안되서 보니까 x일 경우 1x으로 출력해서 일부가 통과가 안됐던거다,, 그래서 if문 남발해서 해결은 함..

// other way
function solution(polynomial) {
  const arr = polynomial.split(" + ");

  const xNum = arr
    .filter((n) => n.includes("x"))
    .map((n) => n.replace("x", "") || "1")
    .reduce((acc, cur) => acc + parseInt(cur), 0);

  const num = arr
    .filter((n) => !isNaN(n))
    .reduce((acc, cur) => acc + parseInt(cur), 0);

  let answer = [];
  // 1x인 경우 '' 출력해서 => x 나오도록 처리
  if (xNum) answer.push(`${xNum === 1 ? "" : xNum}x`);
  // num = 0인 경우 false이므로 아래 조건을 만족하지 못해서 + 0으로 아예 push가 안됨!
  if (num) answer.push(num);

  return answer.join(" + ");
}

// 확실히 fitler, map, reduce 메소드를 사용하니까 코드가 짧아졌다.
