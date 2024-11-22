// 241122 다시 풀어야 하는 이유 : 진수 변환 방법을 검색해서 품
// 복습완료💫(221106)

function solution(bin1, bin2) {
  return (parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2);
}

// 2진수 -> 10진수로 변환: parseInt(bin, 2)
// 10진수 -> 2진수로 변환: parseInt(bin, 2).toString(2)
