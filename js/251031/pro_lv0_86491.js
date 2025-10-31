/* 
                  size                          result
 [[60, 50], [30, 70], [60, 30], [80, 40]]	     4000
 [[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]]	  120
*/


function solution(sizes) {
    
   const orderedSize = sizes.map((square,i)=>{
        // return square.sort() // 테스트 케이스 중에 문자열이 포함되어 있어서.. 정렬이 제대로 되지 않는 문제가 있나봄 
        return square.sort((a,b)=>a-b)
    })

    const w=[]
    const h=[]

     orderedSize.forEach(element => {
        w.push(element[0])
        h.push(element[1])
    });


    return Math.max(...w)*Math.max(...h)
}

console.log(solution([[60, 50], [30, 70], [60, 30], [80, 40]]))


/// GPT 풀이 ///
// 위의 풀이는 포문이 너무 쓸 데 없이 많은 느낌임,
function solution(sizes) {
  // 결과적으로 필요한 지갑의 가로·세로 최댓값을 저장
  let maxW = 0;
  let maxH = 0;

  // 각 명함을 순회
  for (const [a, b] of sizes) {
    // 명함을 회전해서라도 '긴 변을 가로', '짧은 변을 세로'로 통일
    const w = Math.max(a, b); // 현재 카드의 가로(긴 변)
    const h = Math.min(a, b); // 현재 카드의 세로(짧은 변)

    // 전체 명함 중 가로의 최댓값 갱신
    if (w > maxW) maxW = w;
    // 전체 명함 중 세로의 최댓값 갱신
    if (h > maxH) maxH = h;
  }

  // 지갑은 모든 명함을 담아야 하므로
  // 가로는 '가로 최댓값', 세로는 '세로 최댓값'이 최소 필요 크기
  return maxW * maxH;
}