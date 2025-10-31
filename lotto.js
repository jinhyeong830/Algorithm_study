async function getLottoNumbers(start = 500, end = 1195) {
  const results = [];

  for (let i = start; i <= end; i++) {
    const url = `https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=${i}`;
    try {
      const res = await fetch(url);
      const data = await res.json();

      if (data.returnValue === "success") {
        results.push({
          drawNo: data.drwNo,          // 회차
          date: data.drwNoDate,        // 추첨일
          numbers: [
            data.drwtNo1,
            data.drwtNo2,
            data.drwtNo3,
            data.drwtNo4,
            data.drwtNo5,
            data.drwtNo6,
          ],
          bonus: data.bnusNo,          // 보너스 번호
        });
      }
    } catch (err) {
      console.error(`❌ ${i}회차 오류:`, err);
    }

    // 서버에 부담 주지 않기 위해 약간의 대기 (0.3초)
    await new Promise(r => setTimeout(r, 300));
  }

  return results;
}

// 실행 예시
getLottoNumbers(1097, 1195).then(data => console.log(data));