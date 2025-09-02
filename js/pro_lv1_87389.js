// 나머지가 1이 되는 수 찾기 (try,, 생략)
// https://school.programmers.co.kr/learn/courses/30/lessons/87389
function solution(n) {
  /* 
  설명: 주어진 숫자 n, n%[미지수] ===1 인 미지수 찾기, 미지수는 1보다 작아야 함.
  n은 3부터 백만까지
  n=3 미지수 x = 2
  n=4 미지수 x = 3
  n=5 미지수 x = 2
  n=6 미지수 x = 5
  */

  var answer = 0;

  if (n % 2 == 1) {
    // 홀수일 때, 나머지가 1인 가장작은 미지수는 무조건 2
    answer = 2;
    return answer;
  }

  // 짝수일 때, 나머지가 1인 미지수 x 손수 구해야함.
  let i = 3;
  while (i < n) {
    if (n % i == 1) {
      answer = i;
      break;
    }
    i = i + 2;
  }
  return answer;
}

// ver 2. 간단하게..
function solution(n) {
  for (let x = 2; x < n; x++) {
    if (n % x === 1) return x;
  }
}

// ver3. 최적화. 속도까지 신경쓴다면.. (하지만 현재 범위에선 그냥 다 확인하는게 나을 수 있음.)
function solution(n) {
  // 홀수인 경우는 무조건 x=2 라서 바로 리턴 가능!
  if (n % 2 === 1) return 2;

  // 짝수일 경우에만 3부터 2씩 증가
  for (let x = 3; x < n; x += 2) {
    if (n % x === 1) return x;
  }
}
