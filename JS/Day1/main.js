const PI = 3.141516;
// let msg = "Hola Mundo";
// const msg = "Hola Mundo"; //El valor de const no podía cambiar


// Calculadora que sume 2 números
// let num1 = parseInt(prompt("Introduce número 1"));
// let num2 = (prompt("Introduce número 2")) * 1;

// console.log("La suma es:", num1 + num2);

// /*

// Pido datos a un servidor
// Proceso esos datos
// Los pongo bonitos

// Volver a sumar
// */
// let num1 = parseInt(prompt("Introduce número 1"));
// let num2 = (prompt("Introduce número 2")) * 1;

// console.log("La suma es:", num1 + num2);

// /*




// */

// let num1 = parseInt(prompt("Introduce número 1"));
// let num2 = (prompt("Introduce número 2")) * 1;

// console.log("La suma es:", num1 + num2);

//Definición de función
function sum(num1, num2) {
    /* Una función pura es aquella que no utiliza ningún dato
        Que esté por encima de su ámbito (scope)*/
    //Lo que devuelve hacia fuera
    return num1 + num2;

    //Single Respnsibility -> Una función solo debe de hacer una cosa
    //Open/Close -> Abierto para su extensión pero cerrado para su modificación
    //Liskov Substitution -> Todo objeto debería de poder ser reemplazado por su instancia
    //Interface Segregation -> Mejor tener varias vistas especializadas que una sola general
    //Dependency Insersion -> La definición debe de depender de una abstracción, nunca de la implementación

    //Reusabiliad
}

function AskUserForSum() {
    let n = parseInt(prompt("Introduce número 1"));
    let n2 = (prompt("Introduce número 2")) * 1;
    return sum(n, n2);
}
// console.log(num1);

// let value = AskUserForSum();
// console.log(value);
/*
Muchas cosas
*/



/*
    Define una función la cual acepte como parámetro una edad
    Y devulva true si es mayor de edad
    O false si es menor de edad
*/

function validAge(age) {
    return (age >= 18);

    // if (age >= 18) {
    //     return true;
    // }
    // return false;

    // if (age >= 18) {
    //     return true;
    // }
    // else {
    //     return false;
    // }
}


let valid = validAge(17);
console.log(valid);


/*
    Define una función que dada una edad y un lugar de nacimiento
    devuelva true si es menor de edad y ha nacido en "Madrid"
*/

function validateAgeAndBirthPlace(age, birthPlace) {
    return (validAge(age) === false && birthPlace === "Madrid");

    // if (validAge(age) === false && birthPlace === "Madrid") {
    //     return true;
    // }
    // return false;
}





// console.log("Hola Mundo Cruel".length);

/**
 * 3 tipos de bucles
 *
 * while
 * do...while
 * for
 */

let i = 0;
// Condición de parada
// Primero va a comprobar si se cumple la condición
//  Si se cumple ejecuta el código en su interior
while (i < 10) {
    console.log("Una vuelta más", i);
    /* código a repetir */
    i++;
}

let str = "Hola Mundo, como estás?";
i = 0;
while (i < str.length) {
    console.log(i, ":", str[i]);
    i++;
}
console.log("Terminó valiendo", i);


i = 0;
do {
    console.log(i);
    i++;
} while (i < 100);


console.log("i vale:", i);
for (let i = 0; i < 10; i++) {
    console.log("Vuelta:", i);
}
console.log("i vale:", i);



/*
    Función la cual me imprima por consola los números del 0 al 100
    Que sean divisibles entre n
*/

function printDivisibleByN(m, j, n = 9, k = 3, l = 2) {
    for (let i = 0; i <= 100; i++) {
        if (i % n === 0)
            console.log(i);
    }

    // for (let i = 0; i <= 100; i += 8) {
    //     console.log(i);
    // }
}

printDivisibleByN(2, 3, 4, 5);



/*
    FizzBuzz:

    Crea una función llamada fizzBuzz la cual imprima por consola
    Todos los números del 1 al 100 de la siguiente forma:

    1
    2
    Fizz
    4
    Buzz
    ...
    14
    Fizz Buzz

    Si el número es divisible entre 3 imprime "Fizz"
    Si el número es divisble entre 5 imprime "Buzz"
    Si es divisible entre ambos imprime "FizzBuzz"
    Si no lo es imprime el número

*/