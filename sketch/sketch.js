function setup() {
    createCanvas(1912, 931);
    trilhasonora.loop();
}

function draw() {
    background(imagemDaEstrada);
    mostraImagemCarro();
    movimentaCarros();
    movimentaVacay();
    voltarCarros();
    mostraAtor();
    colisaoAtor();
    movimentaVacax();
    adicionaPontuador();
    marcaPonto();
}