// 동영상 강의에 나온 코드를 그대로 실습하세요
// TODO : DOM으로부터 필요한 엘리먼트를 불러오세요.

const putUsername = document.querySelector("#username");
const successMessage = document.querySelector(".success-message")
const failurMessage = document.querySelector(".failure-message")

putUsername.onkeyup = function(){




  if(isMoreThan4Length(putUsername.value.length)){
    successMessage.classList.remove("hide");
    failurMessage.classList.add("hide"); 
   } else{
    successMessage.classList.add("hide");
    failurMessage.classList.remove("hide");  
  }

  if(putUsername.value === ""){
    failurMessage.classList.add("hide"); 
  }
};




function isMoreThan4Length(value) {
  // TODO : 동영상 강의를 보고 이 함수를 완성하세요.
  return value >= 4

}

//// password
const putPassword = document.querySelector("#password");
const putPasswordCheck = document.querySelector("#password-retype");
const mismatchMsg = document.querySelector(".mismatch-message");

let check = "";

function isMatch (password1, password2) {
  // TODO : 동영상 강의를 보고 이 함수를 완성하세요.
  if(password1 === password2){
    return true
  }
}

putPassword.onkeyup = function(){

  mismatchMsg.classList.remove("hide"); //일치하지 않습니다.
  check = '0'


    //노멀과 확인이 일치하는데, 일치하지 않는다고 뜰떄, 뜨는거 없애줌.
  if(isMatch(putPassword.value, putPasswordCheck.value) === true && check === '0'){
  
    mismatchMsg.classList.add("hide");  //일치 
    check = '1';
  } 

 
  // if(isMatch(putPassword.value, putPasswordCheck.value) === false && check === '1'){
  //   mismatchMsg.classList.remove("hide"); 
  //   check = '0';
  // }



}

putPasswordCheck.onkeyup = function(){

  mismatchMsg.classList.remove("hide");
  check = '0'; //일치하지 않습니다.

  if(isMatch(putPassword.value, putPasswordCheck.value)){
    mismatchMsg.classList.add("hide");
    check = '1'; // 일치해서 뜨는 거 없을 때
  }
}






///수도코드 

// 1. 아이디 칸에 4글자 이상 담기면 사용할 수 있는 아이디 입니다. 출력 
// 2. 4글자 이전이라면 4글자 이상이어야 합니다. 출력 
// 3. 