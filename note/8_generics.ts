
// function logText(text) {
//   console.log(text);
//   return text;
// }

// logText(10);
// logText('hi')
// logText(true)

// function logText<T>(text:T):T{
//   console.log(text);
//   return text;
// }
// logText<string>('hi');



// function logText(text: string){
//   text.split('').reverse().join();
//   return text;
// }

// function logNumber(text: number){
//   return text;
// }
//단순히 다른 타입을 위한 매우 비효율적인 로직
// logText('hi bye')
// logNumber(10)

//유니온 타입으로 해결하려고 했을 때 발생하는 문제점
function logText(text: string | number){
  console.log(text)
  //string 과 number의 공통 메서드만 사용 가능한 문제 발생
  return text;
}
//a의 타입 또한 string | number가 되어버리는 문제 발생
const a = logText('a');
// a.split('') 따라서 Error 발생
logText(10)


//제네릭을 활용하여 위와 같은 문제 해결 가능
function logGeneric<T>(text: T): T {
  console.log(text);
  return text;
}
const string = logGeneric<string>('a');
const number = logGeneric<number>(4);