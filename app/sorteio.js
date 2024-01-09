var menorValor = 0;
var maiorValor = 100;


const elementoMenorValor = document.querySelector('#menor-valor');
elementoMenorValor.innerHTML = menorValor;
const elementoMaiorValor = document.querySelector('#maior-valor');
elementoMaiorValor.innerHTML = maiorValor;


let numeroSecreto = parseInt(Math.random() * maiorValor + 1);

console.log(numeroSecreto);

