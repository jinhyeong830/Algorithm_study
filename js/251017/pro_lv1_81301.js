// https://school.programmers.co.kr/learn/courses/30/lessons/81301

// 풀이 1
function solution(s) {
  var answer = 0;

  answer = s
    .replaceAll("zero", "0")
    .replaceAll("one", "1")
    .replaceAll("two", "2")
    .replaceAll("three", "3")
    .replaceAll("four", "4")
    .replaceAll("five", "5")
    .replaceAll("six", "6")
    .replaceAll("seven", "7")
    .replaceAll("eight", "8")
    .replaceAll("nine", "9");

  return Number(answer);
}

// (똑같은 방식인데, for문으로 묶음.)
function solution(s) {
  const words = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  words.forEach((word, i) => (s = s.replaceAll(word, i)));
  return Number(s);
}

// 가장 추천 많이 받은.. 풀이!!
function solution(s) {
  let numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  var answer = s;

  for (let i = 0; i < numbers.length; i++) {
    let arr = answer.split(numbers[i]);
    answer = arr.join(i);
    // 나누고 합치기를 반복.
  }

  return Number(answer);
}
