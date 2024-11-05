var num = 37;

if(num < 18){
    console.log('Menor de idade');
} else if(num > 18 && num < 60){
    console.log('Adulto');
} else if(num > 60 && num < 70){
    console.log('Terceira idade, não aposentado');
} else{
    console.log('Terceira idade, aposentado');
}

function imcPessoa(peso, altura){
    imc = peso / (altura ** 2);
    return imc;
}

var i = imcPessoa(67, 1.74)
console.log(i);

for(var i = 0; i < 10; i++){
    console.log(i);
}

var n = 0;
while(n<10){
    console.log(n);
    n++;
}