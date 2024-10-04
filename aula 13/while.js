let soma = 0
let contador = 0
while(true){
let nota = parseInt(prompt("Digite sua nota ( -1 para parar)").replaceAll(`,`,`.`))
if (nota ==-1){
    break
}
soma = soma + nota
contador ++
}
if (contador ==0){
alert("Digite as notas")

}else{
    let media  = soma / contador
alert(`Sua media : ${media}`)

}



   


