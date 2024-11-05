var nome = 'AnaLuisa';
var sobrenome = 'Marco';
var idade = 17;
const i = 18;

var aprovado = true;

var nomeCompleto = nome+' '+sobrenome;

console.log(nome, idade);
console.log(nomeCompleto);
console.log(typeof nome);
console.log(typeof idade);

var num1 = 10;
var num2 = 2;

var soma = num1 + num2;
var subtracao = num1 - num2;
var multiplicacao = num1 * num2;
var divisao = num1 / num2;
var modulo = num1 % num2;
var expoente = num1 ** num2;

console.log(soma, subtracao, multiplicacao, divisao, modulo, expoente)

if(expoente < 10){
    console.log('Menor que 10');
} else{
    console.log('Maior que 10');
}

var a = 10;
var b = '10';
if(a == b){ //compara apenas o valor
    console.log('São iguais');
} else{
    console.log('Não são iguais');
}

if(a === b){ //compara valor e tipo
    console.log('São iguais');
} else{
    console.log('Não são iguais');
}

if(b.isNaN){ //verifica se é um número
    console.log('não é um número');
} else{
    console.log('é número');
}