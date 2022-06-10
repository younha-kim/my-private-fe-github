function makePageNumbers(array){
  let pagenationNumbers = document.querySelector(".pagenumbers");
  //let numberObj = {};
  for(let i  = 1 ; i <= parseInt(array.length / 10) + 1 ; i++){
    
   let number = document.createElement("div");
   number.textContent = `${i}`;
   pagenationNumbers.append(number);
  }
}
makePageNumbers(agoraStatesDiscussions);