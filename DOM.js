const RenderDOM = () => {
  var y = [];
  // var x = y.join('');
  const keyMap = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const keyMapCMD = ['Canc', 'Del'];
  const operators = ['*', '/', '+', '-', '%'];
  const symbols = ['.', '(', ')'];

  const appEl = document.getElementById('app');
  // Element Creation
  let divEl = document.createElement('div');
  let DivElUpper = document.createElement('div');
  let DivElUpperResult = document.createElement('div');
  let DivElDown = document.createElement('div');
  let DivElDownLeft = document.createElement('div');
  let DivElDownRight = document.createElement('div');
  // Element Class Assignment
  divEl.className += 'calc-design';
  DivElUpper.classList += 'upper-calc';
  DivElUpperResult.id += 'result-final';
  DivElDown.classList += 'down-calc';
  DivElDownLeft.classList += 'keyboard-left';
  DivElDownRight.classList += 'keyboard-right';

  // Element Appending
 appEl.appendChild(divEl);
 divEl.appendChild(DivElUpper);
 divEl.appendChild(DivElDown);
 DivElUpper.appendChild(DivElUpperResult);
 DivElDown.appendChild(DivElDownLeft);
 DivElDown.appendChild(DivElDownRight);

 const finalResult = document.getElementById('result-final');
 console.log(finalResult);

keyMap.reverse().forEach((item, index) => {
  DivElDownLeft.innerHTML += `<div class="number-${index+1}"> ${item} </div>`
})
keyMapCMD.forEach((item) => {
  DivElDownLeft.innerHTML += `<div class="command${item}"> ${item} </div>`
})
operators.forEach((item, index) => {
  DivElDownRight.innerHTML += `<div class="operator-${index}"> ${item} </div>`
})
symbols.forEach((item, index) => {
  DivElDownRight.innerHTML += `<div class="symbol-${index}"> ${item} </div>`
})

DivElDownLeft.addEventListener('click', (e) => {
  y.push(e.target.childNodes[0].nodeValue);
  var x = y.join('');
  console.log(x);
  // finalResult.innerHTML += e.target.childNodes[0].nodeValue;
  finalResult.innerHTML = x;
})


};
// Rendering DOM
document.body.onload = RenderDOM;