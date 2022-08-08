import mainContent from "./module/main.js"
import menuContent from "./module/menu.js"
import profileContent from "./module/profile.js";

const root = document.getElementById('root');
const sections = root.children;
const pageContent = sections[1].children[0];
const menu = sections[1].children[1];
// pageContent = [] 
// hashchage에 따라 컨텐츠 내용 바뀔 수 있도록
// hash가 ===  같다면 innerHTML의 내용을 배열 pageContent에서 해당하는 해쉬 내용으로 페이지 변환 시키기 

// console.log(root);
// console.log(sections.length);
console.log(menu);
console.log(pageContent);

// pageContent.innerHTML = `${profileContent}` ; 
menu.innerHTML = `${menuContent}` ;