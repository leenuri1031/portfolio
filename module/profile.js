import { education, introduce, career } from "./text.js";


function profileImageContentsComp(props) {
  props = typeof props === 'object' ? props : console.log('type error');
  return(` 
  <${props.tag} id="${props.img}">
  <${props.tag}>img</${props.tag}>
  <${props.tag}></${props.tag}>
  </${props.tag}>
`);
}

function profiletextContentsComp(props) {
  props = typeof props === 'object' ? props : console.log('type error');
  return(` 
  <${props.tag} id="${props.textId}">
    <${props.tag}>
      <${props.tag} class="${props.subClass}">Education</${props.tag}>
      <${props.tag} class="${props.textClass}">
        <p>${education}</p>
      </${props.tag}>
    </${props.tag}>
    <${props.tag}>
      <${props.tag} class="${props.subClass}">Introduce</${props.tag}>
      <${props.tag} class="${props.textClass}">
        <p>${introduce}</p>
      </${props.tag}>
    </${props.tag}>
    <${props.tag}>
      <${props.tag} class="${props.subClass}">Career</${props.tag}>
      <${props.tag} class="${props.textClass}">
        <p>${career}</p>
      </${props.tag}>
    </${props.tag}>
    <${props.tag}></${props.tag}>
    <${props.tag}></${props.tag}>
  </${props.tag}>
`);
}

const profileContentObj = {
  tag : 'div',
  img : 'img-box',
  textId : 'text-box',
  subClass : 'sub-title',
  textClass : 'text-style'
}

const profileContent = () => {
  return(
    `
    <div id="profile" data-hash="Profile">
      ${profileImageContentsComp(profileContentObj)}
      ${profiletextContentsComp(profileContentObj)}
    </div>
    `
  );
}


export default profileContent();

