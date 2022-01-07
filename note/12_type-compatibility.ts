interface First_Class{
  job: string
}
interface Second_Class{
  job: string,
  skill: string,
}

let warrior: First_Class = {
  job: 'warrior'
}

let fighter: Second_Class = {
  job: 'fighter',
  skill: 'rage'
}

warrior = fighter; // ok
// fighter = warrior; // error | warrior에 skill 속성이 없기 때문!

//함수 호환
let addNumber = (a:number) =>{
  // ..
}

let sumNumber = (a:number , b:number) =>{
  // ...
}

// 인터페이스와 달리 구조적으로 더 큰 함수에 작은 함수가 호환된다.
// addNumber = sumNumber; // error
sumNumber = addNumber; //


//enum 호환
enum Brand{
  Nike,
  Adidas
}
enum People {
  Seyeon,
  Semin
}
let brand = Brand.Nike;
// enum끼리는 호환되지 않는다.
// brand = People.Semin;

// number타입만 호환 가능하다.
brand = 3;


//제네릭 호환
interface Empty<T> {

}

interface NotEmpty<T>{
  data: T;
}

let empty1: Empty<string>;
let empty2: Empty<string>;

// 타입의 할당 여부로 호환 여부를 정한다.
// 할당된 타입이 없으므로 호환 가능하다.
empty1 = empty2;

let empty3: NotEmpty<string>;
let empty4: NotEmpty<number>;

//타입이 할당되었고, 할당된 타입이 서로 다르기에 호환이 불가능하다.
// empty3 = empty4; // error


// class 호환
class ComTest1 {
  static test1: string;
  constructor() {
    // ...
  }
  do(){
    
  }
}
class ComTest2 {
  static test2: string;
  constructor() {
    // ...
  }
  
}

let comTest1 = new ComTest1();
let comTest2 = new ComTest2();

// 1. class도 함수와 같이 큰 구조에 작은 구조를 호환하는 방식이다.
// 2. class는 static 멤버와 속성을 제외하고 호환 가능 여부를 비교한다.
// 3. 따라서 위 예제에서 do함수를 삭제하면 호환이 가능하다.
// 4. 따라서 위 두 class에서 static을 제거하면 호환이 불가능하다.

// comTest1 = comTest2; // error 