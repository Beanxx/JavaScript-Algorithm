// 2024.06.19(Wed)

// my way
function solution(my_string, indices) {
  const result = my_string.split("");

  for (let idx of indices) {
    result.splice(idx, 1, "*");
  }

  const res = result.filter((el) => el !== "*");

  return res.join("");
}

// 원래 좀 더 깔끔하게 짜고 싶었지만 indices에서 해당하는 배열 원소를 하나씩 my_string에서 바로바로 빼다 보니까 index가 계속해서 달라져서 기존 index를 유지하는 방법이 필요했다
// 그래서 splice에 filter, join까지 써버린 좀 더러운 코드,,

// -----------------------------------------------------------------------------------------------------------

// other way 1
function solution(my_string, indices) {
  let result = "";

  for (let i = 0; i < my_string.length; i++) {
    if (!indices.includes(i)) {
      result += my_string[i];
    }
  }

  return result;
}

// 나와 반대로 접근한 풀이법!
// indices 즉, my_string 문자열 내에서 제거해야 할 index가 들어있는 배열인 indices에 my_string 문자열 내 문자가 포함되는지를 판단하고
// 만약 포함되지 않는다면 제거하지 않을 문자이니까 result가 추가하는 방법!

// other way 2
function solution(my_string, indices) {
  return [...my_string].filter((v, i) => !indices.includes(i)).join("");
}

// 위의 방법과 비슷하지만 filter를 사용하여 굳이 for문을 굳이 쓰지 않아도 되는 한줄 코드!

console.log(solution("apporoograpemmemprs", [1, 16, 6, 15, 0, 10, 11, 3])); // 	"programmers"
