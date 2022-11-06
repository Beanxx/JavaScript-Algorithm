// 복습완료💫(221106)
// 202.10.14(Fri)

// my way
function solution(my_string, letter) {
  my_string = my_string.split("");

  for (let i = 0; i < my_string.length; i++) {
    if (my_string[i] === letter) {
      my_string.splice(i, 1); // 제거
      i--; // 제거하면 뒤에 있는 문자들의 index가 앞으로 하나씩 땡겨져야 하므로 i--
    }
  }
  return my_string.join(""); // 다시 문자열로 합쳐주기
}

// 첨에 i--를 따로 안해줘서 제출하면 테스트 통과가 안됐었다,,
// 이유는 위에서 특정 원소를 제거하면 index가 하나씩 앞으로 땡겨지니까 i를 하나 줄여줘야 했던 것!

// --------------------------------------------------------------------------

// other way
function solution(my_string, letter) {
  return my_string.split(letter).join("");

  // my_string.split(letter) -> ['', 'C', 'dbe']
  // ['', 'C', 'dbe'].join('') -> 'Cdbe'
}

// split(letter)하면 letter를 기준으로 문자열을 나누는거니까 letter가 사라지게 된다 대박,,
// 이 후에 다시 문자열로 합쳐주면 한 줄에 끄읏 wow

console.log(solution("BCBdbe", "B")); // "Cdbe"
