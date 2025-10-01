// [K번째수] 프로그래머스 레벨1
// https://school.programmers.co.kr/learn/courses/30/lessons/42748
function solution(array, commands) {
  // commands 는 이차원 배열
  /* [[i부터, j까지, k번째수]]
    - i, j, k 는 각 0부터 시작하는 인덱스가 아닌 ~번째수이므로, 1부터 시작함
    */
  let answer = [];
  for (let i = 0; i < commands.length; i++) {
    // 여기서 구조분해할당 해는것도 좋음. commands[i][0] 이런 것들이 읽기 힘드니까
    const sliceArray = array.slice(commands[i][0] - 1, commands[i][1]);
    sliceArray.sort((a, b) => a - b);
    const kNumber = sliceArray[commands[i][2] - 1];
    answer.push(kNumber);
  }
  return answer;
}

console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
);
