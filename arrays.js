// 1 -> intro sobre arrays

// média de temperatura
var avgTemp = [];

avgTemp[0] = 30;
avgTemp[1] = 28;

console.log(avgTemp);

// 2 -> criar e inicializar um array

// como objeto, mas não precisa fazer assim
var days = new Array(5); // length
days[0] = 'sunday';
days[1] = 'monday';

console.log(days, days.length);
console.log(days[1]); // monday

// 3 -> iteração em arrays para acessar elementos

var names = ['Sam', 'Mia', 'Zoe'];

for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// 4 -> fibonacci
// a soma dos dois anteriores é o resultado do posterior

var f = [];
f[0] = 0;
f[1] = 1;
f[2] = 2;

for (var i = 3; i < 20; i++) {
    f[i] = f[i - 1] + f[i - 2];
}

console.log(f);

for (var i = 0; i < f.length; i++) {
    console.log(f[i]);
}

// 4 -> acrescentar elementos no array

var numbers = [0, 1, 2, 3, 4, 5, 6];

// push -> adiciona no final do array, depois do último
numbers.push(7);
console.log(numbers);

// unshift -> adiciona antes, no início (empurra todos para frente, muda as posições)
numbers.unshift(8);
console.log(numbers);

// 5 -> remover elementos no array

var numbers = [0, 1, 2, 3, 4, 5, 6];

// pop -> remove do final (não precisa de valor)
numbers.pop();
console.log(numbers);

// shift -> remove do início (não precisa de valor)
numbers.shift();
console.log(numbers);

// 6 -> removendo em posição específica

var numbers = [0, 1, 2, 3, 4, 5, 6];

// splice -> corta uma fatia
// 2 params (a partir de qual posição, quantidade)
numbers.splice(1, 3);
console.log(numbers);

// 7 -> inserir em posição específica

// splice -> 3 params
// (a partir de qual posição, 0 pois não vai remover, elementos a adicionar)
numbers.splice(1, 0, 7, 8, 9, 10);
console.log(numbers);

// 8 -> arrays bidimensionais

// arrays de 2 dimensões

var week1 = [1, 2, 3, 4];
var week2 = [9, 8, 7, 6];

var weeks = [week1, week2];

console.log(weeks);
console.log(weeks[0][1]); // 2

// iterar sobre um array bidimensional (for dentro de for)
for (var i = 0; i < weeks.length; i++) {
    for (var j = 0; j < weeks[i].length; j++) {
        console.log(weeks[i][j]);
    }
}

// 9 -> arrays multidimensional

var month1 = [11, 13, 12, 15];
var month2 = [9, 10, 7, 6];
var month3 = [7, 5, 3, 4];
var month4 = [8, 7, 10, 12];

var bimester1 = [month1, month2];
var bimester2 = [month3, month4];
var semester = [bimester1, bimester2];

console.log(semester[0][1][3]); // 6

for (var x = 0; x < semester.length; x++) {
    for (var y = 0; y < semester[x].length; y++) {
        for (var z = 0; z < semester[x][y].length; z++) {
            console.log(semester[x][y][z]);
        }
    }
}
