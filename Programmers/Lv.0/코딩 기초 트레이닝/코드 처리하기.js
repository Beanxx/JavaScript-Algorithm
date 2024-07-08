// 2024.07.08(Mon)

// my way
function solution(code) {
  let ret = "";
  let mode = 0;

  for (let idx = 0; idx < code.length; idx++) {
    if (mode === 0) {
      if (code[idx] === "1") {
        mode = 1;
      } else if (idx % 2 === 0) {
        ret += code[idx];
      }
    } else if (mode === 1) {
      if (code[idx] === "1") {
        mode = 0;
      } else if (idx % 2 === 1) {
        ret += code[idx];
      }
    }
  }

  return ret || "EMPTY";
}

// 중첩 if문으로 구현한 탓에 가독성 zero,,

// -----------------------------------

// other way 1
function solution(code) {
  let ret = "";
  let mode = 0;

  for (let i = 0; i < code.length; i++) {
    if (Number(code[i]) === 1) {
      mode = mode === 1 ? 0 : 1;
    }

    // mode가 0일 땐 짝수일 때만, mode가 1일 떈 홀수일 때만 -> 즉, i % 2 === mode 이렇게 표현 가능하다
    if (Number(code[i]) !== 1 && i % 2 === mode) {
      ret += code[i];
    }
  }
  return ret || "EMPTY";
}

// Array.from(code) = code.split('') -> ['a', 'b', 'c', '1', ...]

// 내가 구현한 조건의 순서를 바꿔서 생각하니까 중첩 if문을 사용하지 않고도 깔끔하게 구현 가능!

// other way 2
function solution(code) {
  let odd = false;

  return (
    Array.from(code).reduce((acc, cur, i) => {
      if (cur === "1") {
        odd = !odd; // mode: 0 | 1 변경 대신 odd = false | true 으로 구현 가능 => 쨋든 mode와 동일 맥락의 코드로 이해하면 될둣
        return acc;
      }

      // 여기서 odd를 mode와 동일 의미로 이해하면 된다
      return i % 2 === (odd ? 1 : 0) ? acc + cur : acc;
    }, "") || "EMPTY"
  );
}

// 약간 코드 이해하기에 가독성이 좋진 않지만 reduce를 써서도 구현 가능하다는 사실 ~.~

console.log(solution("abc1abc1abc")); // "acbac"
