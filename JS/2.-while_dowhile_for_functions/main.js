const PI = 3.141516;
// let msg = "Hola Mundo";
// const msg = "Hola Mundo"; // El valor de const no podía cambiar


/*
    ¿Qué pasaría si necesitasemos un fragmento de código en diferentes partes
    de nuestro programa?

    ¿Necesitaríamos volver a pegar el código de nuevo? ¿Y si son 101 veces?

    ¿Podría declarar primero el código y después ejecutarlo?

    Pues si, existen las funciones, un bloque de código con un nombre (como las variables)
    que puede ser ejecutado tantas veces como sea necesario tan solo con INVOCAR su nombre

    Declaración -> function sumar() {}
    Ejecución -> sumar();
*/

// Queremos una calculadora que sume 2 números

// prompt es una función que al llamarla pide al usuario una entrada de texto
// siempre devuelve un String

// parseInt es una función que dado un string lo convierte a número entero (int)

// Obtenemos 2 números
let num1 = parseInt(prompt("Introduce número 1"));
let num2 = (prompt("Introduce número 2")) * 1;


// E imprimimos su suma
console.log("La suma es:", num1 + num2);

/*
Pero que pasaría si tuviese la siguiente funcionalidad:
    Sumo
    Pido datos a un servidor
    Proceso esos datos
    Los pongo bonitos

    Volver a sumar
*/

// Definición de función

// Creamos una función con el mismo código que teníamos antes
// De forma que hemos creado su abstracción
function calculatorSum() {
    let num1 = parseInt(prompt("Introduce número 1"));
    let num2 = (prompt("Introduce número 2")) * 1;

    // E imprimimos su suma
    console.log("La suma es:", num1 + num2);
}
// Podríamos ejecutarlo con:
calculatorSum();

// La ventaja de las funciones (también if, else, else if...) es que crean su propio
//ámbito (scope) de forma que las variables declaradas en su interior no son usables
// fuera de dicho ámbito


/* PRINCIPIOS SOLID */
// Single Respnsibility -> Una función solo debe de hacer una cosa
// Open/Close -> Abierto para su extensión pero cerrado para su modificación
// Liskov Substitution -> Todo objeto debería de poder ser reemplazado por su instancia
// Interface Segregation -> Mejor tener varias vistas especializadas que una sola general
// Dependency Insersion -> La definición debe de depender de una abstracción, nunca de la implementación


// como hemos visto, nunca es recomendable que una función sea encargada de hacer más de una cosa
// Por ello vamos a crear una función más abstracta que solo sepa sumar 2 números
// Para ello existen los parámetros:

/* Una función pura es aquella que no utiliza ningún dato
    Que esté por encima de su ámbito (scope)
*/

/*
    Parámetros:
        variables que se pueden pasar a una función para ser usadas en su interior
        estas variables son una copia del valor original.

        El nombre dado a cada parámetro tan solo sirve para usar el valor en la función
        no tiene que ver con ningún nombre fuera de la propia función
*/

// Esta función recibe 2 parámetros los cuales tiene que sumar, y dicha suma ha de ser
// devuelta a quien llamó la función (return es el encargado de esto último)
function sum(num1, num2) {
    // Lo que devuelve hacia fuera
    return num1 + num2;
    // La ventaja: Reusabiliad
}

/*
    Return:
        Devuelve un valor a quién invoque la función:
            sum(1, 2) // retornaría 3 de forma que podría hacer:
                let value = sum(1, 2);
                console.log(value) // Imprimiría por pantalla 3
                // El resultado (value) podría usarlo más adelante en mi app

        Cuando una función encuentra un return, termina la función retornando dicho valor
*/

function AskUserForSum() {
    let n = parseInt(prompt("Introduce número 1"));
    let n2 = (prompt("Introduce número 2")) * 1;
    return sum(n, n2);
}

let value = AskUserForSum();
console.log(value);


/*
    Ejercicio:
        Define una función la cual acepte como parámetro una edad
        Y devulva true si es mayor de edad
        O false si es menor de edad
*/

// Solución:
function validAge(age) {
    /* SOLUCIÓN 1 */
    return (age >= 18); // El return devolvería la comparación, la cual evaluará a true o a false

    /* SOLUCIÓN 2 */
    if (age >= 18) {
        return true;
    }
    return false;   // Como return termina la función si ha entrado en el if no se ejecuta esta línea, en otras palabras, funciona como un else

    /* SOLUCIÓN 3 */
    if (age >= 18) {
        return true;
    }
    else {
        return false;
    }
}

// Invocación de la función
let valid = validAge(17);
console.log(valid);


/*
    Ejercicio:
        Define una función que dada una edad y un lugar de nacimiento
        devuelva true si es menor de edad y ha nacido en "Madrid"
*/

function validateAgeAndBirthPlace(age, birthPlace) {
    /* SOLUCIÓN 1 */
    return (!validAge(age) && birthPlace === "Madrid"); //!validAge(age) significa que validAge(age) sea false
    // Usamos la función de la que ya disponemos para esta función (reutilización de código)
    // Principio DRY (Don't Repeat Yourself Stupid)

    /* SOLUCIÓN 2 */
    return (validAge(age) === false && birthPlace === "Madrid");
    // Usamos la función de la que ya disponemos para esta función (reutilización de código)
    // Principio DRY (Don't Repeat Yourself Stupid)

    /* SOLUCIÓN 3 */
    if (age < 18 && birthPlace === "Madrid") {
        return true;
    }
    // Esta solución no la recomiendo, puesto que estás repitiendo código
}




/*
    De un string podemos obtener su longitud con:
        string.length
*/

console.log("Hola Mundo Cruel".length);

/*
    Bucles:
        Los bucles sirven para repetir un número determinado de veces el mismo código

        existen 3 tipos de bucles:
            * while
            * do...while
            * for
 */

// Declaramos un iterador (variable que va a servir para contar, se suele llamar i, j, k)
let i = 0;

/*
    While:
        Condición de parada:
            Primero va a comprobar si se cumple la condición
                Si se cumple:
                    ejecuta el código en su interior
                    y vuelve a empezar
*/

while (i < 10 /* Condición de parada */) {
    console.log("Una vuelta más", i);
    /* código a repetir */
    i++; // Incrementamos el iterador para no tener un bucle infinito
}

// Bucle que imprima cada uno de los caracteres de un string

/* Para acceder a un caracter en concreto de un string sería con:
    str[posicionDelCaracter];
*/

let str = "Hola Mundo, como estás?";
i = 0;
while (i < str.length /* Mientras la i sea menor a la longitud del str */) {
    console.log(i, ":", str[i]);
    i++;
}
console.log("Terminó valiendo", i);

/*
    do...While:
        Ejecuta el código en su interior
        Condición de parada:
            Comprueba si se cumple la condición
                Si se cumple:
                    vuelve a empezar
*/

i = 0;
do {
    console.log(i);
    i++;
} while (i < 100);


//Diferencia entre while y do...while: ./while_dowhile.png


/*
    for:
        Es un while mejorado:
            Acepta como parámetros:
                La inicialización de la variable (normalmente iterador)
                La condición de parada
                El incremento del iterador
            Pasos:
                Declara la variable
                ------
                Condición de parada:
                    Primero va a comprobar si se cumple la condición
                        Si se cumple:
                            Ejecuta el código en su interior
                            vuelve a empezar
*/

console.log("i vale:", i);
for (let i = 0; i < 10; i++) {
    //i tiene ámbito local
    console.log("Vuelta:", i);
}
console.log("i vale:", i);


/*
    Ejercicio:

        Función la cual me imprima por consola los números del 0 al 100
        Que sean divisibles entre n
*/

function printDivisibleByN(n) {
    for (let i = 0; i <= 100; i++) {
        if (i % n === 0)
            console.log(i);
    }

    // for (let i = 0; i <= 100; i += 8) {
    //     console.log(i);
    // }
}

printDivisibleByN(3);

// Parámetros por defecto (opcionales)
// Parámetros que si no se les da un valor en la llamada toman un
// valor por defecto

function printDivisibleByN2(n = 3 /* Si no se introduce un valor será 3, si no será otro valor */) {
    for (let i = 0; i <= 100; i++) {
        if (i % n === 0)
            console.log(i);
    }
}

printDivisibleByN2();

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

/*
    FizzBuzz 2 - Ahora igual pero del 1 al 100
*/

/*
    FizzBuzz 3 - Ahora tan solo usa 2 console.log
*/