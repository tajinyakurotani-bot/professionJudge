document.addEventListener('DOMContentLoaded', () => {
  const sageButton = document.getElementById('sage');
  const merchantButton = document.getElementById('merchant');
  const magicianButton = document.getElementById('magician');
  const finalA = document.getElementById('finalA');

  sageButton.addEventListener('click', (e) => {
    e.preventDefault();
    finalA.innerHTML = '';
    const heading = document.createElement('h2');
    heading.innerText = 'あなたに向いている職業は賢者です。最大の武器は知恵です。';
    finalA.appendChild(heading);
  });

  merchantButton.addEventListener('click', (e) => {
    e.preventDefault();
    finalA.innerHTML = '';
    const heading = document.createElement('h2');
    heading.innerText = 'あなたに向いている職業は商人です。最大の武器は道具に関する知識です。';
    finalA.appendChild(heading);
  });

  magicianButton.addEventListener('click', (e) => {
    e.preventDefault();
    finalA.innerHTML = '';
    const heading = document.createElement('h2');
    heading.innerText = 'あなたに向いている職業はは魔法使いです。最大の武器は魔術です。';
    finalA.appendChild(heading);
  });
});