// first try - 2022.04.27(Wed)
// second try - 2022.06.27(Mon)

// Q: 시, 분, 초를 입력받아 1초를 더한 결과값을 특정 형태의 메시지로 리턴해야 합니다.

// second try
// 두번째로 풀었을 때 이중 if문을 쓰지 않고, 초, 분, 시 순으로 각각 if문 처리를 해줬다.
// 처음 풀었을 때보다 훨씬 깔꼼한 코드쓰..
function addOneSecond(hour, minute, second) {
  if (second === 59) {
    minute += 1;
    second = 0;
  } else {
    second += 1;
  }

  if (minute === 60) {
    hour += 1;
    minute = 0;
  }

  if (hour === 24) {
    hour = 0;
  }

  return `1초 뒤에 ${hour}시 ${minute}분 ${second}초 입니다`;
}

// -------------------------------------------------------------------

// first try
// 처음 풀었을 때 코드는 굳이굳이 이중 반복문을 써서 같은 리턴문도 여러번이나 작성했다..
// 비효율 코드의 끝판왕;;
function addOneSecond(hour, minute, second) {
  if (second === 59) {
    if (minute === 59) {
      if (hour === 23) {
        hour = 0;
        minute = 0;
        second = 0;
        return `1초 뒤에 ${hour}시 ${minute}분 ${second}초 입니다`;
      }
      minute = 0;
      second = 0;
      hour += 1;
      return `1초 뒤에 ${hour}시 ${minute}분 ${second}초 입니다`;
    }
    minute += 1;
    second = 0;
    return `1초 뒤에 ${hour}시 ${minute}분 ${second}초 입니다`;
  } else {
    second += 1;
    return `1초 뒤에 ${hour}시 ${minute}분 ${second}초 입니다`;
  }
}
