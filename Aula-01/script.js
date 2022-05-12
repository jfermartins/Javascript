//tipos primitivos

//var - escopo global e local, pode ter seu valor alterado se não tiver um valor inicial será tratada como null;

//let - escopo local de bloco, pode ter seu valor alterado, se não tiver um valor inicial será tratada como null;

//const - escopo local de bloco, somente leitura, o valor inicial é obrigatório e não pode ser alterado;

//boolean
var vOUF = false;

console.log(typeof(vOUF));

//number
var numeroQualquer = 1;
console.log(typeof(numeroQualquer));

//String
var nome = 'Jane';
console.log(typeof(nome));

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