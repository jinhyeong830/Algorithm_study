function solution(numbers) {
  // 배열 numbers
  var answer = new Set();

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      answer.add(numbers[i] + numbers[j]);
    }
  }

  //   console.log("answer", answer);
  //   const noDuplicate = [...new Set(answer)];
  //   console.log("no duplicate", noDuplicate);
  //   noDuplicate.sort();

  return [...answer].sort((a, b) => a - b);
}

console.log(solution([2, 1, 3, 4, 1]));
console.log(solution([5, 0, 2, 7]));
