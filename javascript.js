let tela = document.getElementById('tela')
let player = document.getElementById('player')
let player2 = document.getElementById('player2')

let azul = document.getElementById('azul')
let vermelho = document.getElementById('vermelho')

let h1 = document.getElementById('h1')
let btn = document.getElementById('start')
let restart = document.getElementById('recomeçar')
let win = document.getElementById('win')

let winblue = document.getElementById('winblue')
let winred = document.getElementById('winred')
let hr = document.getElementsByTagName('hr')[0]
let hr1 = document.getElementsByTagName('hr')[1]




function start() {
    winblue.style.opacity = "0"
    winred.style.opacity = "0"
    player.style.opacity = 1
    player2.style.opacity = 1
    h1.style.display = "none"
    btn.style.display = "none"
    win.style.opacity = 1
    let yInicial = 60
    let xInicial = 0
    let xInicial1 = 0
    let yInicial1 = 40
    hr.style.opacity = "1"
    hr1.style.opacity = "1"

    function moverJogador1(jogador1, x, y) {

        posX = x + "px"
        posY = y + "%"


        jogador1.style.top = posY
        jogador1.style.left = posX
    }
    velocidadeBlue = Math.floor(Math.random() * (1 - 0, 5) + 2)
    velocidadeRed = Math.floor(Math.random() * (1 - 0, 5) + 2)

    setInterval(function () {
        moverJogador1(player2, xInicial += velocidadeBlue, yInicial)
        azul.innerHTML = `Velocidade Azul: ${xInicial}`
        if (xInicial > 1310) {
            player.style.opacity = 0
            player2.style.opacity = 0
            h1.style.display = "none"
            winblue.style.opacity = "1"
            btn.style.display = "inline-block"
            win.style.opacity = 0
            azul.style.opacity = "0"
            vermelho.style.opacity = "0"
            xInicial = 0
            xInicial1 = 0
            hr.style.opacity = "0"
            hr1.style.opacity = "0"
        }
    }, 50)
    setInterval(function () {
        moverJogador1(player, xInicial1 += velocidadeRed, yInicial1)
        vermelho.innerHTML = `Velocidade vermelho: ${xInicial1}`
        if (xInicial1 > 1310) {
            player.style.opacity = 0
            player2.style.opacity = 0
            h1.style.display = "none"
            winred.style.opacity = "1"
            btn.style.display = "none"
            win.style.opacity = 0
            vermelho.style.opacity = "0"
            azul.style.opacity = "0"
            xInicial = 0
            xInicial1 = 0
            hr.style.opacity = "0"
            hr1.style.opacity = "0"

        }
    }, 50)

}


