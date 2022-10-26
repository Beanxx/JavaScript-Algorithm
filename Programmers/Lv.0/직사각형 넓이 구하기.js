// 2022.10.26(Wed)

function solution(dots) {
  let x = [];
  let y = [];

  for (let el of dots) {
    x.push(el[0]);
    y.push(el[1]);
  }

  x = Math.max(...x) - Math.min(...x);
  y = Math.max(...y) - Math.min(...y);

  return x * y;
}
