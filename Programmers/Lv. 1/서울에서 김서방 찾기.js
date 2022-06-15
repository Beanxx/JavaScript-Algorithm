// 2022.06.15(Wed)
// 서울에서 김서방 찾기.js

// my way
function solution(seoul) {
  for (let i = 0; i < seoul.length; i++) {
    if (seoul[i] === "Kim") {
      return `김서방은 ${i}에 있다`;
    }
  }
}

// other way
function solution(seoul) {
  const idx = seoul.indexOf("Kim");
  return `김서방은 ${idx}에 있다`;
}

// 다른 풀이를 보니까 for문과 if문 없이도 indexOf()를 통해
// 'Kim'이 위치한 index를 알 수 있으니 더 간단하게 구현 가능함!
