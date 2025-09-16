class Esporte {
    constructor(nome) {
        this.nome = nome;
    }

    jogar() {
        console.log(`O esporte ${this.nome} está sendo praticado.`);
    }
}

class Futebol extends Esporte {
    constructor(nome, jogadores) {
        super(nome);
        this.jogadores = jogadores;
    }

    jogar() {
        console.log(`O jogo de futebol ${this.nome} está sendo jogado com ${this.jogadores} jogadores em campo.`);
    }
}

class Basquete extends Esporte {
    constructor(nome, pontos) {
        super(nome);
        this.pontos = pontos;
    }

    jogar() {
        console.log(`O jogo de basquete ${this.nome} está com ${this.pontos} pontos marcados até agora.`);
    }
}

class Tenis extends Esporte {
    constructor(nome, sets) {
        super(nome);
        this.sets = sets;
    }

    jogar() {
        console.log(`O jogo de tênis ${this.nome} está no set número ${this.sets}.`);
    }
}

const futebol = new Futebol("Brasileirão", 22);
const basquete = new Basquete("NBA", 105);
const tenis = new Tenis("Wimbledon", 3);

futebol.jogar();
basquete.jogar();
tenis.jogar();
