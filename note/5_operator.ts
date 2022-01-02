// function logMessage(value:any){
//   console.log(value)
// }
// logMessage('hello')
// logMessage(100); //에러를 해결하기 위해선 any를 써야 함

//Union Type
//any를 최소화 하면서 한 개 이상의 타입을 적용 가능하다.
function logMessage(value: string | number){
  if(typeof value === 'number'){
    // ...
  }
  if(typeof value === 'string'){
    // ...
  }
  throw new TypeError('value must be string or number')
  //타입을 줄여나가며 추론하는 것 => 타입 가드
}
logMessage('hi')
logMessage(100);

interface FE_Developer {
  name: string;
  skill: string;
}
interface Person {
  name: string;
  age: number;
}
function askSomeone_1(someone: FE_Developer | Person){
  someone.name;
  // someone.skill 에러 발생
  // someone.age 에러 발생
  
  // 유니온 타입의 특징 중 하나로, 두 타입의 공통된 속성만 사용이 가능하며
  // 그렇지 않은 속성의 경우 안전하지 않은 상황으로 판단하며 사용이 불가하다.
  // 실무에서 사용하는 경우가 상대적으로 더 잦다.
}
askSomeone_1({name: 'foo1', skill: 'js'});
askSomeone_1({name: 'foo2', age: 26})

//인터섹션 타입

let impossible: string & number; //never로 프리뷰된다.

function askSomeone_2(someone: FE_Developer & Person){
  someone.name;
  someone.skill //에러 발생 X
  someone.age //에러 발생 X
  
  //인터섹션 타입은 두 타입의 속성 모두를 포함한다.
}
askSomeone_2({name: 'foo3', skill: 'java', age: 26})
