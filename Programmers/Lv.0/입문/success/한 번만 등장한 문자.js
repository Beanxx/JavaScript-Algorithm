// 복습완료💫(221116)
// 2022.10.22(Sat)

// my way
function solution(s) {
  let obj = {};
  let result = "";

  for (let el of s) {
    // 만약 obj에 s의 원소가 이미 있다면 +1, 없다면 1 할당
    if (el in obj) obj[el]++;
    else obj[el] = 1;
  }
  // obj:	{ h: 1, e: 1, l: 2, o: 1 }

  for (let el in obj) {
    // value가 1 즉, 한번만 등장한 key만 result에 더하기
    if (obj[el] === 1) result += el;
  }
  // result = heo
  // [...result] = [ 'h', 'e', 'o' ]
  return [...result].sort().join(""); // 배열로 쪼갠 후 사전순으로 정렬하고, 다시 문자열로 합치기
}

// 241121
function solution(s) {
  let result = {};

  for (let el of s) {
    if (!result[el]) result[el] = 1;
    else result[el]++;
  }

  return Object.entries(result)
    .filter((el) => el[1] === 1)
    .map((el) => el[0])
    .sort()
    .join("");
}

// other way
function solution(s) {
  let result = [];
  for (let el of s) {
    // el가 한번만 등장했을 때 result 배열에 push
    if (s.indexOf(el) === s.lastIndexOf(el)) result.push(el);
  }
  // result = [ 'h', 'e', 'o' ]
  return result.sort().join("");
}

// indexOf(el): 앞에서부터 검색할 값을 찾음
// lastIndexOf(el): 뒤에서부터 검색할 값을 찾음
// 앞에서부터 검색해서 찾은 index값과 뒤에서부터 검색해서 찾은 index값이 같다는건 해당 문자가 한번만 등장했다는 의미가 된댜!

console.log(solution("hello")); // "eho"
