
  // function testTs(name: string): string {
  //   return 'hello:' + name
  // }
  
  // let currName: string = 'mx'
  // console.log(testTs(currName))


  // let something;
  // something = 'seven';
  // something = 7;

  // console.log(something)

  // let myFavoriteNumber = 'seven';
  // myFavoriteNumber = 7;

  // function getLength(something: string | number): number {
  //   return something.length;
  // }


// interface Person {
//   name: string;
//   age?: number;
//   [propName: string]: string;
// }

// let tom: Person = {
//     name: 'Tom',
//     age: 25,
//     gender: 'male',
// // };
// interface Cat {
//   name: string;
//   run(): void;
// }
// interface Fish {
//   name: string;
//   swim(): void;
// }

// function isFish(animal: Cat | Fish) {
//   if (typeof animal.swim === 'function') {
//       return true;
//   }
//   return false;
// }

// window.foo = 1;

// (window as any).foo = 1;

// interface Cat {
//   run(): void;
// }
// interface Fish {
//   swim(): void;
// }

// // 若直接使用 cat as Fish 肯定会报错
// // 这样写编译没问题 但是很可能导致运行时错误
// function testCat(cat: Cat) {
//   return (cat as any as Fish);
// }

// interface Animal {
//   name: string;
// }
// interface Cat {
//   name: string;
//   run(): void;
// }

// const animal: Animal = {
//   name: 'tom'
// };

// const cat: Cat = {
//   name: 'mx',
//   run() {
//     console.log('----')
//   }
// }
// let tom = animal as Cat;

// let tom: Cat = animal;
// let tom: Animal = cat;


// function getCacheData<T>(key: string): T {
//   return (window as any).cache[key];
// }

// interface Cat {
//   name: string;
//   run(): void;
// }

// const tom = getCacheData<Cat>('tom');
// tom.run();

// enum Days {Sun = 4, Mon = 1, Tue, Wed, Thu, Fri, Sat};

// console.log(Days["Sun"] === 4); // true
// console.log(Days["Mon"] === 1); // true
// console.log(Days["Tue"] === 2); // true
// console.log(Days[4]); // true

// class Animal {
//   private name;
//   public constructor(name) {
//     this.name = name;
//   }
// }

// let a = new Animal('Jack');
// console.log(a.name);
// a.name = 'Tom';


// class Animal {
//   public name;
//   protected constructor(name) {
//     this.name = name;
//   }
// }
// class Cat extends Animal {
//   constructor(name) {
//     super(name);
//   }
// }

// let a = new Animal('Jack');

// let b = new Cat('mm')

// type gg = String | undefined 

// function mx<T extends gg>(cc: T):T | boolean {
//   if(typeof cc === 'string') {
//     return undefined
//   } else {
//     return true
//   }
// }
// const arya = [1, 'dd', '5', false] as const

// const dd = typeof arya

// console.log(dd)

function copyFields<T extends U, U>(target: T, source: U): T {
  for (let id in source) {
      target[id] = (<T>source)[id];
  }
  return target;
}

let x = { a: 1, b: 2, c: 3};

copyFields(x, { b: 10, d: 20 });



