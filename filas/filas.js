// filas

// coleção ordenada de itens
// FIFO (first in, first out)
// o primeiro a entrar é o primeiro a sair
// exemplo: fila de pessoas aguardando algo
// quem chega primeiro, é o primeiro que é atendido e sai

// 1 -> implementação da classe e seus métodos

function Queue() {
    var items = [];

    // adiciona um novo item
    this.enqueue = function (element) {
        items.push(element);
    };

    // remove um item
    this.dequeue = function () {
        return items.shift();
    };

    // retorna o primeiro elemento da fila
    this.front = function () {
        return items[0];
    };

    // verifica se a fila está vazia ou não
    this.isEmpty = function () {
        return items.length === 0;
    };

    // retorna o tamanho da fila
    this.size = function () {
        return items.length;
    };

    // imprime a fila no console
    this.print = function () {
        console.log(items.toString());
    };
}

// 2 -> instanciar de uma fila

var fila = new Queue();

fila.enqueue('Sam');
fila.enqueue('Alissa');
fila.enqueue('Tom');
fila.enqueue('Peta');
fila.enqueue('Yoko');

fila.print();
console.log(fila.front()); // Sam

fila.dequeue();

fila.print();
console.log(fila.front()); // Alissa

// 3 -> variação -> fila de prioridades

function PriorityQueue() {
    var items = [];

    function QueueElement(element, priority) {
        this.element = element;
        this.priority = priority;
    }

    this.enqueue = function (element, priority) {
        var queueElement = new QueueElement(element, priority);
        var added = false;

        for (var i = 0; i < items.length; i++) {
            if (queueElement.priority < items[i].priority) {
                items.splice(i, 0, queueElement);
                added = true;
                break;
            }
        }

        if (!added) {
            items.push(queueElement);
        }
    };

    this.dequeue = function () {
        return items.shift();
    };

    this.print = function () {
        for (var i = 0; i < items.length; i++) {
            console.log(items[i].element + ' ' + items[i].priority);
        }
    };
}

var filaPrioridade = new PriorityQueue();

filaPrioridade.enqueue('Sam', 1);
filaPrioridade.enqueue('Tom', 3);
filaPrioridade.enqueue('Peta', 2);
filaPrioridade.enqueue('Alissa', 1);

filaPrioridade.print(); // Sam 1, Alissa 1, Peta 2, Tom 3

// 4 -> fila circular
// jogo batata quente

function hotPotato(nameList, num) {
    var queue = new Queue();

    for (var i = 0; i < nameList.length; i++) {
        queue.enqueue(nameList[i]);
    }

    var eliminated = '';

    while (queue.size() > 1) {
        for (var i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue());
        }
        eliminated = queue.dequeue();
        console.log(eliminated + ` was eliminated!`);
    }
    return queue.dequeue();
}

var names = ['Tom', 'Pitanga', 'Neguinha', 'Merlo'];

var winner = hotPotato(names, 2); 
console.log('The winner of game 1: ' + winner); // Tom

var winner = hotPotato(names, 3); 
console.log('The winner of game 2: ' + winner); // Pitanga
