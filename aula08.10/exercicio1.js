let compra = 0
let jogos = []
let valor = 0

alert("Bem vindo à loja de jogos!")


while (compra <= 2000) {
    let jogo = String(prompt("Informe o nome do jogo que você deseja comprar:"))
    valor = Number(prompt("Informe o valor do jogo:"))
    compra = compra + valor

    if (compra <= 2000) {
        jogos.push(jogo)  
    } else {
        alert("Você ultrapassou o limite de R$2000!")
    } 
}

let final = Number(compra - valor)



