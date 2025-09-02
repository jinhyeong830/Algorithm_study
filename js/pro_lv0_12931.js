// - level 0. 자릿수 더하기
// https://school.programmers.co.kr/learn/courses/30/lessons/12931
function solution(n) {
  var answer = 0;
  while (n !== 0) {
    answer = answer + (n % 10);
    n = parseInt(n / 10);
  }
  return answer;
}
