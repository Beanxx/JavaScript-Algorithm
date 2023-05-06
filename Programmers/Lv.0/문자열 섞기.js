// 2023.05.06(Sat)

function solution(str1, str2) {
  let result = "";
  for (let i = 0; i < str1.length; i++) {
    result += str1[i] + str2[i];
  }
  return result;
}

// 분명 간단한 문젠데 방법이 바로 떠오르진 않았었다,,
