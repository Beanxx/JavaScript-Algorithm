// 2022.10.27(Thurs)

function solution(spell, dic) {
  spell = spell.sort().join("");

  for (let el of dic) {
    el = el.split("").sort().join("");
    if (el === spell) {
      return 1;
    }
  }
  return 2;
}

// other way
function solution(spell, dic) {
  return dic
    .map((v) => v.split("").sort().join(""))
    .indexOf(spell.sort().join("")) > -1
    ? 1
    : 2;
}
