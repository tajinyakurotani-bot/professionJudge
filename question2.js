const heroButton = document.getElementbyId('hero');
const warriorButton = document.getElementbyId('warrior');
const fighterButton = document.getElementbyId('fighter');
const finalA = document.getElementbyId('finalA');

heroButton.addEventListener(
  'click',
  ()=>{
    finalA.innerHTML='';

    const heading= document.createElement('h2');
    heading.innerText='あなたに向いている職業は勇者です。最大の武器は勇気です。';
    finalA.appendChild(heading);
  })


   warriorButton.addEventListener(
  'click',
  ()=>{
    finalA.innerHTML='';

    const heading= document.createElement('h2');
    heading.innerText='あなたに向いている職業は戦士です。最大の武器は腕力です。';
    finalA.appendChild(heading);
  })

    fighterButton.addEventListener(
  'click',
  ()=>{
    finalA.innerHTML='';

    const heading= document.createElement('h2');
    heading.innerText='あなたに向いている職業は武闘家です。最大の武器は己の拳です。';
    finalA.appendChild(heading);
  })
