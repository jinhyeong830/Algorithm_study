// [삼총사] 프로그래머스 레벨1
// https://school.programmers.co.kr/learn/courses/30/lessons/131705

function solution(number) {
  // number 는 배열,
  let answer = 0;
  let tripleCount = 0;

  // 삼중포문의 시간복잡도 n^3 으로 좋지 않긴 하지만
  // 입력값의 한계치가 13이기 때문에 해당 문제에서는 나쁘지 않은 해결방법
  // (DFS 로 처리할 수 있긴 하지만, DFS도 nC3 복잡도를 가졌기 때문에 복잡도는 비슷하고 오버헤드 때문에 오히려 더 느릴 수 있음)

  // 브루트포스
  for (let i = 0; i < number.length - 2; i++) {
    for (let j = i + 1; j < number.length - 1; j++) {
      for (let k = j + 1; k < number.length; k++) {
        // const sum = number[i] + number[j] + number[k];
        if (number[i] + number[j] + number[k] == 0) tripleCount++;
      }
    }
  }
  return tripleCount;
}

console.log(solution([-2, 3, 0, 2, -5]));
console.log(solution([-3, -2, -1, 0, 1, 2, 3]));
console.log(solution([-1, 1, -1, 1]));
