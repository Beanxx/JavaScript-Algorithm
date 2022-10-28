// 2022.10.28(Fri)

// my way
function solution(dots) {
  let arrX = [];
  let arrY = [];
  let lean = []; // 기울기

  // 각각 x,y 변화율을 각 배열에 넣기
  for (let i = 0; i < dots.length - 1; i++) {
    for (let j = i + 1; j < dots.length; j++) {
      arrX.push(Math.abs(dots[j][0] - dots[i][0]));
      arrY.push(Math.abs(dots[j][1] - dots[i][1]));
    }
  }

  // 기울기 = y변화율 / x변화율 공식을 이용해서 기울기를 구해서 기울기 배열인 lean에 넣기
  for (let i = 0; i < arrX.length; i++) {
    // 만약 이미 lean 배열에 이미 있는 기울기라면 배열에 넣지 않기
    if (!lean.includes(arrY[i] / arrX[i])) {
      lean.push(arrY[i] / arrX[i]);
    }
  }

  // arrX 배열 길이와 lean 배열 길이가 같다는 것은 같은 기울기가 없다는 것이므로 return 0
  // 길이가 같지 않다는 것은 동일한 기울기가 존재해서 lean 배열에 담지 않은 것이므로 return 1
  if (arrX.length === lean.length) {
    return 0;
  } else {
    return 1;
  }
}

// other way
function solution(dots) {
  const leans = [];

  for (let i = 0; i < dots.length; i++) {
    const dotA = dots[i];
    for (let j = i + 1; j < dots.length; j++) {
      const dotB = dots[j];
      const lean = (dotB[1] - dotA[1]) / (dotB[0] - dotA[0]); // y / x

      if (leans.includes(lean)) return 1;
      else leans.push(lean);
    }
  }

  return 0;
}
