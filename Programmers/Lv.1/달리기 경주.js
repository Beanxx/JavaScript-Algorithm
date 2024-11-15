// 2024.11.15(Fri)

// my way
function solution(players, callings) {
  const playerIndices = {};
  players.forEach((player, index) => {
    playerIndices[player] = index;
  });

  for (let el of callings) {
    const idx = playerIndices[el];

    if (idx > 0) {
      const prevPlayer = players[idx - 1];

      players[idx] = prevPlayer;
      players[idx - 1] = el;

      playerIndices[el] = idx - 1;
      playerIndices[prevPlayer] = idx;
    }
  }

  return players;
}

console.log(
  solution(
    ["mumu", "soe", "poe", "kai", "mine"],
    ["kai", "kai", "mine", "mine"]
  )
); // ["mumu", "kai", "mine", "soe", "poe"]
