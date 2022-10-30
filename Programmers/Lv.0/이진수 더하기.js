function solution(bin1, bin2) {
  let answer = (parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2);
  return answer;
}

// 2진수 -> 10진수로 변환: parseInt(bin, 2)
// 10진수 -> 2진수로 변환: parseInt(bin, 2).toString(2)
