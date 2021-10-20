// pilhas

// LIFO (last in, first out)
// o último a entrar é o primeiro a sair
// exemplo: uma pilha de livros

// 1 -> classe pilha com métodos a serem implementados

function Stack() {
    var items = [];

    // adiciona um novo elemento à pilha
    this.push = function (element) {
        items.push(element);
    };

    // remove um item do topo da pilhas
    this.pop = function () {
        return items.pop();
    };

    // devolve o elemento que está no topo da pilha
    this.peek = function () {
        return items[items.length - 1];
    };

    // informa se a pilha está vazia ou não
    this.isEmpty = function () {
        return items.length === 0;
    };

    // limpa a pilha
    this.clear = function () {
        items = [];
    };

    // informa o tamanho da pilha
    this.size = function () {
        return items.length;
    };

    //imprime a pilha no console
    this.print = function () {
        console.log(items.toString());
    };
}

// 2 -> instanciar um objeto pilha

var pilha = new Stack();

pilha.push(2);
pilha.push(4);
pilha.push(8);
pilha.push(10);

pilha.print();

console.log(pilha.peek());
console.log(pilha.size());

pilha.pop();

console.log(pilha.peek());
console.log(pilha.size());

pilha.clear();

console.log(pilha.isEmpty());

// 3 -> exercício: algoritmo "decimal para binário"

// coloca um número inteiro e retorna um binário
// utiliza o conceito de pilha

function decimalToBinary(decimal) {
    var restStack = [];
    var rest = 0;
    var binaryString = '';

    while(decimal > 0){
        rest = Math.floor(decimal % 2); // pega o resto ao dividir por 2
        restStack.push(rest); // [1...] -> vai dando o push aqui dos restos
        decimal = Math.floor(decimal / 2); // 12 e volta pra cima do while, repete
    }

    while(restStack.length > 0){
        binaryString += restStack.pop().toString(); // vai retornando aqui os últimos elementos -> inverte a ordem
    }

    return binaryString;
}

console.log(decimalToBinary(25)); // 11001
console.log(decimalToBinary(26)); // 11010




