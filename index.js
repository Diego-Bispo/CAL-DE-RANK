// Função para calcular o saldo de vitórias
function calcularSaldo(vitorias, derrotas) {
    return vitorias - derrotas;
}

// Função para determinar o nível do jogador
function determinarNivel(vitorias) {
    let nivel;
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }
    return nivel;
}

// Simulação de entrada de dados
let vitorias = 85; // Exemplo de número de vitórias
let derrotas = 10; // Exemplo de número de derrotas

// Cálculo do saldo de vitórias
let saldoVitorias = calcularSaldo(vitorias, derrotas);

// Determinação do nível do jogador
let nivel = determinarNivel(vitorias);

// Exibição do resultado no terminal
console.log(`O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivel}.`);






