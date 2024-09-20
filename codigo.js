let peso = Number(prompt(`Digite seu peso`).replaceaAll(`,`,`.`))
let altura = Number(prompt(`Digite sua altura`).replaceAll(`,`,`.`))
let imc = peso/ (altura **2)
alert(`Seu indice de massa é `+imc.toFixed(2))
if (imc<18){
alert(`Abaixo do peso`)   
} else
    if(imc>=18 || imc<=30){
    alert(`Peso ideal`)
    }if(imc>30)
alert(`Acima do peso`)




console.log (`Codigo novo`)