//variaveis lugar da vaca inicial
let xVaca = 400;
let yVaca = 870;
//variaveis tamanho da vaca
let comprimentoVaca = 60;
let alturaVaca = 60;
// ponto
let pontos = 0;

let colisao = false;

function movimentaVacay() {
    if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
        yVaca -= 5;
    } 
    if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
        if (yVaca <= 870){
            yVaca += 5;
        }
    }
}
function movimentaVacax() {
    if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
        if (xVaca > 0) {
        xVaca -= 5;
        }
    } 
    if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
        if (xVaca < 1852){
        xVaca += 5;
        }
    }
}

function colisaoAtor() {

    for(let i = 0; i < imagemCarros.length; i++) {
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xVaca, yVaca, 30);
    if (colisao){
        if (pontos <= 0) {
            alert("aprende a jogar !")
        } else {
            pontos--;
        }
        yVaca = 870
        somcolisao.play();
    }
    }
}

function adicionaPontuador() {
    textAlign(CENTER);
    textSize(40)
    fill(color(120, 255, 0))
    text(pontos, 700, 55);
    
}

function marcaPonto() {
    if (yVaca < 20){
    pontos ++;
    yVaca = 870
    somponto.play();
    } 
}