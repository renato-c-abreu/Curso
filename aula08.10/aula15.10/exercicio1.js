let dia = prompt("Quantos Dias?")
dia = parseInt(dia)
let lista = [];
for (let i =0;i<dia;i++){
    let temp = prompt("Qual a temperatura do dia?",(i+1))
    lista.push(temp)
}
console.log(lista)
