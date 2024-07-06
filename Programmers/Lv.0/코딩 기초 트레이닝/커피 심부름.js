// 2024.07.06(Sat)

// my way
function solution(order) {
  let sum = 0;

  for (let el of order) {
    if (el.includes("cafelatte")) sum += 5000;
    else sum += 4500;
  }

  return sum;
}

// -------------------------------------------------

// other way
function solution(order) {
  return order.reduce(
    (acc, cur) => acc + (cur.includes("latte") ? 5000 : 4500),
    0
  );
}

console.log(
  solution(["cafelatte", "americanoice", "hotcafelatte", "anything"])
); // 19000

console.log(solution(["americanoice", "americano", "iceamericano"])); // 13500
