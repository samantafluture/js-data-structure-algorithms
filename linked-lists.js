// listas ligadas

// coleção sequencial de elementos
// não tem posições (diferente dos arrays)
// cada elemento armazena o valor e uma referência ao próximo elemento (ponteiro)
// exemplo: trem

function linkedList() {
    var Node = function(element){
        this.element = element;
        this.next = null;
    }

    var length = 0;
    var head = null;

    this.append = function(element) {
        // adiciona elemento no final da lista
    }

    this.insert = function(position, element) {
        // adiciona um elemento em uma posição específica
    }

    this.removeAt = function(position) {
        // remove o elemento de uma posição específica
    }

    this.remove = function(element) {
        // remove o elemento element
    }

    this.indexOf = function(element) {
        // retorna a posição do elemento
    }

    this.isEmpty = function() {
        // retorna se está vazio ou não a instância
    }

    this.size = function() {
        // retorna o tamanho da instância
    }

    this.toString = function() {
        // converte em string
    }

    this.print = function(){
        // imprime no console
    }
}
