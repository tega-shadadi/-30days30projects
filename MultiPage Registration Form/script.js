
//first step

nextButton = document.querySelector(".next-button")
nextButton.addEventListener('click',()=>{
  console.log("Hello World!")
  nextStep();
})

function nextStep(){
  document.querySelector(".step2").classList.toggle("active");
  document.querySelector(".step1").classList.remove("active");
  document.querySelector(".icon-person").classList.toggle("unfade");
}

//second step

nextButton2 = document.querySelector(".next-button2")
nextButton2.addEventListener('click',()=>{
  console.log("Hello World!")
  document.querySelector(".step3").classList.toggle("active");
  document.querySelector(".step2").classList.remove("active");
  document.querySelector(".icon-planet").classList.toggle("unfade");
})

previousButton = document.querySelector(".previous-button")
previousButton.addEventListener('click',()=>{
  console.log("previous clicked!!")
  document.querySelector(".step1").classList.toggle("active");
  document.querySelector(".step2").classList.remove("active");
  document.querySelector(".icon-person").classList.remove("unfade")
})

//third step

submitButton = document.querySelector(".submit-button")
submitButton.addEventListener('click',()=>{
  console.log("Hello World!3")
  document.querySelector(".step4").classList.toggle("active");
  document.querySelector(".step3").classList.remove("active")
  document.querySelector(".icon-check").classList.toggle("unfade");
})

previousButton2 = document.querySelector(".previous-button2")
previousButton2.addEventListener('click',()=>{
  console.log("previous2 clicked!!")
  document.querySelector(".step2").classList.toggle("active");
  document.querySelector(".step3").classList.remove("active")
  document.querySelector(".icon-planet").classList.remove("unfade")
})

//Last step: when you click checkmark

checkmarkButton = document.querySelector(".checkmark")
checkmarkButton.addEventListener('click',()=>{
  console.log("Back to the start")
  document.querySelector(".step1").classList.toggle("active");
  document.querySelector(".step4").classList.remove("active")
  //making the icons fade again
  document.querySelector(".icon-person").classList.remove("unfade")
  document.querySelector(".icon-planet").classList.remove("unfade")
  document.querySelector(".icon-check").classList.remove("unfade")
})