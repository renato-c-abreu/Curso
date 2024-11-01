let media = 0
let soma = 0
let lista = [1, 2, 3, 4, 5]
function arr(lista) {
    for (let i = 0; i < lista.length; i++) {
        soma += lista[i]
    } media = soma / lista.length
return media
}console.log(arr(lista))
