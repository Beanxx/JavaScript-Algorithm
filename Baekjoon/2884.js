// 2884 알람 시계
// 2022.11.04(Fri)

const input = require("fs").readFileSync("input.txt").toString().split(" ");

const h = parseInt(input[0]); // H
const m = parseInt(input[1]); // M

if (m >= 45) {
  console.log(`${h} ${m - 45}`);
} else if (m < 45 && h > 0) {
  console.log(`${h - 1} ${m + 15}`);
} else {
  console.log(`23 ${m + 15}`);
}
