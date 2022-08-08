


function mainContentsComp(props) {
  props = typeof props === 'object' ? props : console.log('type error');
  return(`
  <${props.tag} id="${props.idLeftBox}">
        <ul id="${props.idList}" class="list">
          <li>Character</li>
          <li>Intention</li>
          <li>Profile</li>
          <li>Project</li>
          <li>Contact</li>
          <li></li>
        </ul>
      </${props.tag}>
  `
  );
}

const mainContentsObj = {
  tag : 'div',
  idLeftBox : 'left-box' ,
  idList :'list',
}

const mainContent = ()=>{
  return(
    `${mainContentsComp(mainContentsObj)}`
  );
}

export default mainContent();