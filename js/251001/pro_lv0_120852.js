// [소인수분해] 프로그래머스  lv0.
// https://school.programmers.co.kr/learn/courses/30/lessons/120852
function solution(n) {
  const 소인수분해_numbers = [];
  // 소수인지 판별해야함..
  let compare_PN = 2; // prime number = 소수
  while (n >= 2) {
    // n 이 2보다 크거나 같을 때,
    if (n % compare_PN == 0) {
      // compare_PN 은 항상 소수라고 가정, 나누어 떨어지면 n의 인수가 됨.
      소인수분해_numbers.push(compare_PN);
      n = n / compare_PN; // 조건문으로 검사한 소수로 나누어서 새롭게 검사할 수와 다시 비교해야함
    } else {
      // 나누어 떨어지지 않을 때 인수가 아님
      compare_PN++;
    }
  }

  const 중복제거 = new Set(소인수분해_numbers);
  return [...중복제거];
}
