import mainContent from "./module/main.js"
import menuContent from "./module/menu.js"

const root = document.getElementById('root');
const sections = root.children;
const menu = sections[1].children[1];
const pageContent = sections[1].children[0];
// pageContent = [] 
// hashchage에 따라 컨텐츠 내용 바뀔 수 있도록

// console.log(root);
// console.log(sections.length);
console.log(menu);
console.log(pageContent);


// sections[0].innerHTML = `<h1 class="title-text">El mundo's portfolio</h1>`;

// sections[1].innerHTML = `${mainContent} ${menuContent}` ; 

menu.innerHTML = menuContent ;