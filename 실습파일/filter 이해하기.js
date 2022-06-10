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



function filterOddLengthWords(words) {
  // TODO: 여기에 코드를 작성합니다.
 return words.filter(function(index){ //index = words[0] , words[1] ....
    if(index.length % 2 === 1){
      return true 
    }
    return false
  });
}
