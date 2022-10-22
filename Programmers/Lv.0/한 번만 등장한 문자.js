// 2022.10.22(Sat)

// my way
function solution(s) {
  let obj = {};
  let result = "";

  for (let el of s) {
    if (el in obj) {
      obj[el]++;
    } else {
      obj[el] = 1;
    }
  }

  for (let el in obj) {
    if (obj[el] === 1) {
      result += el;
    }
  }

  result = result.split("").sort().join("");

  return result;
}

// other way
function solution(s) {
  let result = [];
  for (let el of s) {
    if (s.indexOf(el) === s.lastIndexOf(el)) {
      result.push(el);
    }
  }

  return result.sort().join("");
}

// indexOf(el): 앞에서부터 검색할 값을 찾음
// lastIndexOf(el): 뒤에서부터 검색할 값을 찾음
// 앞에서부터 검색해서 찾은 index값과 뒤에서부터 검색해서 찾은 index값이 같다는건 해당 문자가 한번만 등장했다는 의미가 된댜!
