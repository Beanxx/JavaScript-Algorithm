// [중복순열] 가위바위보.js
// 2022.08.11(Thurs)

function rockPaperScissors(rounds) {
  let result = [];
  let rps = ["rock", "paper", "scissors"];
  let count = 0;

  // rounds를 입력받지 않았을 경우 가위바위보 게임 수를 3으로 지정
  if (rounds === undefined) {
    rounds = 3;
  }

  // 재귀 함수
  const permutation = (count, arr) => {
    // 재귀를 끝낼 조건 설정
    // count를 게임이 끝날 때마다 +1씩 증가시켜서 입력받은 게임 수인 rounds와 같아진다면 재귀 end
    if (count === rounds) {
      result.push(arr);
      return;
    }

    // rps 배열 순회
    for (let i = 0; i < rps.length; i++) {
      // 재귀 실행
      // count를 +1씩 증가시키며, 배열 arr에 rps[i]를 추가
      permutation(count + 1, [...arr, rps[i]]);
    }
  };

  // 재귀 실행
  // 재귀 초기값 설정
  permutation(count, []);

  return result;
}

console.log(rockPaperScissors(3));
