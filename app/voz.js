import { palavrasNumeros } from './numeros.js';

const elementoPalpite = document.getElementById('chute');

window.SpeechRecognition = window.SpeechRecognition || 
window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'en';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(e) {
    const palpite = e.results[0][0].transcript; // Declarei a variável usando const
    const palpiteNumerico = converterPalpiteNumerico(palpite, palavrasNumeros);
    exibirPalpite(palpiteNumerico);
    verificaValidadePalpite(palpiteNumerico);
}

function converterPalpiteNumerico(palpite, palavrasNumeros) {
    const palavras = palpite.split(' ');
    const palpiteNumerico = palavras.map(palavra => palavrasNumeros[palavra] || palavra).join(' ');

    return palpiteNumerico;
}

function exibirPalpite(palpite) {
    elementoPalpite.innerHTML = `
    <div>You said:</div>
    <span class="box">${palpite}</span>
    `;
};

recognition.addEventListener('end', () => recognition.start());

