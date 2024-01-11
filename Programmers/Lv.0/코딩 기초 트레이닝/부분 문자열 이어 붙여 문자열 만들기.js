// 2024.01.11(Thurs)

// my way
function solution(my_strings, parts) {
  let result = "";

  for (let i = 0; i < my_strings.length; i++) {
    let startIdx = +parts[i][0];
    let endIdx = +parts[i][1];
    result += my_strings[i].slice(startIdx, endIdx + 1);
  }

  return result;
}

// other way 1
function solution(my_strings, parts) {
  return parts
    .map(([start, end], idx) => {
      return my_strings[idx].slice(start, end + 1);
    })
    .join("");
}

// .map ~ -> ["progr","am","mer","s"]
// join('') -> "programmers"

// other way 2
function solution(my_strings, parts) {
  return my_strings.reduce((result, str, idx) => {
    const [start, end] = parts[idx];
    return result + str.substring(start, end + 1);
  }, "");
}

// slice(start, end), substring(start, end) 기능 같음

console.log(
  solution(
    ["progressive", "hamburger", "hammer", "ahocorasick"],
    [
      [0, 4],
      [1, 2],
      [3, 5],
      [7, 7],
    ]
  )
); // "programmers"
