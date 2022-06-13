// function readVertically(arr) {
//   // TODO: 여기에 코드를 작성합니다.
//   let newstr = ""
//   let longestElement = findLongestElement(arr)
//   for(let j = 0 ; j < arr.length ; j++){
//     for(let i = 0 ; i < longestElement.length ; i++){
//       newstr = newstr + arr[j][i];
//     }
//     return newstr 
//   }
// }
// // [0 ,0] [1, 0] [0, 1], [1, 1] 

// function findLongestElement(arr){
//   let compare = 0
//   let reusltCompare = ""
//   for( let i = 0 ; i < arr.length ; i++ ){
//     if(arr[i].length > compare){
//       compare = arr[i].length
//       reusltCompare = arr[i];
//     }
//   }

//   return reusltCompare
// }


//배열의 인덱스를 갱신하여 푸는 문제 .
// function readVertically(arr) { 
//   let temp = [];
//   for (let i = 0; i < arr.length; i++) {
//     let str = arr[i];
//     for (let j = 0; j < str.length; j++) {
//       if (temp.length === j) {
//         temp.push(str[j]); // hw, eo, ll, lr, od
//       } else {
//         temp[j] = temp[j] + str[j];
//       }
//     }
//   }
//   console.log(temp);

//   let result = '';
//   for (let i = 0; i < temp.length; i++) {
//     result = result + temp[i];
//   }

//   return result;
// }


let input = [
  //
  'hello',
  'wolrd',
];
let output = readVertically(input);
console.log(output); // --> 'hweolllrod'

input = [
  //
  'hi',
  'wolrd',
];
output = readVertically(input);
console.log(output); // --> 'hwiolrd'
// findLongestElement(input)

// console.log(newstr)