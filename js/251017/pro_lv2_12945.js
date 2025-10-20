// https://school.programmers.co.kr/learn/courses/30/lessons/12945
// 문제가 살짝 다르긴 하지만. 큰 윤곽은 똑같음.
// 보지 않고 스스로 작성할 것.

function fibo(n) {
  if (n == 0 || n == 1) {
    return n;
  } else {
    return fibo(n - 1) + fibo(n - 2);
  }
}

function solution(n) {
  var answer = fibo(n) % 1234567;

  // fibo(n)%1234567
  return answer;
}

console.log(solution(3));
console.log(solution(1000));
