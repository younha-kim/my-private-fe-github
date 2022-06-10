
//spread 문법
// // function sum(x, y, z){
// //   return x + y + z;
// // }

// // const numbers = [ 1, 2, 3 ];

// // console.log(sum(...numbers));



// rest문법
// function sum(...theArgs) {
//   return theArgs.reduce((previous, current) => {
//     return previous + current;
//   });
// }

// console.log(sum(1,2,3)) // 6
// console.log(sum(1,2,3,4)) // 10



// // 1. 배열 합치기 
// let parts = ['shoulder', 'knees'];
// let lytics = ['head', ...parts, 'and', 'toes'];
// //[ 'head', 'shoulder', 'knees', 'and', 'toes' ]

// arr1 = [...lytics, ...parts];
// console.log(arr1.push(4));



// //2. 배열 복사 
// let arr = [1, 2, 3];
// let arr2 = [...arr]; 
// console.log(arr2);
// console.log(arr);  // arr.slice() 와 유사
// console.log(arr2.push(4));  // 참고: spread 문법은 기존 배열을 변경하지 않으므로(immutable), arr2를 수정한다고, arr이 바뀌지 않습니다.
// let arr3 = arr2.push(4)
// console.log(arr2);
// console.log(arr3);
// // 질문: arr와 arr2의 값은 각각 무엇인가요?



//객체어서 사용하기 
// let obj = {foo: 'bar', x: 42};
// let obj2 = {foo: 'baz' ,y : 13};

// let cloneObj = {...obj};
// let mergedObj = {...obj, ...obj2};

// console.log(cloneObj, mergedObj);
// //{ foo: 'bar', x: 42 } { foo: 'baz', x: 42, y: 13 }
// // 같은 값은 첫번째 의 것을 갖다 씀.




// 함수에서 나머지 파라미터 가져오기 
// function myFun(a, b, ...manyMoreArgs){
//   console.log("a", a);
//   console.log("b", b);
//   console.log("manymoreargs", manyMoreArgs);
// }

// myFun("one", "two", "three", "four", "five","six");

//   // a one
//   // b two
//   // manymoreargs [ 'three', 'four', 'five', 'six' ]


// ////
// const cat = {
//   name : "meow",
//   foo1: function(){
//     const foo2 = function(){
//       console.log(this.name);
//     }
//     foo2();
//   }
// };

// cat.foo1();


// const cat2 = {
//   name: 'meow',
//   foo1: function() {
//     const foo2 = () => {
//       console.log(this.name);
//     }
//     foo2();
//   }
// };

// cat2.foo1();	// meow



// const multiTypeArr = [
//   0, // index: 0
//   1, // index 1
//   'two', // index 2
//   function () { // index 3
//     return 3;
//   },
//   { value1: 4, value2: 5 }, // index 4
//   [6, 7], // index 5 
// ];
// console.log(multiTypeArr[2]) // twi
// console.log(multiTypeArr[5][1])
// console.log(multiTypeArr[4].value1); // 

// const arr = ['zero', 'one', 'two', 'three', 'four', 'five'];

// function passedByReference(refArr) {
//   refArr[1] = 'changed in function';
// }
// console.log(passedByReference(arr));

// console.log(arr);

// const emptyObj = {};

// console.log(typeof emptyObj === 'object')
// console.log(emptyObj.length); // undefined

// const megalomaniac = {
//   mastermind: 'Joker',
//   henchwoman: 'Harley',
//   getMembers: function () {
//     return [this.mastermind, this.henchwoman];
//   },
//   relations: ['Anarky', 'Duela Dent', 'Lucy'],
//   twins: {
//     'Jared Leto': 'Suicide Squad',
//     'Joaquin Phoenix': 'Joker',
//     'Heath Ledger': 'The Dark Knight',
//     'Jack Nicholson': 'Tim Burton Batman',
//   },
// };

// console.log(megalomaniac.length);
// console.log(megalomaniac.mastermind);
// console.log(megalomaniac.henchwoman);
// console.log(megalomaniac.getMembers());
// console.log(megalomaniac.twins['Heath Ledger'] === 'The Dark Knight');

// const megalomaniac = { mastermind: 'Agent Smith', henchman: 'Agent Smith' };

// console.log('mastermind' in megalomaniac);

// const currentYear = new Date().getFullYear();

// const megalomaniac = {
//   mastermind: 'James Wood',
//   henchman: 'Adam West',
//   birthYear: 1970,
//   calculateAge: function (currentYear) {
//     return currentYear - this.birthYear;
//   },
//   changeBirthYear: function (newYear) {
//     this.birthYear = newYear;
//   },
// };
// console.log(currentYear);
// console.log(megalomaniac.calculateAge(currentYear));
// megalomaniac.birthYear = 2000;
// console.log(megalomaniac.calculateAge(currentYear));

// const megalomaniac = {
//   mastermind: 'Brain',
//   henchman: 'Pinky',
//   getFusion: function () {
//     return this.henchman + this.mastermind;
//   },
//   battleCry(numOfBrains) {
//     return `They are ${this.henchman} and the` + ` ${this.mastermind}`.repeat(numOfBrains);
//   },
// };

// console.log(megalomaniac.getFusion());
// console.log(megalomaniac.battleCry(4));

// const obj = {
//   mastermind: 'Joker',
//   henchwoman: 'Harley',
//   relations: ['Anarky', 'Duela Dent', 'Lucy'],
//   twins: {
//     'Jared Leto': 'Suicide Squad',
//     'Joaquin Phoenix': 'Joker',
//     'Heath Ledger': 'The Dark Knight',
//     'Jack Nicholson': 'Tim Burton Batman',
//   },
// };


// function passedByReference(refObj) {
//   refObj.henchwoman = 'Adam West';
// }

// passedByReference(obj);

// console.log(obj.henchwoman);

// const assignedObj = obj;
// assignedObj['relations'] = [1, 2, 3];

// console.log(obj['relations']);


// const copiedObj = Object.assign({}, obj);
// console.log(copiedObj);
// copiedObj.mastermind = 'James Wood';
// console.log(copiedObj.mastermind)

// delete obj.twins['Jared Leto'];
// console.log('Jared Leto' in copiedObj.twins);



// let  [a, b, ...rest] = [ 1, 2, 3, 4, 5,];

// console.log(rest)
// console.log(a, b )

// let  {a,b ,...rest} = {a : 10, b : 20, c: 30, d: 40};
// console.log(a, b, rest) //10 20 { c: 30, d: 40 }

// function firstCharacter(str) {
//   // TODO: 여기에 코드를 작성합니다.
//   let newnum =  str.split(" ");
//   let newarr = [];
  
//   for(i of newnum){
//     newarr.push(i[0]);
//   }
//   return newarr;
// }

// console.log(firstCharacter("안녕 하세오"));
// function firstReverse(str) {
//   // TODO: 여기에 코드를 작성합니다.
  
//     let newstr = "";
//     let i = 0
//     while(str.length > i){
//       newstr = newstr + str[str.length - 1 - i];
//       i++;
//     }
//     return newstr;
//   }

//   let output = firstReverse('codestates');
// console.log(output); // "setatsedoc"

// output = firstReverse('I love codestates');
// console.log(output); // "setatsedoc evol I"
  


// function callbackOnly(callback, response) {
//   // TODO: 여기에 코드를 작성합니다.
//   if(response['status'] === 'fail'){
//     return 'something went wrong'
//   } else if (response.status === 'success'){
//     return callback(response.data)
//   }
// }


// function getDomain(email) {
//   return email.split('@')[1].split('.')[0];
// }

// function getUserId(email) {
//   return email.split('@')[0];
// }

// let output = callbackOnly(getDomain, {
//   status: 'success',
//   data: 'mike@codestates.com',
// });
// console.log(output); // --> codestate


// function handleClick(){
//   console.log("버튼에 비동기 이벤트를 넣는 법")
// }

// let button2 = document.querySelector('button');

// button2.addEventListener('click', () => {
//  handleClick()
// })



// const printString = (string, callback) => {
//   setTimeout(function(){
//     console.log(string);
//     callback();
//   },
//   Math.floor(Math.random() * 100) + 1
//   )
// }
// const printAll = () => {
//   printString("A", () => {
//     printString("B", () => {
//       printString("C", () => {
//       }) 
//     })
//   })  
// }
// // printAll(); // A, B, C


// const resolveAfterRandomSeconds = (message) =>{
//   return new Promise((resolve,reject) => {
//     setTimeout(( )=> {
//       return resolve(message);
//     }, Math.floor(Math.random()*1000)+ 1)
//   })
// }

// resolveAfterRandomSeconds('codestates');


function convertDoubleSpaceToSingle(str) {
  // TODO: 여기에 코드를 작성합니다.

  //문자열을 배열로 바꾼다
  let newstr = ""
  
  for(let i = 0 ; i < str.length ; i++){
    if(str[i-1] !== " " ||  str[i] !== " "){
      console.log(newstr)
      newstr = newstr + str[i]  
    }
  }
return newstr
}

let output = convertDoubleSpaceToSingle('you can  do it');
console.log(output); // --> "string with double spaces"