# Simulado de entrevista técnica

Desenvolva uma função chamada verificaMenores() que recebe dois parâmetros:

-   O primeiro deve ser uma lista de números.
-   O segundo um número.

Sua função deve contar quantas vezes o **número passado por parâmetro** aparece dentro da **lista passada por parâmetro**

Caso a quantidade de vezes que o **número** aparece dentro da lista seja menor que o próprio número, deve retornar a seguinte string:

```javascript
"A quantidade de vezes que o valor aparece é menor que o número passado";
```

Caso não seja deve retornar:

```javascript
"A quantidade de vezes que o valor aparece é maior ou igual ao número passado";
```

Exemplo:

```javascript
const lista = [1, 5, 3, 4, 7, 4, 15, 20, 4];
verificaMenores(lista, 4);
// A função deve retornar: 
//"A quantidade de vezes que o valor aparece é menor que o número passado"
// Pois o número 4 se repete 3 vezes e 3 é menor que 4.
```

Similarmente,

```javascript
const lista = [1, 7, 2, 5, 1];
verificaMenores(lista, 1);
// A função deve retornar: 
//"A quantidade de vezes que o valor aparece é maior ou igual ao número passado"
// Pois o número 1 se repete 2 vezes e 2 é maior que 1.
```
