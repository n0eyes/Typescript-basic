interface User{
  age: number;
  name: string;
}

//변수에 인터페이스를 활용.
let john: User = {
  age: 25,
  name: 'john'
}

//함수에 인터페이스를 활용
function getUser(user:User){
  console.log(user)
}
const someone = {
  age: 14,
  name: 'someone'
}
getUser(someone);

// 함수의 스펙에 인터페이스를 활용
interface AddFunction {
  (a:number, b:number):number
}
let sss: AddFunction = function(a:number,b:number){
  return a+b;
}

//인덱싱
//프로퍼티에 대한 타입 정의가 아닌
//인덱싱으로 접근할 때의 정보에 대한 타입 정의
interface StringArray {
  [index: number]: string
}

let array = ['a','b','c'];
// array[0] = 10; // X
array[0] = 'ko'; //O

//딕셔너리 패턴
interface StringRegexDictionary{
  [name:string]: RegExp
}
let object: StringRegexDictionary = {
  cssFile: /\.css$/,
  jsFile: /\.js$/,
}

//인덱싱 및 프로퍼티 타입 정의 함께 사용
interface MixTest {
  [index:number]:string,
  name:string
}
const test : MixTest ={
  name: 'Anne'
}
test[0] = 'Anne'


//인터페이스 확장
interface Person{
  name: string,
  age: number
}
interface Developer extends Person {
  // name: string,
  // age: number,
  language: string,
}

let me: Developer ={
  name: 'noeyes',
  age: 26,
  language: 'js'
}