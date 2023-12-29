import { functionObj } from "./module/function_obj.js";

const root = document.getElementById('root');
const container = document.getElementById('container');

// console.log(root);
// console.dir(root);
// console.log(container.children[0]);

const menuBox = container.children[1];
// console.log(menuBox);
// console.dir(menuBox);

let mainMenu = document.getElementById('list');
// console.log(mainMenu);
// console.dir(mainMenu.children);

const menuList = [mainMenu.children[0], mainMenu.children[1], mainMenu.children[2], mainMenu.children[3], mainMenu.children[4]];

// console.log(Array.isArray(menuList));
console.dir(menuList[0]);

console.log(menuList[0].style.width);

// menuList[0].addEventListener('mouseenter', (e)=>{
//   console.log('mouse-enter-event');
//   functionObj.size(menuList[0], '250px', '250px');
// });

// menuList[0].addEventListener('mouseleave', (e)=>{
//   console.log('mouse-leave-event');
//   functionObj.size(menuList[0], '150px', '150px');
// });

// functionObj.size(menuList[0], '250px', '250px');

// for(let i = 0; i < 5; i++){
//   console.log(menuList);
// }



