// [중복된 문자 제거] 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/120888
function solution(my_string) {
  const strSet = new Set([...my_string]);
  return [...strSet].join("");
}

console.log(solution("people"));
