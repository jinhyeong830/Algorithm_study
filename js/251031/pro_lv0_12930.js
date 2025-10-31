// https://school.programmers.co.kr/learn/courses/30/lessons/12903
// 쉬운 문제
function solution(s) { // s는 string
    const stringIndex = parseInt(s.length/2) // 정수로 내림됨.
    var answer = '';
    if(s.length%2==1){
        // 홀수 일 때의 가운데 문자
        answer = s[stringIndex]
    }else{
        answer = s.slice(stringIndex-1,stringIndex+1)
    }
    
    return answer;
}
console.log(solution("abcde"))
console.log(solution("we"))


// 추천 가장 많이 받는 풀이법
function solution2(s) {
    return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}
/* 
    -잘라내기 3가지 함수, 문자열과 배열에서 -
 * str.substr(startIdx, length) @deprecated 임.
      = str 문자열 기준으로 startIdx 부터 length 만큼 잘라낸다.
      = 원본 문자열 변경 안됨
      = 문자열에서만 사용 가능함
      ex) "elephant".substr(3,3) >> "pha" 반환 (3번인덱스 p를 기준으로 3글자 잘라서 반환)
 * strOrArr.slice(startIdx, endIdx)
      = strOrArr 를 기준으로 startIdx <= <endIdx 인덱스 기준으로 잘라서 반환
      = 원본 데이터 변경 안됨
      = 문자열과 배열에서 모두 사용 가능함
      ex) "elephant".slice(2,4) >> ep 반환 (3번인덱스 p를 기준으로 3글자 잘라서 반환)
 * arr.splice(startIdx, legnth)
      = arr 배열 기준으로 startIdx 부터 length만큼 잘라서 반환한다.
      = 원본배열에서는 splice를 한 요소가 삭제되어 있음(원본 데이터 변경)
      = 배열에서만 사용 가능함
      ex ) ["a","b","c","d","e"].splice(2,2) >> ["c","d"] 반환
           원본배열 ["a", "b", "e"] 로 변경되어 있을 것
 */

   const testArr = ["a","b","c","d","e"]
console.log(testArr.slice(2,3))
console.log(testArr)

const testStr ="elephant"
console.log(testStr.slice(2,4))
console.log(testStr)

console.log(testStr.substr(1,5))
console.log(testStr)