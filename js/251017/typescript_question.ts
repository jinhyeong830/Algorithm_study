/**
 * 🎯 TypeScript 사전 코딩테스트 10분 문제 세트 (2~6번)
 * 난이도: 쉬움~중간
 * any 사용 금지 / 타입 명시 필수
 */

/* ============================================================
   2️⃣ 가장 긴 문자열 찾기
   문자열 배열에서 가장 긴 문자열을 반환하라.
   비어있으면 빈 문자열을 반환.
============================================================ */

export function longest(xs: string[]): string {
  /* --- 풀이 --- */
  if (xs.length === 0) return "";
  let ans = xs[0];
  for (let i = 1; i < xs.length; i++) {
    if (xs[i].length > ans.length) ans = xs[i];
  }
  return ans;
}

/* ============================================================
   3️⃣ 키로 매핑하기 (제네릭 + keyof)
   배열을 받아 특정 키 값으로 매핑한 객체를 반환하라.
============================================================ */

export function mapBy<T, K extends keyof T>(
  list: T[],
  key: K
): Record<T[K] & (string | number | symbol), T> {
  /* --- 풀이 --- */
  const out = {} as Record<T[K] & (string | number | symbol), T>;
  for (const item of list) {
    const k = item[key];
    if (
      typeof k === "string" ||
      typeof k === "number" ||
      typeof k === "symbol"
    ) {
      (out as any)[k] = item; // 안전 단언
    }
  }
  return out;
}

/* ============================================================
   4️⃣ 부분 업데이트 (유틸리티 타입 Partial)
   user와 부분 업데이트 객체를 받아 병합한 새 객체를 반환.
============================================================ */

export interface User {
  id: string;
  name: string;
  age?: number;
}

export function updateUser(user: User, patch: Partial<User>): User {
  /* --- 풀이 --- */
  return { ...user, ...patch };
}

/* ============================================================
   5️⃣ 안전한 꺼내기 (옵셔널 체이닝 + 널 병합)
   user.profile.nickname을 안전하게 반환하고 없으면 'guest'
============================================================ */

type Profile = { nickname?: string };
type User2 = { profile?: Profile };

export function getNickname(u?: User2): string {
  /* --- 풀이 --- */
  return u?.profile?.nickname ?? "guest";
}

/* ============================================================
   6️⃣ 결과 타입 보장하기 (제네릭 반환)
   배열과 변환 함수를 받아 R[] 반환
============================================================ */

export function mapArray<T, R>(arr: T[], f: (x: T) => R): R[] {
  /* --- 풀이 --- */
  const res: R[] = [];
  for (let i = 0; i < arr.length; i++) res.push(f(arr[i]));
  return res;
}

/* ============================================================
   ✅ 간단 테스트 예시
============================================================ */

// console.log(longest(['a', 'abcd', 'abc'])); // 'abcd'
// console.log(mapBy([{id:'u1',n:1},{id:'u2',n:2}], 'id')); // {u1:{…}, u2:{…}}
// console.log(updateUser({id:'u1', name:'Kim'}, {age:30})); // {id:'u1', name:'Kim', age:30}
// console.log(getNickname({ profile:{ nickname:'allie' }})); // 'allie'
// console.log(getNickname({})); // 'guest'
// console.log(mapArray([1,2,3], n => n.toString())); // ['1','2','3']
