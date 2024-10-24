alert ('Boas vindas ao jogo do número secreto');
let numeroSecreto = 5;
console.log (numeroSecreto);
let chute;
let tentativas = 1;

//enquanto o chute não for igual ao número secreto
while (chute != numeroSecreto){
    chute = prompt('Escolha um número entre 1 e 10');
    //se chute for igual ao numero secreto
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        // tentativas = tentativas + 1;
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

/* 
if (tentativas > 1) {
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas!`);
} else {
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa!`);
}
*/ 
// if significa 'se'
// else significa 'senão'
// != - Diferente