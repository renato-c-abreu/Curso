let num = prompt("Digite quantos números quer inserir")
let listaNumero = [];
let digitado =0
let atual = 0
for(let i=0;i<num;i++){
    digitado = prompt("Digite o número")
    listaNumero.push(digitado)
} 
for (let i=1;i<listaNumero.length;i++){
    let j = i - 1
    atual = listaNumero[i]
    while(j>=0 && atual<listaNumero[j]){
        listaNumero[j+1] = listaNumero[j]
        j = j-1
    }
    listaNumero[j+1] = atual
}
console.log(listaNumero)