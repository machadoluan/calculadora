const firstNumber = document.querySelector(".first-Number")
const secondNumber = document.querySelector(".second-Number")
const buttonSomar = document.querySelector(".button")
const result = document.querySelector("span")

function soma(){
  result.innerHTML = parseInt(firstNumber.value) + parseInt(secondNumber.value)
  
  if(firstNumber.value == "" || secondNumber.value == ""){
    alert("Digite um numero")
    result.innerHTML = ""
  } else {
    soma()
  }
}

function multiplicar(){
  result.innerHTML = parseInt(firstNumber.value) * parseInt(secondNumber.value)
  
  if(firstNumber.value == "" || secondNumber.value == ""){
    alert("Digite um numero")
    result.innerHTML = ""
  } else {
    multiplicar()
  }
}

function dividir(){
  result.innerHTML = parseInt(firstNumber.value) / parseInt(secondNumber.value)
  
  if(firstNumber.value == "" || secondNumber.value == ""){
    alert("Digite um numero")
    result.innerHTML = ""
  } else {
    dividir()
  }
}

function subtrair(){
  result.innerHTML = parseInt(firstNumber.value) - parseInt(secondNumber.value)
  
  if(firstNumber.value == "" || secondNumber.value == ""){
    alert("Digite um numero")
    result.innerHTML = ""
  } else {
    subtrair()
  }
}
