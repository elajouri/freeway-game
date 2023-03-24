//variaveis de imagens
let imagemDaEstrada;
let imagemDaVaca;
let trilhasonora;
let somcolisao;
let somponto;

function preload() {
    imagemDaEstrada = loadImage('images/estrada.png');
    imagemDaVaca = loadImage('images/ator-1.png');
    imagemCarros = [loadImage('images/carro-1.png'), loadImage('images/carro-2.png'), loadImage('images/CARRO-3.png'), loadImage('images/carro-1.png'), loadImage('images/carro-2.png'), loadImage('images/CARRO-3.png')];
    trilhasonora = loadSound("sounds/trilha.mp3");
    somcolisao = loadSound("sounds/colidiu.mp3");
    somponto = loadSound("sounds/pontos.wav");

}

function mostraImagemCarro() {
    for (i = 0; i < imagemCarros.length; i++) {
        image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
    }
}

function mostraAtor() {
    image(imagemDaVaca, xVaca, yVaca, comprimentoVaca, alturaVaca);
}