// 복습완료💫(221106)
// 2022.10.27(Thurs)

function solution(spell, dic) {
  spell = spell.sort().join(""); // 'dxz'

  for (let el of dic) {
    el = el.split("").sort().join(""); // 'def' 'dww', 'dxz', 'aelovw'
    if (el === spell) return 1;
  }
  return 2;
}

// other way
function solution(spell, dic) {
  return dic
    .map((el) => el.split("").sort().join(""))
    .indexOf(spell.sort().join("")) !== -1
    ? 1
    : 2;
}

console.log(solution(["z", "d", "x"], ["def", "dww", "dzx", "loveaw"])); // 1
