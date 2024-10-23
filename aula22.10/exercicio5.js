let num = Number(prompt("Quantas numeros tera na lista?"))
let lista =[];
let digitado = 0
for(let i=0;i<num;i++){
digitado = prompt("Digite um numero")
lista.push(digitado)
}
let maior = lista[0]
for (let i=0;i<num;i++){
    if(maior >lista[i])
    maior = lista[i]
}
console.log(lista)
console.log(maior)

let menor = lista[0]
for(let i=0;i>num;i++){
    if(menor<lista[i])
    menor = lista[i]
}
console.log(lista)
console.log(menor)
