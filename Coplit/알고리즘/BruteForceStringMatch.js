// 문자열 매칭 알고리즘
// 2022.08.10(Wed)

function BruteForceStringMatch(arr, patternArr) {
  // Brute Force 문자열 매칭 구현
  // Input: n개의 문자 텍스트를 나타내는 배열 arr, m개의 문자 패턴을 나타내는 배열 patternArr
  // Output: 일치하는 문자열이 있으면 첫번째 인덱스를 반환 / 검색에 실패한 경우 -1 반환

  let n = arr.length;
  let m = patternArr.length;

  // i - 패턴과 비교의 위치를 잡는 반복문
  // 전체 요소 개수 - 패턴개수 만큼 반복 => 그 수가 마지막 비교요소이므로!
  for (let i = 0; i < n - m; i++) {
    let j = 0;
    // j - 전체와 패턴의 요소 하나하나를 비교하는 반복문
    // j가 패턴 개수보다 커지기 전까지 반복
    while (j < m && patternArr[j] === arr[i + j]) {
      // patternArr[j] === arr[i+j] <- 만족하면 즉, 같아지면 j++;
      j++;
    }

    // 패턴 문자열과 완전히 같은 부분이 존재함을 의미
    if (j === m) {
      return i; // 비교했던 위치 즉, 패턴 일치 시작 index 반환
    }
  }
  return -1; // 일치하는 패턴이 없으면 -1 반환
}

console.log(
  BruteForceStringMatch(
    ["A", "B", "C", "D", "B", "D", "B", "C", "C", "D", "B", "D", "A"],
    ["C", "D", "B", "D"]
  )
); // 2
