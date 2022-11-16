// 복습완료💫(221116)
// 2022.10.28(Fri)

// my way
function solution(dots) {
  let arrX = []; // x 변화율
  let arrY = []; // y 변화율
  let lean = []; // 기울기

  // 각각 x, y 변화율을 각 배열에 넣기
  // i = 0, 1, 2
  // j = 1, 2, 3 위치만큼 비교하면 된다.
  for (let i = 0; i < dots.length - 1; i++) {
    for (let j = i + 1; j < dots.length; j++) {
      arrX.push(Math.abs(dots[j][0] - dots[i][0]));
      arrY.push(Math.abs(dots[j][1] - dots[i][1]));
    }
  }

  // arrX: 	[ 8, 2, 10, 6, 2, 8 ]
  // arrY: [ 2, 4, 2, 6, 4, 2 ]

  // 기울기 = y변화율 / x변화율 공식을 이용해서 기울기를 구해서 기울기 배열인 lean에 넣기
  for (let i = 0; i < arrX.length; i++) {
    // 만약 이미 lean 배열에 이미 있는 기울기라면 평행하는 기울기가 존재한다는 의미이므로 1 반환
    if (lean.includes(arrY[i] / arrX[i])) return 1;
    // lean 배열에 존재하지 않으면 기울기 push
    else lean.push(arrY[i] / arrX[i]);
  }
  // 반복문이 끝나도 반환한게 없다는건 평행하는 기울기가 없다는 의미이므로 0 반환
  return 0;
}

// other way
function solution(dots) {
  const leans = [];

  for (let i = 0; i < dots.length; i++) {
    const dotA = dots[i];
    for (let j = i + 1; j < dots.length; j++) {
      const dotB = dots[j];
      const lean = (dotB[1] - dotA[1]) / (dotB[0] - dotA[0]); // y / x => 기울기

      if (leans.includes(lean)) return 1;
      else leans.push(lean);
    }
  }
  return 0;
}

console.log(
  solution([
    [1, 4],
    [9, 2],
    [3, 8],
    [11, 6],
  ])
); // 1
