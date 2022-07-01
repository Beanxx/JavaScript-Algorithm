// first try - 2022.05.11(Wed)
// second try - 2022.07.01(Fri)

// Q: 객체를 입력받아 'firstName', 'lastName' 속성값 사이에 띄어쓰기 하나를 둔 단일 문자열을 fullName 속성값으로 할당해야 합니다.

// * 조건 *
// 별도의 리턴문(return statement) 작성 X

function addFullNameProperty(obj) {
  obj.fullName = `${obj.firstName} ${obj.lastName}`;
}

// 첨엔 obj[fullName]으로 써서 error 썼다. obj[] 안에는 꼭 문자열로 쓰기!
// obj[fullName](x) -> obj['fullNmae'](O)
