


function mainContentsComp(props) {
  props = typeof props === 'object' ? props : console.log('type error');
  return(`
  <${props.tag} id="${props.idLeftBox}"  data-hash="Main">
        <ul id="${props.idList}" class="list">
          <li data-hash="Character">Character</li>
          <li data-hash="Intention">Intention</li>
          <li data-hash="Profile">Profile</li>
          <li data-hash="Project">Project</li>
          <li data-hash="Contact">Contact</li>
          <li></li>
          <li></li>
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