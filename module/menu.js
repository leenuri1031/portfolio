function menuComp(props) {
  props = typeof props === 'object' ? props : console.log('type error');
return(
  `
  <${props.tag} id="${props.idRightBox}">
  <div>menu</div>
  </${props.tag}>
  `
);
}

const menuContentsObj = {
  tag : 'div',
  idRightBox : 'right-box'
}

const meneContent = ()=>{
  return(
    `${menuComp(menuContentsObj)}`
  );
}

export default meneContent();

