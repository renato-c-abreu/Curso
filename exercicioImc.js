console.log("Calculando o Imc")
let peso = prompt("Digite seu Peso")
let altura = prompt("Digite sua Altura")
imc = peso / (altura * altura)
alert(`O seu imc arredondado e ${imc.toFixed(2)}`)
if (imc<=30) {alert(`O seu Imc esta Ideal`)
    
} else {alert(`O seu imc esta fora dos padroes`)
    
}

