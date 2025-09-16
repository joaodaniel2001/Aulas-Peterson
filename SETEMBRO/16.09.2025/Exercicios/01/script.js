class Transporte  {
    constructor(tipo) {
        this.tipo = tipo;
    }

    mover () {
        console.log(`O transporte do tipo ${this.tipo} está se movendo.`)
    }
}

class Carro extends Transporte {
    constructor(tipo, modelo) {
        super(tipo);
        this.modelo = modelo;
    }

    mover () {
        console.log(`O carro modelo ${this.modelo} está andando na estrada.`)
    }
}

class Barco extends Transporte {
    constructor(tipo, nome) {
        super(tipo);
        this.nome = nome;
    }

    mover () {
        console.log(`O barco ${this.nome} está navegando no mar.`)
    }
}

class Aviao extends Transporte {
    constructor(tipo, companhia) {
        super(tipo);
        this.companhia = companhia;
    }

    mover () {
        console.log(`O avião da companhia ${this.companhia} está voando pelos céus.`)
    }
}

const transporte = new Transporte("genérico");

const carro = new Carro("terrestre", "Fusca");
const barco = new Barco("aquático", "Titanic");
const aviao = new Aviao("aéreo", "LATAM");

carro.mover();
barco.mover();
aviao.mover();
