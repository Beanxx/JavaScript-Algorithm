// 2024.02.17(Sat)

// my way
function solution(myString) {
  return myString.split("x").map((el) => el.length);
}

console.log(solution("oxooxoxxox")); // [ 1, 2, 1, 0, 1, 0 ]
console.log(solution("xabcxdefxghi")); //	[ 0, 3, 3, 3 ]
