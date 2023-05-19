/* Importando o módulo readline */
const readline = require('readline');

/* Criando e definindo o tipo de entrada e saida */
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcular(n1, n2, oper) {
    switch (oper) {
        case "+":
            return n1 + n2;
        case "-":
            return n1 - n2;
        case "*":
            return n1 * n2;
        case "/":
            return n1 / n2;
        default:
            throw new Error('Operação inválida');
    }
}

rl.question("Insira o primeiro número: ", function(n1) {
    rl.question("Insira o operador (+, -, *, /): ", function(oper) {
        rl.question("Insira o segundo número: ", function(n2) {
            const resultado = calcular(parseFloat(n1), parseFloat(n2), oper);
            console.log("O resultado é", resultado);
            rl.close();
        });
    });
});

