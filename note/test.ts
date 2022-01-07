// interface Dictionary<T> {
//   [key: number]: T;
// }

// let keys: keyof Dictionary<number>; // 숫자
// // let values: Dictionary<number>['foo']; // 오류, 프로퍼티 'foo'는 타입 'Dictionary<number>'에 존재하지 않습니다.
// let value: Dictionary<number>[42]; // 숫자
// console.log(keys)


interface Fooo1{
  name: string;
}
let fooo1: Fooo1;

class Fooo2 {
  name: string;
}
let fooo2 = new Fooo2();
console.log(fooo1 === fooo2)