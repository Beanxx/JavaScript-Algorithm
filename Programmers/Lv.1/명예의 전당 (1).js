// 2022.11.28(Mon)
// 명예의 전당 (1).js

// my way
function solution(k, score) {
  let answer = []; // 발표 점수
  let arr = []; // 명예의 전당

  for (let el of score) {
    // 초기 k일까지는 모든 출연 가수 점수가 명예전당에 오름
    if (arr.length < k) {
      arr.push(el);
      arr.sort((a, b) => a - b); // 오름차순 정렬
      // arr = [10, 20, 100]
      answer.push(arr[0]); // 가장 적은 점수가 발표 점수!
      // answer = [10, 10, 10]
    } else {
      // arr 최솟값보다 값이 클 경우 값 교체
      if (el > arr[0]) {
        arr.splice(0, 1); // arr[0] 잘라내기
        arr.push(el); // 새로운 값 push
        arr.sort((a, b) => a - b); // 오름차순 정렬
        answer.push(arr[0]); // 오름차순 정렬로 인해 arr[0]에 최솟값이 있음
      } else {
        // 위의 경우가 아닐 경우엔 고대로 arr[0] 원소 다시 push해주기
        answer.push(arr[0]);
      }
    }
  }
  return answer;
}

// other way
function solution(k, score) {
  let answer = []; // 발표점수
  let list = []; // 명예전당

  for (let el of score) {
    list.push(el);
    list.sort((a, b) => b - a); // 내림차순 정렬

    // k보다 명예전당 길이가 길어지면 맨 뒤 원소 제거
    // 위에서 내림차순 정렬을 했으므로 맨 뒤 원소가 최솟값
    if (list.length > k) list.pop();
    answer.push(list[list.length - 1]); // 맨 뒤 원소가 최솟값이므로 answer에 push
  }
  return answer;
}

console.log(solution(3, [10, 100, 20, 150, 1, 100, 200])); // [10, 10, 10, 20, 20, 100, 100]
console.log(solution(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000])); // [0, 0, 0, 0, 20, 40, 70, 70, 150, 300]
