// 문자열 내 p와 y의 개수
// https://school.programmers.co.kr/learn/courses/30/lessons/12916
function solution(s) {
  var answer = true;

  let comparing = s.toLowerCase().split("");
  const pArr = comparing.filter((alpha) => alpha === "p");
  const yArr = comparing.filter((alpha) => alpha === "y");
  answer = pArr.length === yArr.length;

  return answer;
}

// gpt recommendation
function solution(s) {
  let p = 0; // pcount
  let y = 0; // ycount

  for (const char of s.toLowerCase()) {
    if (char === "p") p++;
    else if (char === "y") y++;
  }

  return p === y;
}
