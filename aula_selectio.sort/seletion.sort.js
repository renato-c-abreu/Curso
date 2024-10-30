function selectionSort(lista) { 
    let tamanhoLista = lista.length;
        
    for(let i = 0; i < tamanhoLista; i++) {

        let i_menor = i;
        for(let j = i+1; j < tamanhoLista; j++){
            if(lista[j] < lista[i_menor]) {
                i_menor=j; 
            }
         }
         if (i_menor != i) {

             let tmp = lista[i]; 
             lista[i] = lista[i_menor];
             lista[i_menor] = tmp;      
        }
    }
    return lista;
}let lista = []
let tamanhoLista = Number(prompt("Quantos numero ter na array?"))
for (let c=1;c<=tamanhoLista;c++){
 let num =Number(prompt("Digite um numero"))
 lista.push(num)
}
console.log(selectionSort(lista))