// 2022.08.13(Sat)
// 구명보트.js
// = [coplit]_[Greedy] 짐 나르기.js

function solution(people, limit) {
  // people: [70, 50, 80, 50]
  // sortedPeople: [50, 50, 70, 80]
  let sortedPeople = people.sort((a, b) => a - b);

  let min = 0; // 배열 맨 앞이 제일 작은 값이므로 index = 0
  let max = sortedPeople.length - 1; // 배열 맨 뒤가 제일 큰 값이므로

  let count = 0;

  for (let i = 0; min <= max; i++) {
    if (sortedPeople[min] + sortedPeople[max] > limit) {
      max--;
      count++;
    } else {
      min++;
      max--;
      count++;
    }
  }
  return count;
}
