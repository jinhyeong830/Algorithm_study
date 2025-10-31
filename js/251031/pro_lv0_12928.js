// 약수의 합
// https://school.programmers.co.kr/learn/courses/30/lessons/12928?language=javascript
function solution(n){
    if(n==0||n==1) return n;
    
 	var answer=1;
    let checkNum = parseInt(n%2===0? n/2: n/3);
	for(let i=2; i<=checkNum;i++){
		if(n%i===0)	answer+=i;
	}

	return answer+n;
}
// 내가 푼건디. .별로 좋은 풀이는 아닌 것 가틈

///// 아래는 GPT 풀이 /////
function solution(n) {
  // n이 0 또는 1일 때는 약수가 자기 자신뿐이므로 그대로 반환
  if (n <= 1) return n;

  let sum = 0;
  // 약수는 √n을 기준으로 대칭이므로, √n까지만 탐색하면 충분함
  const r = Math.floor(Math.sqrt(n)); // (allie) 핵심인 것 같음

  for (let i = 1; i <= r; i++) {
    // i가 n의 약수라면 (즉, 나누어떨어진다면)
    if (n % i === 0) {
      const j = n / i;  // i와 짝을 이루는 약수 (n/i)

      // i를 더하고,
      sum += i;

      // 제곱수의 경우 i와 j가 같으므로 중복되지 않도록 조건 확인
      if (j !== i) sum += j;
    }
  }

  // 모든 약수를 더한 결과 반환
  return sum;
}