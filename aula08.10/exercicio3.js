let tempo = 0
let total = 0
alert("Digite -1 para parar")
while(true){
    let nome = String(prompt("Qual nome da musica?"))
    let duracao = Number(prompt("Qual a duração?(valor em minutos)"))
    tempo = tempo + duracao
    if(nome ==-1){
        break
    }else{
    let total = tempo /60
 alert("Total em Horas", total)
    }

}