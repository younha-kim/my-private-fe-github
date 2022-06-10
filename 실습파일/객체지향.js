// //객체지향 프로그래밍 
// // 1. 객체의 메소드를 이용한 객체지향 프로그래밍
// let conuter1 = {
//   value: 0,

//   increase: function(){
//     this.value++;
//   },

//   decrease: function(){
//     this.value--;
//   },

//   getValue: function(){
//     return this.value;
//   }
// }

// conuter1.increase();
// conuter1.increase();
// conuter1.decrease();
// console.log(conuter1.value);
// console.log(conuter1.getValue());


// //2. 클로저를 이용한 객체 생성 
// function makeCounter(value){

//   return {
//     increase: function(){
//       value++;
//     },
//     decrease: function(){
//       value--;
//     },
//     getValue: function(){
//       return value;
//     }
//   }
// }

// let counter1 = makeCounter(3);
// let counter2 = makeCounter(3);

// counter1.increase()
// console.log(counter1.getValue());
// counter2.increase()
// console.log(counter2.getValue());


//3. 클래스와 인스턴스를 통한 객체지향 
//3.1 클래스 
// function Car(color){
//   return color;
//  }

// class Car {
//   constructor(color, brand, number, size){
//     this.color = color;
//     this.brand = brand ;
//     this.number = number ;
//     this.size = size;
//   }

//   refuel(){
//     return console.log('fullcharged')
//   }

//   putAccel(){
//     return console.log('go faster')
//   }

//   putBreak(){
//     return console.log('decrease speed')
//   }
// }

// //3.2 인스턴스 
// let hisK5 = new Car('black', 'kia', '123바456', 'middle');
// console.log(hisK5.color);
// console.log("==================")
// console.log(hisK5)
// console.log("==================")
// hisK5.putAccel();
// hisK5.putBreak();

// let oldObj = {
//   a : 1,
//   b : 2,
// }
// const newOBJ = Object.create(oldObj);
// console.log(oldObj);
// console.log(newOBJ.__proto__ === oldObj);


// function myName(){
//   console.log(`i am is ${this.name}`)
// }

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }
// Person.prototype.me = myName;
// console.log()
// const youngha = new Person('youngha')

// youngha.me();

function me (){
};

console.log(typeof me.prototype);