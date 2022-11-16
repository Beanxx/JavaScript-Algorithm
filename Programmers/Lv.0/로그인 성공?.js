// 복습완료💫(221116)
// 2022.10.29(Sat)

// my way
function solution(id_pw, db) {
  for (let i = 0; i < db.length; i++) {
    if (db[i][0] === id_pw[0] && db[i][1] === id_pw[1]) return "login";
    if (db[i][0] === id_pw[0] && db[i][1] !== id_pw[1]) return "wrong pw";
  }

  // id가 db에 일치하는 id가 없다면
  if (!id_pw[0].includes(db)) return "fail";
}

// other way
function solution(id_pw, db) {
  // 일치하는 id만 걸러내기
  db = db.filter((v) => v[0] === id_pw[0]);

  // 걸러낸 db 아이템이 없다면 즉, 일치하는 id가 없다면
  if (!db.length) return "fail";

  for (let el of db) {
    // id 일치는 이미 filter로 걸려냈기 때문에 pw만 일치하는지 확인해주면 됨
    if (el[1] === id_pw[1]) return "login";
  }

  return "wrong pw";
}
