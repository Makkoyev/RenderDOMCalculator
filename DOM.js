const RenderDOM = () => {
  const results = [1, 2, 3, 4, 5];
  const keyMap = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const keyMapCMD = ['Canc', 'Del'];
  const operators = ['*', '/', '+', '-', '%'];
  const symbols = ['.', '(', ')'];

  const appEl = document.getElementById('app');
  // Element Creation
  let divEl = document.createElement('div');
  let DivElUpper = document.createElement('div');
  let DivElDown = document.createElement('div');
  let DivElDownLeft = document.createElement('div');
  let DivElDownRight = document.createElement('div');
  // Element Class Assignment
  divEl.className += 'calc-design';
  DivElUpper.classList += 'upper-calc';
  DivElDown.classList += 'down-calc';
  DivElDownLeft.classList += 'keyboard-left';
  DivElDownRight.classList += 'keyboard-right';

  // Element Appending
 appEl.appendChild(divEl);
 divEl.appendChild(DivElUpper);
 divEl.appendChild(DivElDown);
 DivElDown.appendChild(DivElDownLeft);
 DivElDown.appendChild(DivElDownRight);

  

results.forEach((item, index) => {
  DivElUpper.innerHTML += `<div class="result-${index+1}"> ${item} </div>`
});
keyMap.reverse().forEach((item, index) => {
  DivElDownLeft.innerHTML += `<div class="number-${index+1}"> ${item} </div>`
})
keyMapCMD.forEach((item, index) => {
  DivElDownLeft.innerHTML += `<div class="command${item}"> ${item} </div>`
})
operators.forEach((item, index) => {
  DivElDownRight.innerHTML += `<div class="operator-${index}"> ${item} </div>`
})
symbols.forEach((item, index) => {
  DivElDownRight.innerHTML += `<div class="symbol-${index}"> ${item} </div>`
})

};
// Rendering DOM
document.body.onload = RenderDOM;