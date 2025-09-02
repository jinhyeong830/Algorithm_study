// - level 0. 중복된 숫자 개수
// https://school.programmers.co.kr/learn/courses/30/lessons/120583
function solution(array, n) {
  var answer = 0;
  // for(let index=0; index<array.length; index++){
  //    if(array[index]===n) answer++;
  // }
  answer = array.filter((number) => number == n).length;
  return answer;
}
