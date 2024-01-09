const elementoPalpite = document.getElementById('chute');

function  verificaValidadePalpite(palpiteNumerico) {
    const numero = +palpiteNumerico //transforma on umero que vem em string em um numero inteiro.

    if (palpiteInvalido(numero) || minMaxNumeroSecreto(numero)) {
        elementoPalpite.innerHTML += '<div>Invalid value</div>';
        return
    };

    if (numero == numeroSecreto) {

        // document.body.innerHTML faz uma nova página:
        document.body.innerHTML = ` 
        <div class="telaDeAcerto">
            <h3>The number ${numeroSecreto} is correct.</h3>
            <h2>You are amazing!</h2>
            <button class="botao" id="jogarNovamente">Play again</button>
            <section>
                <figure id="gif">
                        <img src="giphy.gif">
                </figure>
            </section>
            <audio id="meuAudio">
                <source src="sound.mp3" type="audio/mp3">
                Seu navegador não suporta HTML5.
            </audio>
        </div>
        `
    } else if (numero < numeroSecreto) {
        elementoPalpite.innerHTML += `
    <div>The secret number is higher. 
     <i class="fa-solid fa-up-long"></i></div>
    `
    } else {
        elementoPalpite.innerHTML += `
    <div>The secret number is lower. 
     <i class="fa-solid fa-down-long"></i></div>
    `
    };
};

function minMaxNumeroSecreto(numero) {
    return numero > maiorValor || numero < menorValor;
};

function palpiteInvalido(numero) {
    return Number.isNaN(numero);
};


// configuração do botão de reload:
document.body.addEventListener('click', evento => {
    if(evento.target.id == 'jogarNovamente') {
        window.location.reload();
    };
});

function iniciarReproducao() {
    document.getElementById('meuAudio').play();
}