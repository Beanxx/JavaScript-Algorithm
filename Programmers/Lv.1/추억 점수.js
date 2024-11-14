// 2024.11.14(Thurs)

// my way
function solution(name, yearning, photo) {
  let result = [];

  // 이중 배열로 만들기
  let arr = name.map((el, idx) => [el, yearning[idx]]); // e.g. [ [ 'may', 5 ], [ 'kein', 10 ], [ 'kain', 1 ], [ 'radi', 3 ] ]

  for (let el of photo) {
    let num = 0;

    for (let i = 0; i < arr.length; i++) {
      if (el.findIndex((el) => el === arr[i][0]) !== -1) {
        num += arr[i][1];
      }
    }

    result.push(num);
  }

  return result;
}

// -------------------------------------------------------------------

// other way
function solution(name, yearning, photo) {
  return photo.map((v) =>
    v.reduce((acc, cur) => (acc += yearning[name.indexOf(cur)] ?? 0), 0)
  );
}

console.log(
  solution(
    ["may", "kein", "kain", "radi"],
    [5, 10, 1, 3],
    [
      ["may", "kein", "kain", "radi"],
      ["may", "kein", "brin", "deny"],
      ["kon", "kain", "may", "coni"],
    ]
  )
); // [19, 15, 6]

console.log(
  solution(
    ["kali", "mari", "don"],
    [11, 1, 55],
    [
      ["kali", "mari", "don"],
      ["pony", "tom", "teddy"],
      ["con", "mona", "don"],
    ]
  )
); // [67, 0, 55]

console.log(
  solution(
    ["may", "kein", "kain", "radi"],
    [5, 10, 1, 3],
    [["may"], ["kein", "deny", "may"], ["kon", "coni"]]
  )
); // [5, 15, 0]
