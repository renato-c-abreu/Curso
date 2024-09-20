let nota = Number(prompt(`Digite sua notas`).replaceAll(`,`,`.`))
let nota2 = Number(prompt(`Digite a segunda nota`).replaceAll(`,`,`.`))
let nota3 = Number(prompt(`Digite a terceira nota`).replaceAll(`,`,`.`))
resultado = nota + nota2 + nota3
media = resultado / 3
alert(`Sua média foi ${media.toFixed(2)}`)
if (media>=7) 
alert(`Aprovado`)
    
else { 
    alert(`Reprovado`)
}
    
