let numero = document.getElementById("number");
let button = document.getElementById("botao");
let field = document.getElementById("field");
 
button.addEventListener('click', enviar);

function enviar() {

if (numero.value != "") {

    field.innerHTML = ""
   
    for(let i = 1; i <= 10; i++) {
    let item = document.createElement('option');

  item.innerHTML += `${parseInt(numero.value)}` + " x " + `${i}` + " = " + `${parseInt(numero.value) * i}
`;
    field.appendChild(item);

    } } else {alert("insira um numero");}
}