const elementoBolinha = document.querySelector('.bolinha');

let posicao = 0;


// função alert para o fim do jogo
function fimDoJogo() {
    setTimeout(() => {
        alert('Parabéns, você venceu o jogo!');
        reiniciar();
    }, 500);
}

function TenteNovamente() {
    setTimeout(() => {
        alert('Não foi dessa vez. Tente novamente!');
        reiniciar();
    }, 500);
}


// mover bolinha
function moverBolinha(event) {
    if (event.keyCode == 39) {
        posicao += 10;
        elementoBolinha.style.marginLeft = `${posicao}px`;

        if (posicao == 400) {
            fimDoJogo();
        }
    }
}

document.addEventListener('keydown', moverBolinha)

// retornar à posição inicial
function reiniciar() {
    posicao = 0;
    elementoBolinha.style.marginLeft = `${posicao}px`;
}


// girar
function girar() {
    posicao = Math.random() * 400;
    elementoBolinha.style.marginLeft = `${posicao}px`;
    if (posicao == 400) {
        fimDoJogo();
    } else {
        TenteNovamente();
    }
}