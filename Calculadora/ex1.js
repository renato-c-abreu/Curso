let n1, n2, operacao, resultado
function calculaNs(num1, num2, oper) {

    n1 = Number(document.getElementById("inp1").value)
    n2 = Number(document.getElementById("inp2").value)
    operacao = document.getElementById("oper").value

    switch (operacao) {
        case '+':
            resultado = n1 + n2
            break
        case '-':
            resultado = n1 - n2
            break
        case '*':
            resultado = n1 * n2
            break
        case '/':
            if (n2 = !0) {
                resultado = n1 / n2
            } else {
                alert("ERRO: Não possivel dividir um numero por zero!!!!")
            }
            break
        default:
            alert("Operação desconhecida!")
    }
    return document.getElementById("result").innerHTML = resultado
}