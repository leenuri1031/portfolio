


function mainContentsComp(props) {
  props = typeof props === 'object' ? props : console.log('type error');
  return(`
  <${props.tag} id="${props.idLeftBox}">
        <ul id="${props.idList}" class="list">
        <a href="#Character">
          <li data-hash="Character">Character</li>
        </a>
        <a href="#Intention">
          <li data-hash="Intention">Intention</li>
        </a>
        <a href="#Profile">
          <li data-hash="Profile">Profile</li>
        </a>
        <a href="#Project">
          <li data-hash="Project">Project</li>
        </a>
        <a href="#Contact">
          <li data-hash="Contact">Contact</li>
        </a>
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