//lista variaveis lugar dos carros
let yCarros = [92, 220, 340, 490, 610, 735];
let xCarros = [1920, 1920, 1920, 1920, 1920, 1920];

//variaveis tamanho dos carros
let comprimentoCarro = 180;
let alturaCarro = 100;

// lista variaveis velocidades dos carros faixas de cima
let velocidadeCarros = [12.4, 17, 11.4, 15, 20, 13.5];


function movimentaCarros() {
    for (i = 0; i < imagemCarros.length; i++) {
        xCarros[i] -= velocidadeCarros[i];
    }
}

function voltarCarros() {
    for (i = 0; i < imagemCarros.length; i++) {
        if (verificaPassouTela(xCarros[i])) {
            xCarros[i] = 1920;
        }
    }
}

function verificaPassouTela(xCarro) {
    return xCarro < -180;
}