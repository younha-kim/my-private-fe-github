function convertListToObject(arr) {
  // TODO: 여기에 코드를 작성합니다.

  let newobj = {};
  for(let i = 0 ; i < arr.length; i++){
    if(arr.length > 0 && newobj[arr[i][0]] === undefined ){
      newobj[arr[i][0]] = arr[i][1]
    }
  }
  console.log(newobj)
  return newobj
}

const arr = [
  ['make', 'Ford'],
  ['model', 'Mustang'],
  ['year', '1964'],
  ['make', 'Bill'],
];

let output = convertListToObject(arr);