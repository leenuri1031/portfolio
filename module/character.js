import { hobby, like, motto } from "./text.js";

function characterImageContentsComp(props){
  props = typeof props === 'object' ? props : console.log('type error');
  return(`
  <${props.tag} id="${props.img}">
    <${props.tag} class="${props.imgClass}">img</${props.tag}>
    <${props.tag} class="${props.imgClass}">img</${props.tag}>
    <${props.tag} class="${props.imgClass}">img</${props.tag}>
    <${props.tag}></${props.tag}>
  </${props.tag}>
  `);
}


function characterTextContentsComp(props){
  props = typeof props === 'object' ? props : console.log('type error');
  return(`
  <${props.tag} id="${props.textId}">
    <${props.tag}>
      <${props.tag}>Hobby</${props.tag}>
      <${props.tag}>${hobby}</${props.tag}>
    </${props.tag}>
    <${props.tag}>
      <${props.tag}>Like</${props.tag}>
      <${props.tag}>${like}</${props.tag}>
    </${props.tag}>
    <${props.tag}>
      <${props.tag}>Motto</${props.tag}>
      <${props.tag}>${motto}</${props.tag}>
    </${props.tag}>
    <${props.tag}></${props.tag}>
    <${props.tag}></${props.tag}>
  </${props.tag}>
  `);
}


const characterContentObj = {
  tag :'div',
  img : 'left-img',
  imgClass : 'img-style',
  textId : 'right-text'
}

const characterContent = () => {
  return(
    `
    <div id="character"  data-hash="Character">
      ${characterImageContentsComp(characterContentObj)}
      ${characterTextContentsComp(characterContentObj)}
    </div>
    `
  );
}

export default characterContent();






