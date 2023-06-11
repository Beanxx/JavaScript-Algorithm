// 2023.06.11(Sun)

function solution(strArr) {
  let result = [];

  for (let i = 0; i < strArr.length; i++) {
    if (i % 2 === 1) {
      result.push(strArr[i].toUpperCase());
    } else {
      result.push(strArr[i].toLowerCase());
    }
  }

  return result;
}

console.log(solution(["AAA", "BBB", "CCC", "DDD"])); // ["aaa","BBB","ccc","DDD"]
