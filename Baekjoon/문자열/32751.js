// 32751_햄버거
// 2024.12.01(SUN)

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const nums = input[1].split(" ").map(Number);
const S = input[2];

const func = (N, nums, S) => {
  const [A, B, C, D] = nums;
  const obj = { a: A, b: B, c: C, d: D };

  // 가장 아래, 위가 빵이 아닌 경우 'No'
  if (S[0] !== "a" || S[N - 1] !== "a") return "No";

  for (let i = 0; i < N; i++) {
    // 재료 개수가 없거나 같은 재료가 인접한 경우
    if (obj[S[i]] === 0 || S[i] === S[i - 1]) return "No";

    obj[S[i]]--;
  }

  return "Yes";
};

console.log(func(N, nums, S));
