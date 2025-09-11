// 과제로 내줬던 것
// - 다른사람 풀이 보지 말고 풀어볼 것
// https://school.programmers.co.kr/learn/courses/30/lessons/42840

function solution(answers) {
  var answer = [];

  // 학생들의 답안찍기 패턴
  let firstPattern = [1, 2, 3, 4, 5]; //5개
  let secondPattern = [2, 1, 2, 3, 2, 4, 2, 5]; // 8개
  let thirdPattern = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]; //10개

  // 학생들이 각각 몇 개 맞혔는지 저장할 변수
  let firstAnswerCount = 0;
  let secondAnswerCount = 0;
  let thirdAnswerCount = 0;

  // 답안의 개수만큼 반복, 하나하나 비교해보고 답안의 개수 저장
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === firstPattern[i % firstPattern.length]) {
      firstAnswerCount++;
    }

    console.log(i % secondPattern.length);
    if (answers[i] === secondPattern[i % secondPattern.length]) {
      secondAnswerCount++;
    }

    if (answers[i] === thirdPattern[i % thirdPattern.length]) {
      thirdAnswerCount++;
    }
  }

  // 1등이 맞힌 개수 파악
  const _1등 = Math.max(firstAnswerCount, secondAnswerCount, thirdAnswerCount);

  // 1번 학생부터 순서대로 최대값과 같다면 answer 배열에 push
  if (_1등 === firstAnswerCount) answer.push(1);
  if (_1등 === secondAnswerCount) answer.push(2);
  if (_1등 === thirdAnswerCount) answer.push(3);
  return answer;
}

console.log(solution([1, 3, 2, 4, 2, 1, 3, 5, 2]));
// console.log(solution([1, 2, 3]));
// let test = [1, 2, 3, 3];
// console.log(Math.max(...test));
// 1번 수포자: 12345 반복
// 2번 수포자: 2 N 2 N+1 2 .. 2다음에 나오는 수는 2가 아님
// 3번 수포자 31245 31245 숫자 두 번씩 반복
