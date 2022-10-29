// 2022.10.29(Sat)

// my way
function solution(id_pw, db) {
  for (let i = 0; i < db.length; i++) {
    if (db[i][0] === id_pw[0] && db[i][1] === id_pw[1]) {
      return "login";
    }

    if (db[i][0] === id_pw[0] && db[i][1] !== id_pw[1]) {
      return "wrong pw";
    }
  }

  if (!id_pw[0].includes(db)) {
    return "fail";
  }
}

// other way
function solution(id_pw, db) {
  db = db.filter((v) => v[0] === id_pw[0]);

  if (!db.length) return "fail";

  for (let el of db) {
    if (el[1] === id_pw[1]) return "login";
  }

  return "wrong pw";
}
