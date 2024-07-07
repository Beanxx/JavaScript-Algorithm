// 2024.07.07(Sun)

// my way
function solution(n, slicer, num_list) {
  const [a, b, c] = slicer;

  if (n === 1) {
    return num_list.slice(0, b + 1);
  }

  if (n === 2) {
    return num_list.slice(a);
  }

  if (n === 3) {
    return num_list.slice(a, b + 1);
  }

  if (n === 4) {
    const sliceArr = num_list.slice(a, b + 1);
    return sliceArr.filter((_, i) => i % c === 0);
  }
}

// -------------------------------------------------

// other way
function solution(n, slicer, num_list) {
  const [a, b, c] = [...slicer];

  switch (n) {
    case 1:
      return num_list.slice(0, b + 1);
    case 2:
      return num_list.slice(a);
    case 3:
      return num_list.slice(a, b + 1);
    case 4:
      return num_list.slice(a, b + 1).filter((_, idx) => !(idx % c));
  }
}
// 내가 푼 방법과 비슷하지만 if문 대신 switch case문으로도 쓸 수 있다

console.log(solution(3, [1, 5, 2], [1, 2, 3, 4, 5, 6, 7, 8, 9])); // [2, 3, 4, 5, 6]
console.log(solution(4, [1, 5, 2], [1, 2, 3, 4, 5, 6, 7, 8, 9])); // [2, 4, 6]
