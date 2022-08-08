import mainContent from "./module/main.js"
import menuContent from "./module/menu.js"
import profileContent from "./module/profile.js";
import characterContent from "./module/character.js";
import { functionObj } from "./module/function_obj.js";
import { colorArr } from "./module/arr.js";

const root = document.getElementById('root');
const sections = root.children;
const pageContent = sections[1].children[0];
const menuBox = sections[1].children[1];

// pageContent = [] 
// hashchage에 따라 컨텐츠 내용 바뀔 수 있도록
// hash가 ===  같다면 innerHTML의 내용을 배열 pageContent에서 해당하는 해쉬 내용으로 페이지 변환 시키기 

// pageContent.innerHTML = `${characterContent}` ; 
menuBox.innerHTML = `${menuContent}` ;
// console.log(root);
// console.log(sections.length);
console.log(menuBox);
console.log(pageContent);

const menu = menuBox.children[0].children[0];
// console.log(menu);
// console.dir(rightBox);
menu.addEventListener('mouseover', ()=> {
  // console.log('mouseover_event');  
  functionObj.boxStyle(menu, '550px', '550px',colorArr[0], '50%');
  menu.innerHTML = `
  Home</br>
  Profile</br>
  Character</br>
  Intention</br>
  Project</br>
  Contact
  `;
  menu.style.paddingLeft = '20vh';
});

menu.addEventListener('mouseout', ()=> {
  console.log('mouseout_event');
  functionObj.boxStyle(menu, '300px', '300px',colorArr[0], '50%');
  menu.innerHTML = `menu`;
  menu.style.paddingLeft = '10vh';

})