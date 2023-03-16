const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
let btn = document.querySelector("#btnCalcular");
const result = document.querySelector('#result');

function btnONclick()
{
    let suma = parseInt(input1.value) + parseInt(input2.value);

    result.innerText = "Reultado es: " + suma;
}
