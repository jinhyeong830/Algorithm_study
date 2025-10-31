// 팩토리얼
function factorial(n) {
  // 팩토리얼, 어떤 식으로 계산해야하지?
  /*
     1!=1
     2!=1X2
     3!=1X2X3 = 2!X3 
     4!=1X2X3X4 = 3!X4
     5!=1X2X3X4X5 = 4!X5
     ..                 ..
     N!=1X2X3X4X5X..XN = (N-1)!XN
     - 이전의 결과값 X N 을 하면 N에 대한 팩토리얼 숫자가 출력됨
    */

  //   if (n == 1) { // 하나만 처리되어 이써도 상관없음.
  if (n == 1 || n == 2) {
    return n; //1!, 2!의 결과는 먼저 구해주자
  } else {
    // 3! 부터는 이전의 결과값을 연산에 활용
    return factorial(n - 1) * n;
  }
}
console.log(" === factorial recursion === ");
console.log("5! =", factorial(5)); // 5! = 1X2X3X4X5 = 120
console.log("3! =", factorial(3)); // 3! = 1X2X3 = 6
console.log("8! =", factorial(8)); // 5! = 1X2X3X4X5X6X7X8 = 40320

// 피보나치 수
/* 
0 1 1 2 3 5 8 13 21 34 ....
피보나치 수의 일반항은 
f(0)=0, f(1)=1, f(2)=1
f(n) = f(n-1) + f(n-2)
(참고, 피보나치의 첫번째 항을 1로 보는 시선도 있음.
하지만 어차피 전개되는 숫자들은 같기 때문에 크게 중요하진 않음)
*/

function fibonacci(n) {
  if (n == 0 || n == 1) {
    return n;
  } else {
    // 팩토리얼 같은 경우엔 사실n==1일 때만 처리되어도 괜찮지만
    // 피보나치는 이전 항을 두 개 사용하기 때문에,
    // 반드시 n이 1과 2일 경우 모두 처리되어 있어야 함
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

console.log("fibonacci 3rd number is", fibonacci(3));
console.log("fibonacci 7th number is", fibonacci(7)); // 13
console.log("fibonacci 9th number is", fibonacci(9)); //34
