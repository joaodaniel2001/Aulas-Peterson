# REVISÃO JAVASCRIPT

## 🔍 Sumário

- [Comandos básicos](#📂-comandos-basicos)
- [Declaração de variáveis](#📂-declaracao-de-variaveis)
- [Operações Aritméticas](#📂-operacoes-aritmeticas)
- [Estruturas de controle](#📂-estruturas-de-controle)

### 📂 Comandos basicos

- Para referênciar o código **JavaScript** dentro do **HTML** é necessário utilizar o seguinte código:

```html
    <!-- Utilize o script -->
    <script src="nome-do-script.js"></script>

<!-- Sempre colocar o código antes do body e do html -->
</body>
</html>
```

### 📂 Declaracao de variaveis

- **CONST:** é uma variável que o seu valor será fixo.

```javascript
const pi = 3.14;
console.log(pi); // Saída: 3.14
```

- **LET:** é uma variável de escopo, acessível apenas dentro do bloco em que foi criado.

```javascript
let contador = 0;

if (true) {
    let contador = 1; // Essa variável contador é diferente da anterior
    console.log(contador); // Saída: 1
}

console.log(contador); // Saída: 0
```


- **VAR:** é uma variável com escopo de função, acessível em toda a função onde foi declarada, mesmo fora do bloco.

```javascript
var numero = 10;

if (true) {
    var numero = 20; // Essa variável numero é a mesma da anterior
    console.log(numero) // Saída: 20;
}

console.log(numero) // Saída 20;
```

### 📂 Operacoes aritmeticas

- #### Diferença entre ***=***, ***==*** e ***===***:

    - `=`: Operador de atribuição. Usado para atribuir valor a algo.

    ```javascript
    let x = 10; // "x" é um número inteiro  
    console.log(x) // Saída: 10
    ```

    - `==`: Operador de igualdade não restrita. Ele compara dois valores, mas faz a conversão de tipo se os tipos forem diferentes.
    ```javascript
    let y = "20"; // "y" é uma string
    console.log(x==y) // Saída: true | Pois "y" é convertido para número
    ```

    - `===`: Operador de igualdade restrita. Ele compara dois valores e também verifica se os tipos são iguais, sem fazer conversão de tipo.

    ```javascript
    let z = "20" // "z" também é uma string
    console.log(x===z) // Saída: false | Pois "x" é um número e "z" é uma string
    ```

### 📂 Estruturas de controle

- **IF:** executa um bloco de código se a condição for verdadeira.

    ```javascript
    let idade = 18;

    if (idade >= 18) {
        console.log("Você é maior de idade."); // Saída: Você é maior de idade.
    }
    ```

- **IF...ELSE:** executa um bloco de código se a condição for verdadeira, caso contrário, executa outro bloco.

    ```javascript
    let nota = 5;

    if (nota >= 6) {
        console.log("Aprovado");
    } else {
        console.log("Reprovado");
    } // Saída: Reprovado
    ```

- **ELSE IF:** permite verificar múltiplas condições.

    ```javascript
    let nota = 5;

    if (nota >= 6) {
        console.log("Aprovado");
    } else if (nota >= 4) {
        console.log("Recuperação");
    } else {
        console.log("Reprovado");
    } // Saída: Recuperação
    ```

- **SWITCH:** compara uma variável com múltiplos valores.

    ```javascript
    let dia = 3;

    switch (dia) {
        case 1:
            console.log("Domingo");
            break;
        case 2:
            console.log("Segunda-feira");
            break;
        case 3:
            console.log("Terça-feira");
            break;
        default:
            console.log("Outro dia");
    } // Saída: Terça-feira
    ```

- **FOR:** é usado quando você sabe qauntas vezes deseja repetir.

    ```javascript
    for (let i = 0; i < 3; i++) {
        console.log("Número: " + i);
    }
    ```

    - Saída;

    ```markdown
    Número: 0
    Número: 1
    Número: 2
    ```

- **WHILE:** ele continua a executar enquanto a condição for verdadeira.

    ```javascript
    let j = 0;
    while (j < 5) {
        console.log("Número: " + j);
        j++;
    }
    ```

    - Saída;

    ```markdown
    Número: 0
    Número: 1
    Número: 2
    Número: 3
    Número: 4
    ```

- **BREAK:** interrompe a execução de um loop ou switch.

    ```javascript
    for (let i = 0; i < 5; i++) {
        if (i === 3) {
            break; // Interrompe o loop quando i é 3
        }
        console.log(i);
    }
    ```

    - Saída;

    ```markdown
    0
    1
    2
    ```

- **CONTINUE:** pula a iteração atual e continua com a próxima.

    ```javascript
    for (let j = 0; j < 5; j++) {
        if (j === 2) {
            continue; // Pula a iteração quando j é 2
        }
        console.log(j);
    }
    ```

    - Saída;

    ```markdown
    0
    1
    3
    4
    ```
