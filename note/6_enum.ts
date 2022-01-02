// enum Shoes{
//   Nike, // 0
//   Adidas // 1
// }
//별도로 값을 지정하지 않으면 number가 등록된다.


//enum 타입
//객체이며 비슷한 종류의 값들을 묶을 때 사용
enum Shoes{
  Nike = '나이키',
  Adidas ='아디다스'
}
let myShoes = Shoes.Nike;
console.log(myShoes) 

//ex
enum Answer {
  Yes = 'Yes',
  No = 'No'
}
function askQuestion(answer: Answer){
  if(answer === Answer.Yes){
    console.log('ok')
  }
  if(answer === Answer.No){
    console.log(`no`)
  }
}
console.dir(Answer)
askQuestion(Answer.Yes)
//enum에서 제공하는 값만 인자로 넘길 수 있다.
