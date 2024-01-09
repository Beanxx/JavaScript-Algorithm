// 2024.01.09(Tues)

// my way
function solution(num_list, n) {
  let front = num_list.slice(n);
  let back = num_list.slice(0, n);

  return [...front, ...back];
}

// other way 1
function solution(num_list, n) {
  num_list.push(...num_list.splice(0, n));

  return num_list;
}

// splice(start, delete length) -> splice(0, n) => index 0 ~ n-1 부분은 잘라내기

// 1. ...num_list.splice(0, n) => 0 ~ n-1 인덱스 부분 잘라내면 num_list 배열에는 나머지 뒷부분만 남게 된다
// 2. 뒷부분만 남게 된 배열에 num_list.push(...num_list.splice(0, n)) => 아까 잘라낸 앞 부분을 push로 맨 뒤에 붙인다

// other way 2
function solution(num_list, n) {
  num_list.unshift(...num_list.splice(n));
  return num_list;
}

// unshift(element1, element2, ...):  배열 맨 앞에 원소들 추가
// 첫번째 방법과 유사하지만 반대 방법으로, 뒷부분을 잘라낸 후 배열 제일 앞에 잘라낸 원소들을 추가한다

console.log(solution([2, 1, 6], 1)); // [1, 6, 2]
console.log(solution([5, 2, 1, 7, 5], 3)); // 	[7, 5, 5, 2, 1]
