//como declarar as variáveis

//var
var variavel = 'Jane';
variavel = 'Martins';
console.log(variavel);

//let
let variavel2 = 'Fernanda';
variavel2 = 'Martins';
console.log(variavel2);

//const
const constante = 'Fernanda';
console.log(constante);

//Escopo

//escopo global
//quando a variável é declarada fora de qualquer bloco, sua visibilidade fica disponível em todo código

//escopo local
//quando a variável é declarada dentro de um bloco, sua visibilidade pode ficar disponível ou não

var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal() {
    let escopoLocalInterno = 'local';
    console.log(escopoLocalInterno);
}

escopoLocal();

//Atribuição
var atribuicao = 'Jane';

//Comparação
var comparacao = '0' == 0;
console.log(comparacao);

//Comparação idêntica
var comparacaoIdentica = '0' === 0;
console.log(comparacaoIdentica);

//Operadores aritméticos, relacionais e lógicos

//adição
var adicao = 1 + 1;
console.log(adicao);

//subtração
var subtracao = 2 - 1;
console.log(subtracao);

//multiplicação
var multiplicacao = 2 * 3;
console.log(multiplicacao);

//divisão real
var divisaoReal = 6 / 2;
console.log(divisaoReal);

//divisao inteira
var divisaoInteira = 5 % 2;
console.log(divisaoInteira);

//potenciação
var potenciacao = 2 ** 10;
console.log(potenciacao);

//Operadores Relacionais


//maior que
var maiorQue = 5 > 2;
console.log(maiorQue);

//menor que
var menorQue = 5 < 2;
console.log(menorQue);

//maior ou igual a
var maiorOuIgual = 5 >= 2;
console.log(maiorOuIgual);

//menor ou igual
var menorOuIgual = 5 <= 2;
console.log(menorOuIgual);

//Operadores lógicos

//&& = "e" - considera que todos os valores sejam true
var e = true && false;
console.log(e);

//|| = "ou" - considera que qualquer valor seja true
var ou = true || false;
console.log(ou);

//! = "não" - inverte o valor de true para false ou vice-versa
var nao = !true;
console.log(nao);