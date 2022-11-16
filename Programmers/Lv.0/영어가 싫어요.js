// 복습완료💫(221116)
// 2022.10.22(Sat)

function solution(numbers) {
  const arr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  for (let i = 0; i < arr.length; i++) {
    numbers = numbers.split(arr[i]).join(i);
    // numbers.split(arr[1]): ['', 'fourzerosixseven']
    // numbers.split(arr[1]).join(1): '1fourzerosixseven'
  }
  return Number(numbers);
}

// other way
function solution(numbers) {
  const obj = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  const num = numbers.replace(
    /zero|one|two|three|four|five|six|seven|eight|nine/g,
    (el) => {
      return obj[el];
    }
  );

  return Number(num);
}
// zero, one, two ... 숫자에 해당하는 영어문자가 나올 경우에 이를 replace를 통해 obj 객체의 value로 바꿔주기

console.log(solution("onefourzerosixseven")); // 14067
