// stack
// 자료구조에 대해서 알아야할까?
// 굳이 몰라도 되지만

// [같은 숫자는 싫어] 프로그래머스 레벨1. 12906
// https://school.programmers.co.kr/learn/courses/30/lessons/12906
function solution(arr) {
  // [1,1,1,1,2,2,2,2,3,4,5,6,4,5,1,2,3,4,4,4,4]
  // =>[1,2,3,4,5,6,4,5,1,2,3,4]
  var answer = [];

  answer.push(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] != arr[i - 1]) {
      answer.push(arr[i]);
    }
  }

  return answer;
}

// (추가) 따봉 많은 풀이법

function solution(arr) {
  return arr.filter((val, index) => val != arr[index + 1]);
}

// (추가) stack을 의식한 풀이법()
function solution(arr) {
  const answer = []; // stack

  for (let num of arr) {
    // answer stack 에 마지막에 들어간 요소와 현재 요소를 비교해서
    // 같지 않을 경우에만 push 진행

    // 첫번째 풀이와 기준점이 달라진 것!
    if (answer[answer.length - 1] !== num) {
      answer.push(num);
    }
  }

  answer.push(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] != arr[i - 1]) {
      answer.push(arr[i]);
    }
  }

  return answer;
}
