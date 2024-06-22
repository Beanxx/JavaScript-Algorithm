// 2024.06.22(Sat)

// my way
function solution(intStrs, k, s, l) {
  let result = [];

  for (let el of intStrs) {
    const val = el.substr(s, l);

    if (val > k) {
      result.push(+val);
    }
  }

  return result;
}

// -----------------------------------------------------------------------------------------------------------

// other way 1
function solution(intStrs, k, s, l) {
  return intStrs.map((v) => +v.slice(s, s + l)).filter((v) => v > k);
}

// other way 2
function solution(intStrs, k, s, l) {
  return intStrs.reduce((acc, cur) => {
    const v = Number(cur.slice(s, s + l));

    if (v > k) acc.push(v);

    return acc;
  }, []);
}

console.log(
  solution(["0123456789", "9876543210", "9999999999999"], 50000, 5, 5)
); // [56789, 99999]
