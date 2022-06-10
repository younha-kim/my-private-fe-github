// //1. 다른 함수를 인자로 받는 경우 

// function callBack(num){
//   return num * 2
// }

// function doubleNum(func, num){
//   return func(num);
// }

// let output = doubleNum(callBack, 3);
// console.log(output);

// //2. 함수를 리턴하는 경우 
// function sumNumbers(number){
//   return function(otherNumber){
//     return number + otherNumber;
//   }
// }

// let output = sumNumbers(2)(3);
// console.log(output);

// //sumNumber이 리턴하는 함수를 클로저처럼 변수에 저장하여 활용가능함.
// let add3 = sumNumbers(2);
// console.log(add3(3));

// // 3.함수를 인자로 받고, 함수를 리턴하는 함수
//  function doubleNumbers(num){
//   return num + num;
// }

// function someFunction(func, num){
//   const doubled = func(num);

//   return function(otherNumber){
//     return otherNumber + doubled;
//   }
// }

// console.log(someFunction(doubleNumbers, 5)(3));

// let doubbledFive = someFunction(doubleNumbers,5)
// console.log(doubbledFive(3));





// function removeElement(arr, discarder/*비교인자*/) {
//   // TODO: 여기에 코드를 작성합니다.
//   let newarr = [];
//   return arr.filter(function(index /*for문의 i처럼 돌면서 비교 */){
//     if(index !== discarder){
//        newarr.push(index) // 조건 입력하기 
//        return true // true면 따로 분류하기 
//     } 
//     return false 
//   })
 
// }


// removeElement([1,2,3,4,5,] ,4);



// function filterOddLengthWords(words) {
//   // TODO: 여기에 코드를 작성합니다.
//  return words.filter(function(index){ //index = words[0] , words[1] ....
//     if(index.length % 2 === 1){
//       return true  // true 또는 false일 때, 새로운 배열을 생성한다.
//     }
//     return false
//   });
// } 


    // filter는 배열의 각 요소에 인자로 전달받은 함수를 적용하고,
    // 그 결과가 true인 요소만을 갖는 배열을 리턴합니다.

    // function getOnlyNames(arr) {
    //   // TODO: 여기에 코드를 작성합니다.
    //   return arr.filter(function(el){
    //     return arr[el]   
    //   }) 
    // }
    // function getLengthOfLongestElement(arr) {
    //   // 여기에 코드를 입력하세요
    //   return arr.reduce(function(a,b){
    //     if(a.length > b.length){
    //       return a.length
    //     } else {
    //       return b.length
    //     }
    //   },0)
    // }

    // console.log(getLengthOfLongestElement(['one', 'two', 'no']))



    // function makeAddressBook(addressBook, user) {
    //   let firstLetter = user.name[0];
    
    //   if(firstLetter in addressBook) {
    //     addressBook[firstLetter].push(user);
    //   } else {
    //     addressBook[firstLetter] = [];
    //     addressBook[firstLetter].push(user);
    //   }
    
    //   return addressBook;
    // }
    
    // let users = [
    //   { name: 'Tim', age: 40 },
    //   { name: 'Satya', age: 30 },
    //   { name: 'Sundar', age: 50 }
    // ];
    
    // console.log(users.reduce(makeAddressBook, {}));



    // function lessThan100(number) {
    //   return number < 100;
    // }
    
    // function getElementsLessThan100AtProperty(obj, property) {
    //   // TODO: 여기에 코드를 작성합니다.
    //    let newarr = obj[property]
    //   if(Array.isArray(obj[property]) === true){
    //     return newarr.filter(function(el){
    //        return lessThan100(el)
    //     }); 
    //     } 
    //   }
    //   const obj = {
    //     key: [1000, 20, 50, 500],
    //   };
      
    //   let output = getElementsLessThan100AtProperty(obj, 'key');
    //   console.log(output)
    //}

    
  function getLongestElement(arr) {
    return arr.reduce(function (acc, cur) {
      if (acc.length >= cur.length) {
        console.log(acc,cur, 1)
        return acc;
      } else {
        console.log(acc,cur, 0)
        return acc = cur;
      }
    }, '');
  }

let output = getLongestElement(['one', 'two', 'three', 'one']);
console.log(output); // --> 'three'

// output = getLongestElement(['one', 'two', 'wow']);
// console.log(output); // --> 'one'
