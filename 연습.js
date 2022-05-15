
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
