// - level 0. 짝수는 싫어요(생각하는 법)
// https://school.programmers.co.kr/learn/courses/30/lessons/120813
function solution(n) {
  var answer = [];
  const 반복횟수 = Math.ceil(n / 2);

  for (let i = 1; i <= 반복횟수; i++) {
    answer.push(2 * i - 1);
  }
  return answer;
}
