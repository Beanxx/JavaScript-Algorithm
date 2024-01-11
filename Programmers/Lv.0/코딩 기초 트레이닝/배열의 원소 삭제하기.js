// 2024.01.11(Thurs)

// my way
function solution(arr, delete_list) {
  for (let el of delete_list) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === el) {
        arr.splice(i, 1);
      }
    }
  }

  return arr;
}

// splice(start, deleteCount): start번 index에서 deleteCount개 요소 제거

// --------------------------------------------------------------------

// other way 1
function solution(arr, delete_list) {
  return arr.filter((el) => !delete_list.includes(el));
}

// delete_list에 포함되지 않는 원소만 보여주기 = delete_list 원소 제거

console.log(solution([293, 1000, 395, 678, 94], [94, 777, 104, 1000, 1, 12])); // [293, 395, 678]
console.log(solution([110, 66, 439, 785, 1], [377, 823, 119, 43])); // [110, 66, 439, 785, 1]
