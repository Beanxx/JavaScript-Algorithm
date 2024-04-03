// 2024.04.03(Wed)

// my way
function solution(numLog) {
  let result = "";

  for (let i = 0; i < numLog.length - 1; i++) {
    if (numLog[i] + 1 === numLog[i + 1]) result += "w";
    else if (numLog[i] - 1 === numLog[i + 1]) result += "s";
    else if (numLog[i] + 10 === numLog[i + 1]) result += "d";
    else result += "a";
  }

  return result;
}

// -------------------------------------------

// other way
function solution(numLog) {
  const convert = { 1: "w", "-1": "s", 10: "d", "-10": "a" };

  const calcArr = numLog.slice(1).map((v, i) => convert[v - numLog[i]]); // ['w', 's', 'd', 'a', 'w', 's', 'd', 'a', 's', 's', 'w']

  return calcArr.join("");
}

// .slice(1): index 1 부터 배열 끝까지
// numLog.slice(1)를 통해 배열의 index 0 원소를 잘라내면 원본 배열과 인덱스 하나씩 차이나게 되는데 이를 이용한 방법 'O'

console.log(solution([0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1])); // "wsdawsdassw"
