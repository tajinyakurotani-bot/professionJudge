'use strict';
const userNameInput = document.getElementById('user-name');
const firstButton = document.getElementById('firstButton');
const firstredButton=document.getElementById('active');
const firstblueButton = document.getElementById('passive');
const secondButton = document.getElementById('secondButton')
const resultDivision = document.getElementById('result-area');

firstredButton.addEventListener(
  'click',
  ()=>{
    firstButton.innerHTML='';

    const heading= document.createElement('h3');
    heading.innerText='次の質問です';
    resultDivision.appendChild(heading);
  
    const newButtonA = document.createElement('button');
    newButtonA.innerText='リーダーをしたい';
    secondButton.appendChild(newButtonA);
    
const newButtonB = document.createElement('button');
    newButtonB.innerText='力こそ正義';
    secondButton.appendChild(newButtonB);

    const newButtonC = document.createElement('button');
    newButtonC.innerText='自分の道を行きたい';
    secondButton.appendChild(newButtonC);
  });

firstblueButton.addEventListener(
  'click',
  ()=>{
    firstButton.innerText='';
const heading= document.createElement('h3');
    heading.innerText='次の質問です';

    const newButtonD = document.createElement('button');
    newButtonD.innerText='魔法を使いたい';
    secondButton.appendChild(newButtonD);

    
const newButtonE = document.createElement('button');
    newButtonE.innerText='賢いと褒められたい';
    secondButton.appendChild(newButtonE);
    
    const newButtonF = document.createElement('button');
    newButtonF.innerText='ビジネスが好き';
    secondButton.appendChild(newButtonF);
  });
  
  newButtonA.addEventListener(
    'click',()=>{
    secondButton.innerHTML='';
    const headinga= document.createElement('h4');
    headinga.innerText='診断結果';
    resultDivision.appendChild(headinga);

    const paragraph= document.createElement('p');
    const result = assessment(userName);
    paragraph.innerText= result;
    resultDivision.appendChild(paragraph);
  })

const answers = [
  '###userName###に向いている職業は勇者です。最大の武器は勇気です。',
  '###userName###に向いている職業は戦士です。最大の武器は腕力です。',
  '###userName###に向いている職業は魔法使いです。最大の武器は魔術です。',
  '###userName###に向いている職業は賢者です。最大の武器は知恵です。',
  '###userName###に向いている職業は商人です。最大の武器は道具に関する知識です。',
  '###userName###に向いている職業は武闘家です。最大の武器は己の拳です。'

];

function assessment(userName){
  let sumOfCharCode = 0;
  for(let i = 0; i< userName.length; i++){
    sumOfCharCode = sumOfCharCode + userName.charCodeAt(i);
  }
  const index = sumOfCharCode % answers.length;
  let result = answers[index];
  result = result.replaceAll('###userName###', userName);
  return result;
}

//const paragraph= document.createElement('p');
    //const result = assessment(userName);
    //paragraph.innerText= result;
    //resultDivision.appendChild(paragraph);