

const one = document.querySelector(".one");
const tow = document.querySelector(".tow");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const thankState = document.querySelector(".thank-state");
const return1 = document.querySelector(".return");

const count = document.querySelector(".span-count");

//const submit = document.querySelector(".submit");
let oneIsClicked = false;
let towIsClicked = false;
let threeIsClicked = false;
let fourIsClicked = false;
let fiveIsClicked = false;

one.addEventListener("click", function(){
  one.style.backgroundColor = "var(--White)"
  one.style.color = "black"
  count.innerHTML = 1;
  oneIsClicked = true;
})

tow.addEventListener("click", function(){
  tow.style.backgroundColor = "var(--White)"
  tow.style.color = "black"
  count.innerHTML = 2;
  towIsClicked = true;
})

three.addEventListener("click", function(){
  three.style.backgroundColor = "var(--White)"
  three.style.color = "black"
  count.innerHTML = 3;
  threeIsClicked = true;
})

four.addEventListener("click", function(){
  four.style.color = "black"
  four.style.backgroundColor = "var(--White)"
  count.innerHTML = 4;
  fourIsClicked = true;
})

five.addEventListener("click", function(){
  five.style.backgroundColor = "var(--White)"
  five.style.color = "black"
  count.innerHTML = 5;
  fiveIsClicked = true;
})

function submit(){
  if(oneIsClicked){
    thankState.style.visibility = "visible";
  }
  if(towIsClicked){
    thankState.style.visibility = "visible";
  }
  if(threeIsClicked){
    thankState.style.visibility = "visible";
  }
  if(fourIsClicked){
    thankState.style.visibility = "visible";
  }
  if(fiveIsClicked){
    thankState.style.visibility = "visible";
  }
}

submit()

return1.addEventListener("click", function(){
  thankState.style.visibility = "hidden";

  four.style.color = "var(--White)"
  four.style.backgroundColor = "rgb(43, 50, 61)"

  five.style.backgroundColor = "rgb(43, 50, 61)"
  five.style.color = "var(--White)"

  three.style.backgroundColor = "rgb(43, 50, 61)"
  three.style.color = "var(--White)"

  tow.style.backgroundColor = "rgb(43, 50, 61)"
  tow.style.color = "var(--White)"

  one.style.backgroundColor = "rgb(43, 50, 61)"
  one.style.color = "var(--White)"
})