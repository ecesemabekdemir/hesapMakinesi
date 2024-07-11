let btns = document.querySelectorAll(".keyboard button");
let buttons = document.querySelectorAll(".buttons");
let ekran = document.querySelector(".screen h2");

function handleCalcClick() {
  ekran.innerHTML += this.innerText;
 
}
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", handleCalcClick);
}

let equal =document.querySelector(".equal");
function handleSonucClick() {
  equal.innerText = eval(equal.innerText);
}

equal.addEventListener('click', handleSonucClick);

let reset = document.querySelector('.reset');
function handleClrClick() {
  reset.innerText = '';
}
reset.addEventListener('click', handleClrClick);














