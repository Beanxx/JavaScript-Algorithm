// 241124 다시 풀어야 하는 이유: chatGPT 도움을 받아서 푼 문제,, 다시 무조건 풀어보기
// 복습완료💫(221106)
// 2022.10.27(Thurs)

function solution(spell, dic) {
  spell = spell.sort().join(""); // 'dxz'

  for (let el of dic) {
    el = [...el].sort().join(""); // 'def' 'dww', 'dxz', 'aelovw'
    if (el === spell) return 1;
  }
  return 2;
}

// 241124
function solution(spell, dic) {
  let total = 0;

  for (let el of dic) {
    if (spell.every((char) => new RegExp(char).test(el))) {
      total++;
    }
  }

  return total === 0 ? 2 : 1;
}

// other way 1
function solution(spell, dic) {
  return dic
    .map((el) => el.split("").sort().join(""))
    .indexOf(spell.sort().join("")) !== -1
    ? 1
    : 2;
}

// other way 2
function solution(spell, dic) {
  return dic.filter((v) => spell.every((c) => v.includes(c))).length ? 1 : 2;
}

console.log(solution(["z", "d", "x"], ["def", "dww", "dzx", "loveaw"])); // 1
