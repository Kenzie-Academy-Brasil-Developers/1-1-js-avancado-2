
const lista = [1, 5, 3, 4, 7, 4, 15, 20, 4];

function verificaMenores(lista,num){

    let soma = []

    for( let i = 0; i <lista.length; i++){

        console.log(lista[i])

        if(lista[i] == num){
            
            soma += lista[i]

        }
        if( soma < 4){

            return "A quantidade de vezes que o valor aparece é menor que o número passado"

        }else{
            return "A quantidade de vezes que o valor aparece é maior ou igual ao número passado"
        }
    }

}
console.log(verificaMenores(lista,4))