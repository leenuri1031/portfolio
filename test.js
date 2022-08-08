let count = 0;
let timer = setInterval( () => {
  if(count <10) {
    count++;
    console.log(count);
  } else {
    clearInterval(timer);
    console.log(`변수 count가 ${count}이므로, 함수 timer가 종료 되었습니다.`);
  }
}, 500);

function first(tagName, parent, tagContent ="") {
  // 함수 first (변수 tagName, parent, tagContent = "" -> 기본값이 "")
  tagName = typeof tagName === 'string' ? tagName : console.error(`${tagName} parameter must be a string`);
  //  변수 tagName은 tagName이 문자열이면 tagName을 문자열이 아니라면 콘솔에 에러를 보여줌
  let setElem = document.createElement(tagName);
  // 변수 setElem은 tagName을 생성하는 함수로 지정
  setElem.innerHTHML = tagContent;
  // 새로 만들어질 요소에 변수 tagContent를 넣어줌
  parent.appendChild(setElem);
  // parent 의 자식으로 지정해 놓은 setElem을 생성해줌
}

const pokemonArr = ["피카츄", "라이츄", "파이리", "꼬부기", "버터풀", "야도란", "피죤투", "또가스"];

for(let i = 0; i < pokemonArr.length; i++) { 
  console.log(pokemonArr[i]);
}