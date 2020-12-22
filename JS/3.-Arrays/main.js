/*
    ¿Qué pasa cuando necesito que una variable almacene múltiples valores?
        Puedo crear varias variables
    ¿Y si no sabemos exactamente cuantos valores hay?
        PUES EXISTEN LOS ARRAYS
*/

// Esto ya no lo tendremos más

// let msg = "Hola Mundo";
// let msg2 = "¿Qué tal?";
// let msg3 = "Demasiados mensajes"


/*
    ¿Qué es un array?
        Un array es un conjunto de valores almacenados en la misma variable
        Estos valores se organizan en base a una posición incremental 0, 1, 2, 3...
*/
let msgs = ["Hola Mundo", "¿Qué tal?", "El mundo es cruel"];
console.log("msgs:", msgs);

// Un array también tiene la propiedad .length al igual que un string, puesto que funcionan de forma parecida
console.log("Hola".length);
console.log(msgs.length);
// Y al igual que para determinar la posición del carácter a imprimir usábamos [i], igual para los arrays
console.log("Hola"[1]);
console.log(msgs[1]);

let str = ["H", "o", "l", "a"];
console.log(str[0], str[1], str[2], str[3], str[4]);
console.log(msgs[0], msgs[1], msgs[2]);

/*
    Podríamos crear los elementos de un array en base a la entrada de un usuario
*/
i = 0;
let msg = [];
let continuar = true;
while (continuar) {
    msg[i] = prompt("Introduce el mensaje", i);
    if (prompt("Quieres continuar [y] o no [n]?") === "n")
        continuar = false;
    i++;
}
console.log(msg);

/*
    Pero crear un mensaje en una posición determinada nunca es la mejor manera, para ello existe el método .push
    el cual nos permite añadir un elemento al final del array
*/

let msg = [];
let continuar = true;
while (continuar) {
    msg.push(prompt("Introduce el mensaje"));
    if (prompt("Quieres continuar [y] o no [n]?") === "n")
        continuar = false;
}
console.log(msg);

let messages = [1, 2, 3];
console.log(messages, messages.length);
// añadir uno al final
messages.push(4);
console.log("Push", messages.push("Hola Mundo"));
console.log(messages, messages.length);
// Eliminar uno del final
console.log("Pop", messages.pop());
console.log(messages, messages.length);


// Añade un nuevo elemento al comienzo del array
console.log(messages.unshift(6));
// Eliminar un elemento del comienzo del array
console.log("Shift", messages.shift());


// Eliminar un elemento en la posición dada
messages.splice(2, 2);

// Añadir en la posición dada
messages.splice(2, 0, "Hola", "Mundo", "Que", "Tal");


/*
    EJERCICIO:
        let arr = ["Hola 1", "Mundo 2", "Prueba 3", "Prueba 4"]
        >> "Hola 1"
        >> "Mundo 2"
        >> "Prueba 3"
*/

// Solución
let arr = ["Hola 1", "Mundo 2", "Prueba 3", "Prueba 4"];
let length = arr.length;
for (let i = 0; i < length; i++) {
    console.log(arr[i]);
}



// /* ------------------------- */

/*
    EJERCICIO
        Crea una función que dado un array imprima cada uno de los elementos con su posición

        ["Hola", "Mundo"]

        >> 1.- Hola
        >> 2.- Mundo

        ["1.- Hola", "2.- Mundo"]
*/

// Solución
function printArrayElements(array) {
    const length = array.length;

    for (let i = 0; i < length; i++) {
        console.log(i + ".-", array[i]);
    }
}

printArrayElements(["Hola", "Mundo"]);
printArrayElements(["HTML", "CSS", "JavaScript", "Node", "React", "DevOps"])



/*
    Cuando pasamos un array como parámetro, pasamos la referencia al objeto, por lo que si modificamos el array
    estaríamos modificando el array que nos han pasado, y eso siempre debemos de evitarlo.

    Para crear una copia del array se puede usar el spread operator [...Array] obteniendo un nuevo array con los mismos elementos
*/
function formatArrayElements(array) {
    array = [...array];
    const length = array.length;

    for (let i = 0; i < length; i++) {
        array[i] = (i + ".- " + array[i]);
    }
    return array;
}
formatArrayElements(["Hola", "Mundo"]);

let originalArray = ["HTML", "CSS", "JavaScript", "Node", "React", "DevOps"];
let formatedArray = formatArrayElements(originalArray);
console.log(formatedArray);
console.log(originalArray);




let str = "Hola Mundo";
let str2 = [...str];
console.log(str2);

// true puesto que son el mismo array
let a = [1, 2, 3];
let b = a;
console.log(a === b);


let a = [1, 2];
let b = [4, 5];

let c = a;

c[0] = b[0];

console.log(a, b);

// [4, 2][4, 5]; puesto que c es el mismo array que a


// Arrays de 2 dimensiones
let arrayBidimensional = [0, [1, 2], 3];
console.log(arrayBidimensional);
console.log(arrayBidimensional[1][0]);