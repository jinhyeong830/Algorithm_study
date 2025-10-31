// 2) 가장 긴 문자열 찾기
export function longest(xs: string[]): string {
  if (xs.length === 0) return '';
  let ans = xs[0];
  for (let i = 1; i < xs.length; i++) {
    if (xs[i].length > ans.length) ans = xs[i];
  }
  return ans;
}

// 3) 키로 매핑하기 (제네릭 + keyof)
export function mapBy<T, K extends keyof T>(
  list: T[],
  key: K
): Record<T[K] & (string | number | symbol), T> {
  const out = {} as Record<T[K] & (string | number | symbol), T>;
  for (const item of list) {
    const k = item[key];
    if (typeof k === 'string' || typeof k === 'number' || typeof k === 'symbol') {
      (out as any)[k] = item; // 인덱싱 단언(값은 T로 안전)
    }
  }
  return out;
}

// 4) 부분 업데이트 (유틸리티 타입)
export interface User { id: string; name: string; age?: number; }
export function updateUser(user: User, patch: Partial<User>): User {
  return { ...user, ...patch };
}

// 5) 안전한 꺼내기 (옵셔널 체이닝 + 널 병합)
type Profile = { nickname?: string };
type User2 = { profile?: Profile };
export function getNickname(u?: User2): string {
  return u?.profile?.nickname ?? 'guest';
}

// 6) 결과 타입 보장 (제네릭 반환)
export function mapArray<T, R>(arr: T[], f: (x: T) => R): R[] {
  const res: R[] = [];
  for (let i = 0; i < arr.length; i++) res.push(f(arr[i]));
  return res;
}

/* 간단 테스트 예시
longest(['a','abcd','abc']) // 'abcd'
mapBy([{id:'u1',n:1},{id:'u2',n:2}], 'id') // {u1:{…}, u2:{…}}
updateUser({id:'u1', name:'Kim'}, {age:30}) // {id:'u1', name:'Kim', age:30}
getNickname({ profile:{ nickname:'allie' }}) // 'allie'
getNickname({}) // 'guest'
mapArray([1,2,3], n => n.toString()) // ['1','2','3']
*/