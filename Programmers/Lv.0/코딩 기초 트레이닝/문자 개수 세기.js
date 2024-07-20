// 2024.07.20(Sat)

// my way 1
function solution(my_string) {
  let result = Array(52).fill(0);

  for (let el of my_string) {
    const idx = el.charCodeAt();

    if (idx < 96) result[idx - 65] += 1;
    else result[idx - 71] += 1;
  }

  return result;
}

// my way 2
function solution(my_string) {
  let result = Array(52).fill(0);

  for (const el of my_string) {
    const ascii = el.charCodeAt();
    const idx = ascii < 96 ? 65 : 71;

    result[ascii - idx]++;
  }

  return result;
}

// A ~ Z : ASCII 65 ~ 90
// a ~ z : ASCII 97 ~ 122

// -----------------------------------------------------

// other way
function solution(my_string) {
  return [...my_string].reduce((acc, cur) => {
    acc[cur.charCodeAt() - (cur === cur.toLowerCase() ? 71 : 65)]++;
    return acc;
  }, Array(52).fill(0));
}

console.log(solution("Programmers")); // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 2, 0, 1, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0]
