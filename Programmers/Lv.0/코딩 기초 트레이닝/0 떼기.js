// 2024.02.27(Tues)

// my way
function solution(n_str) {
  return String(+n_str);
}

// e.g. 0010 -> 어떻게 연속적인 0을 없앨까 for문 쓰면서 고민했는데 문자열을 숫자로 변환하면 앞에 붙은 0들은 사라진다는 생각의 전환,,, wow

console.log(solution("0010")); //	"10"
console.log(solution("854020")); // "854020"
