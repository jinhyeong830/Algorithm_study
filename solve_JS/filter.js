const num = [1, 5, 7, 9, 20];
const upper5 = num.filter((number) => number > 5);
const upper10 = num.filter((number) => number > 10);

const between5n10 = num.filter((number) => number > 5 && number < 10);

console.log(num);
console.log(upper5);
console.log(upper10);
console.log(between5n10);

/* 2.map */
// 배열의 요소들을 조건에 맞게 변화시킴
// 기존 배열의 변화는 없음
const squared = num.map((item) => item ** 2);
console.log(squared);

/* 3. reduce */
//누적연산을 보여줌

let sum = num.reduce((a, b) => a - b); //모든 배열의 합을 return
const sumValue = num.reduce((a, b) => a + b, 10); //모든 배열의 합에 파라미터 10까지 더한 값을 return

console.log("sum:", sum);
console.log(sumValue);
const students = [
	{ name: "a", age: 17 },
	{ name: "b", age: 22 },
	{ name: "c", age: 50 },
];

const ages = students.map((student) => student.age); //student의 age만 뽑아내서 새로운 배열에 저장
sum = ages.reduce((a, b) => a + b, 0);
console.log("Student's age average is", Math.trunc(sum / students.length)); //Math.trunc()는 소수점 없애기 함수
