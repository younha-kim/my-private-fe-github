const menus = document.querySelectorAll("button");
let btnAmericano = menus[0]
let btnCaffeelatte = menus[1]

btnAmericano.onclick = handleClick;
btnCaffeelatte.onclick = handleClick;

function handleClick(){
  herethemenue = this.textContent;
  console.log(herethemenue);
  return herethemenue;
}

let aElement = document.createElement('a')
aElement.setAttribute('id', 'javascript')
aElement.textContent = 'awesome'

document.getElementById('world').appendChild(aElement);


let ele = document.querySelector('.newEle');
let parent = document.querySelector('.parent');
  
parent.insertBefore(aElement, null); //맨 끝에 삽입
parent.insertBefore(aElement, parent.firstChild); //맨 앞에 삽입

for(let classlist of parent.classList){
  console.log(classlist.textContent);
};