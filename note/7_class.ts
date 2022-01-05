//readonly
// class Developer {
//   readonly name: string;
//   constructor(readonly theName: string) {
//       this.name = theName;
//   }
// }
// let Hulk = new Developer("Hulk");
// Hulk.name = "Hulk"; //error


//Accessor
// class Developer {
//   position: string;
  
//   get position(): string {
//     return this.position;
//   }

//   set position(newValue: string) {
//     if (newValue && newValue.length > 5) {
//       throw new Error('이름이 너무 깁니다');
//     }
//     this.position = newValue;
//   }
// }
// const josh = new Developer();
// josh.position = 'FE'; // Error
// josh.position = 'BE';


// Abstract Class
abstract class Developer {
  abstract coding(): void; 
  drink(): void {
    console.log('drink sth');
  }
}

class FrontEndDeveloper extends Developer {
  coding(): void {
    
    console.log('develop web');
  }
  design(): void {
    console.log('design web');
  }
}
// const dev = new Developer(); //Error
const josh = new FrontEndDeveloper();
josh.coding(); 
josh.drink(); 
josh.design(); 
