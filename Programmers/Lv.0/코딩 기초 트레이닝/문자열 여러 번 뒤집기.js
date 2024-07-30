// 2024.07.30(Tues)

// my way
function solution(my_string, queries) {
  let splitStr = my_string.split("");

  for (let i = 0; i < queries.length; i++) {
    const [first, second] = queries[i];
    let reverseStr = splitStr.slice(first, second + 1).reverse();

    splitStr.splice(first, second - first + 1, ...reverseStr);
  }

  return splitStr.join("");
}

// ------------------------------------------------------------------

// other way
function solution(my_string, queries) {
  let str = my_string.split("");

  queries.forEach(([start, end]) => {
    const changeStr = str.slice(start, end + 1);
    str.splice(start, changeStr.length, ...changeStr.reverse());
  });

  return str.join("");
}

// 내가 푼 방식과 비슷하면서도 좀 더 간단해진 코드!

console.log(
  solution("rermgorpsam", [
    [2, 3],
    [0, 7],
    [5, 9],
    [6, 10],
  ])
); // "programmers"
