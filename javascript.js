let tela = document.getElementById('tela')
let player = document.getElementById('player')
let player2 = document.getElementById('player2')

let azul = document.getElementById('azul')
let vermelho = document.getElementById('vermelho')

let h1 = document.getElementById('h1')
let btn = document.getElementById('start')
let restart = document.getElementById('recomeçar')
let win = document.getElementById('win')

let winplayer = document.getElementById('winplayer')
// let winred = document.getElementById('winred')
let hr = document.getElementsByTagName('hr')[0]
let hr1 = document.getElementsByTagName('hr')[1]

let nome1 = document.getElementById('play1')
let nome2 = document.getElementById('play2')
let input1 = document.getElementsByTagName('input')[0]
let input2 = document.getElementsByTagName('input')[1]
let names = document.getElementById('inputt')



function moverJogador1(jogador1, x, y) {

    posX = x + "px"
    posY = y + "%"


    jogador1.style.top = posY
    jogador1.style.left = posX
    names.style.opacity = 0
    
}




function start() {
    
    nome1.innerHTML = `${input1.value}`
    nome2.innerHTML = `${input2.value}`
    // winblue.style.opacity = "0"
    // winred.style.opacity = "0"
    player.style.opacity = 1
    player2.style.opacity = 1
    h1.style.display = "none"
    btn.style.display = "none"
    win.style.opacity = 1
    let yInicial = 60
    let xInicial = 0
    let xInicial1 = 0
    let yInicial1 = 40
    hr.style.borderColor = "red"
    hr1.style.borderColor = "blue"
    hr.style.opacity = "1"
    hr1.style.opacity = "1"
    

    velocidadeBlue = Math.floor(Math.random() * (1 - 0, 5) + 2)
    velocidadeRed = Math.floor(Math.random() * (1 - 0, 5) + 2)


    setInterval(function () {
        moverJogador1(player2, xInicial += velocidadeBlue, yInicial)
        azul.innerHTML = `Velocidade Azul: ${xInicial}`
        if(xInicial1 >= 1310 && xInicial >= 1310){

            player.style.opacity = 0
            player2.style.opacity = 0
            h1.style.display = "none"
            winplayer.style.opacity = "1"
            winplayer.innerHTML = `<h1>Empatou</h1>`
            // btn.style.display = "inline-block" Está bugando
            win.style.opacity = 0
            azul.style.opacity = "0"
            vermelho.style.opacity = "0"
            xInicial = 0
            xInicial1 = 0
            hr.style.opacity = "0"
            hr1.style.opacity = "0"
        }
        else if(xInicial > 1310) {

            player.style.opacity = 0
            player2.style.opacity = 0
            h1.style.display = "none"
            winplayer.style.opacity = "1"
            winplayer.innerHTML = `<h2> ${input2.value} é o Vencedor</h2>`
            // btn.style.display = "inline-block" Está bugando
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
        if(xInicial1 >= 1310 && xInicial >= 1310){
            player.style.opacity = 0
            player2.style.opacity = 0
            h1.style.display = "none"
            winplayer.style.opacity = "1"
            winplayer.innerHTML = `<h1>Empatou</h1>`
            // btn.style.display = "inline-block" Está bugando
            win.style.opacity = 0
            azul.style.opacity = "0"
            vermelho.style.opacity = "0"
            xInicial = 0
            xInicial1 = 0
            hr.style.opacity = "0"
            hr1.style.opacity = "0"
        }
        else if(xInicial1 > 1310) {
            player.style.opacity = 0
            player2.style.opacity = 0
            h1.style.display = "none"
            winplayer.style.opacity = "1"
            winplayer.innerHTML = `<h2> ${input1.value} é o Vencedor</h2>`
            // btn.style.display = "inline-block" Está bugando
            win.style.opacity = 0
            azul.style.opacity = "0"
            vermelho.style.opacity = "0"
            xInicial = 0
            xInicial1 = 0
            hr.style.opacity = "0"
            hr1.style.opacity = "0"
        }
    }, 50)

}


