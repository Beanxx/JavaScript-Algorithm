// 2022.09.23(Fri)
// 2022 KAKAO TECH INTERNSHIP
// Lv.1_성격 유형 검사하기.js

function solution(survey, choices) {
  const data = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };
  let result = "";

  for (let i = 0; i < choices.length; i++) {
    // 4(+0) 기준으로 왼쪽
    if (choices[i] < 4) {
      data[survey[i][0]] = data[survey[i][0]] + (4 - choices[i]);
    } else {
      // 4(+0) 기준으로 오른쪽
      data[survey[i][1]] = data[survey[i][1]] + (choices[i] - 4);
    }
  }

  if (data["R"] >= data["T"]) {
    result += "R";
  } else {
    result += "T";
  }

  if (data["C"] >= data["F"]) {
    result += "C";
  } else {
    result += "F";
  }

  if (data["J"] >= data["M"]) {
    result += "J";
  } else {
    result += "M";
  }

  if (data["A"] >= data["N"]) {
    result += "A";
  } else {
    result += "N";
  }

  return result;
}

//   score: 3 2 1 (0) 1 2 3
// choices: 1 2 3 (4) 5 6 7
// choices 4를 기준으로 왼쪽은 4-choices[i] = score, 오른쪽은 choices[i]-4=score !!

// choices[i] => 1(+3), 2(+2), 3(+1), 4(+0), 5(+1), 6(+2), 7(+3)
// choices[i] = 4를 기준으로 왼쪽과 오른쪽의 유형이 달라지게 됨

// survey[0]가 'AN'이면 survey[0][0] = 'A', survey[0][1] = 'N'

console.log(solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5])); // TCMA
console.log(solution(["TR", "RT", "TR"], [7, 1, 3])); // RCJA
