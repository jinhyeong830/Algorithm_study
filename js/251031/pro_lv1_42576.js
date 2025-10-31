function solution(participant, completion) {
    // 둘 다 배열
    // 먼저 풀이 방법 작성해보기
    
    // 1. 두 배열 모두 정렬,
    // 2. 순서가 기본적으로 똑같다가 틀려지는 순간을 찾는다.
    // 3. 틀려지는 순간이 바로 completion 에 사람 이름이 빠진 순간 
    const orderedParticipant = participant.sort()
    const orderedcompletion = completion.sort()

    
    let findIdx;
    for(let i = 0 ; i<orderedParticipant.length;i++){
        if(orderedParticipant[i]!==orderedcompletion[i]){
            findIdx=i;
            break;
        }
    }

    
    let answer = orderedParticipant[findIdx]
    
    return answer;
}
console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]))
console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"]	, 	["josipa", "filipa", "marina", "nikola"]))
console.log(solution(["mislav", "stanko", "mislav", "ana"]	, ["stanko", "ana", "mislav"]))


////// GPT 풀이 ////////
// 🔹 Map은 key-value(키-값) 형태로 데이터를 저장하는 자료구조입니다.
//     → 객체와 비슷하지만, key로 문자열 외에도 모든 자료형 사용 가능
//     → 삽입 순서가 유지되며, 검색 속도가 빠릅니다 (평균 O(1))
function solution(participant, completion) {
    // 순서
    // 1. 맵에 참가자 이름으로 동명이인 개수를 맵에 기록
    // 2. 완주자 목록을 순화하며 
  const participantMap = new Map(); // 참가자 이름을 key, 등장 횟수를 value로 저장할 예정

  // 1️⃣ 참가자 배열 순회하며 각 이름의 출현 횟수를 기록
  for (const name of participant) {
    // 이미 등록된 이름이면 기존 값 +1, 없으면 0에서 +1
    participantMap.set(name, (participantMap.get(name) || 0) + 1);
  }

  // 2️⃣ 완주자 목록을 순회하며 등장 횟수를 하나씩 감소시킴
  for (const name of completion) {
    participantMap.set(name, participantMap.get(name) - 1);
  }

  // 3️⃣ 완주하지 못한 사람은 count가 0이 아닌 상태로 남게 됨
  // 맵에서만 가능한 문법
  for (const [name, count] of participantMap) {
    if (count > 0) return name; // 남은 1명이 미완주자
  }
}