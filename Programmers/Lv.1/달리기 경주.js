// 2024.11.15(Fri)

// my way
function solution(players, callings) {
  const obj = Object.fromEntries(players.map((player, i) => [player, i]));

  // Object.fromEntries([["mumu", 0], ["soe", 1]]); => { mumu: 0, soe: 1 }

  for (let el of callings) {
    const idx = obj[el];

    if (idx > 0) {
      const prevPlayer = players[idx - 1];

      players[idx] = prevPlayer;
      players[idx - 1] = el;

      obj[el] = idx - 1;
      obj[prevPlayer] = idx;
    }
  }

  return players;
}

// function solution(players, callings) {
//     for (let el of callings) {
//         const idx = players.indexOf(el);

//         if (players.indexOf(el)) {
//             let temp = players[idx];
//             players[idx] = players[idx-1];
//             players[idx-1] = temp;
//         }
//     }

//      return players;
// }

// 처음에 이렇게 풀었다가 시간 초과로 통과 못함..
// indexOf()가 시간 효율을 많이 잡아먹는듯;-;

console.log(
  solution(
    ["mumu", "soe", "poe", "kai", "mine"],
    ["kai", "kai", "mine", "mine"]
  )
); // ["mumu", "kai", "mine", "soe", "poe"]
