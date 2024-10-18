// 2024.10.18(Fri)

// my way
function solution(todo_list, finished) {
  return todo_list.filter((el, idx) => !finished[idx]);
}

console.log(
  solution(
    ["problemsolving", "practiceguitar", "swim", "studygraph"],
    [true, false, true, false]
  )
); // ["practiceguitar", "studygraph"]
