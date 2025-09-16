
/// === ABSTRAÇÃO === ///

// Criando uma classe genérica (Animal), quse serve como modelo de abstração
class Animal {
    // Constructor: Define as propriedades iniciais
    constructor(nome) {
        this.nome = nome; // Propriedade comum de todos os animais
    }

    // Method: método que vai ser herdado pelas classes filhas
    fazerSom () {
        console.log(`${this.nome} está imitindo um som...`);
    }
}

/// === HERANÇA === ///

// A classe cachorro herda da classe animal

class Cachorro extends Animal {
    constructor (nome, raca) {
        super(nome); // Super chama o construtor da classe mãe (Animal)
        this.raca = raca;
    }

    /// === POLIMORFISMO === ///

    // Sobreescrever o método "Fazer som" da clase mãe
    fazerSom () {
        console.log(`${this.nome} da raça ${this.raca} está latindo...`);
    }
}

class Gato extends Animal {
    constructor (nome, cor) {
        super(nome);
        this.cor = cor;
    }

    fazerSom () {
        console.log(`${this.nome} da cor ${this.cor} está miando...`);
    }
}

// Criando objetos (instancias) das Classes
const animal = new Animal("Bicho");

const cachorro = new Cachorro("Zick", "Namorador")
const gato = new Gato("Vinicius", "preto")

cachorro.fazerSom();
gato.fazerSom();
