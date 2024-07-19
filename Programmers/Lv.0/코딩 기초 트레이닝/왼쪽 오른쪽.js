// 2024.07.19(Fri)

// my way
function solution(str_list) {
  const lIdx = str_list.indexOf("l");
  const rIdx = str_list.indexOf("r");

  if (lIdx === -1 && rIdx === -1) return [];

  if (lIdx !== -1 && (rIdx === -1 || lIdx < rIdx)) {
    return str_list.slice(0, lIdx);
  }

  if (rIdx !== -1 && (lIdx === -1 || rIdx < lIdx)) {
    return str_list.slice(rIdx + 1);
  }
}

// -----------------------------------------------------

// other way
function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "l") return arr.slice(0, i);
    if (arr[i] === "r") return arr.slice(i + 1);
  }

  return [];
}

// 반복문 돌려서 풀 생각은 못했는데 so simple,,

console.log(solution(["u", "u", "l", "r"])); // ["u", "u"]
console.log(solution(["l"])); // []
