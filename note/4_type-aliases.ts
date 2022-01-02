// interface Human {
//   name: string,
//   age: number
// }

type Human = {
  name: string,
  age: number,
}


const semin : Human ={
  name: '세민',
  age: 20,
}

type FooString = string;
let address : FooString;

type Data = {
  data: string,
  timestamp: number
}
function sendData(data:Data){

}

// 타입 별칭은 인터페이스와 달리 상속이 불가능하다.
// 따라서 확장성이 용이한 인터페이스가 보다 유리한 경우가 많다.
// -타스 공식문서-