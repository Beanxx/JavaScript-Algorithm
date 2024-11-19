// 복습완료💫(221106)
// 2022.10.12(Wed)

function solution(price) {
  let answer = 0;

  if (price >= 500000) answer = Math.floor(price * 0.8);
  else if (price >= 300000) answer = Math.floor(price * 0.9);
  else if (price >= 100000) answer = Math.floor(price * 0.95);
  else answer = price;

  return answer;
}

// 241119
function solution(price) {
  let discount = 0;

  if (price < 100000) discount = 0;
  else if (price < 300000) discount = 0.05;
  else if (price < 500000) discount = 0.1;
  else discount = 0.2;

  return parseInt(price * (1 - discount));
}

// 241119
function solution(price) {
  let discount = 0;

  if (price >= 500000) discount = 0.2;
  else if (price >= 300000) discount = 0.1;
  else if (price >= 100000) discount = 0.05;

  return parseInt(price * (1 - discount));
}
// 조건을 거꾸로 정의하면 조건문 하나 줄일 수 있음
