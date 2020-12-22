/*
    ¿Qué pasa cuando necesito que una variable almacene múltiples valores?
        Puedo crear varias variables
    ¿Y si no sabemos exactamente cuantos valores hay?
        PUES EXISTEN LOS ARRAYS
*/
// // let msg = "Hola Mundo";
// // let msg2 = "¿Qué tal?";

// let i = 0;
// let n = 2;
// /*
//

//     Existen los arrays (un conjunto de valores almacenados en una misma variable)
// */
// // while (i < n) {
// //     let msg = prompt("Introduce el mensaje", i);
// //     console.log(msg);
// //     i++;
// // }

// // let msgs = ["Hola Mundo", "¿Qué tal?", "El mundo es cruel"];
// // console.log(msgs);

// // console.log("Hola".length);
// // console.log("Hola"[1]);

// // let str = ["H", "o", "l", "a"];
// // console.log(str[0], str[1], str[2], str[3], str[4]);

// // console.log(msgs[1]);

// // i = 0;
// // let msg = [];
// // let continuar = true;
// // while (continuar) {
// //     msg[i] = prompt("Introduce el mensaje", i);
// //     if (prompt("Quieres continuar [y] o no [n]?") === "n")
// //         continuar = false;
// //     i++;
// // }
// // console.log(msg);


// // let msg = [];
// // let continuar = true;
// // while (continuar) {
// //     msg.push(prompt("Introduce el mensaje"));
// //     if (prompt("Quieres continuar [y] o no [n]?") === "n")
// //         continuar = false;
// // }
// // console.log(msg);

// let messages = [1, 2, 3];
// console.log(messages, messages.length);
// //añadir uno al final
// messages.push(4);
// console.log("Push", messages.push("Hola Mundo"));
// console.log(messages, messages.length);
// //Eliminar uno del final
// console.log("Pop", messages.pop());
// console.log(messages, messages.length);


// //Añade un nuevo elemento al comienzo del array
// console.log(messages.unshift(6));
// console.log(messages, messages.length);
// console.log("Shift", messages.shift());
// console.log(messages, messages.length);


// //Eliminar un elemento en la posición dada
// messages.splice(2, 2);
// console.log(messages);

// //Añadir en la posición dada
// messages.splice(2, 0, "Hola", "Mundo", "Que", "Tal");
// console.log(messages);


// /*
//     let arr = ["Hola 1", "Mundo 2", "Prueba 3", "Prueba 4"]
//     >> "Hola 1"
//     >> "Mundo 2"
//     >> "Prueba 3"
// */
// let arr = ["Hola 1", "Mundo 2", "Prueba 3", "Prueba 4"];
// let length = arr.length;
// for (let i = 0; i < length; i++) {
//     console.log(arr[i]);
// }



// /* ------------------------- */

// /*
//     Crea una función que dado un array imprima cada uno de los elementos con su posición

//     ["Hola", "Mundo"]

//     >> 1.- Hola
//     >> 2.- Mundo

//     ["1.- Hola", "2.- Mundo"]
// */

// // function printArrayElements(array) {
// //     const length = array.length;

// //     for (let i = 0; i < length; i++) {
// //         console.log(i + ".-", array[i]);
// //     }
// // }

// // printArrayElements(["Hola", "Mundo"]);


// // printArrayElements(["HTML", "CSS", "JavaScript", "Node", "React", "DevOps"])


// function formatArrayElements(array) {
//     array = [...array];
//     const length = array.length;

//     for (let i = 0; i < length; i++) {
//         array[i] = (i + ".- " + array[i]);
//     }
//     return array;
// }

// formatArrayElements(["Hola", "Mundo"]);

// let originalArray = ["HTML", "CSS", "JavaScript", "Node", "React", "DevOps"];
// let formatedArray = formatArrayElements(originalArray);

// console.log(formatedArray);
// console.log(originalArray);



// let str = "Hola Mundo";
// let str2 = [...str];
//Destructuring Operator -> Operador desestructurante
// console.log(str2);

// let a = [1, 2, 3];
// let b = a;
// console.log(a === b);

// //true
// //false
// //chorizo


// let a = [1, 2];
// let b = [4, 5];

// let c = a;

// c[0] = b[0];

// console.log(a, b);

// [4, 2][4, 5];


let arrayBidimensional = [0, [1, 2], 3];
console.log(arrayBidimensional);
console.log(arrayBidimensional[1][0]);