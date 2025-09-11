// stack,
// [햄버거 만들기] 프로그래머스 레벨1 햄버거 만들기
// https://school.programmers.co.kr/learn/courses/30/lessons/133502

// 빵-고기-야채-빵 1-2-3-1

function solution(ingredient) {
  var answer = 0;
  const burgerStack = [];
  const pattern = [1, 2, 3, 1];
  for (let i = 0; i < ingredient.length; i++) {
    if (ingredient[i] == pattern[0]) {
      burgerStack.push(ingredient);
    }
  }
  return answer;
}

// GPT 추천 코드
function solution(ingredient) {
  const stack = [];
  let count = 0;

  for (let item of ingredient) {
    stack.push(item);

    // 스택 길이가 최소 4 이상이어야 "1231" 패턴 검사 가능
    if (
      stack.length >= 4 &&
      stack[stack.length - 4] === 1 &&
      stack[stack.length - 3] === 2 &&
      stack[stack.length - 2] === 3 &&
      stack[stack.length - 1] === 1
    ) {
      // 패턴 발견 → 햄버거 완성
      stack.splice(-4); // 뒤에서 4개 제거
      count++;
    }
  }

  return count;
}
