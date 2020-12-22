/*
    Var es una variable que se puede declarar
    múltiples veces y además no respeta los ámbitos (scopes)
*/
// var mensaje = 1;

/*
    Let es un tipo de variable que se puede declarar tan solo una vez por
    ámbito.
*/
// let mensaje = 1;

/*
    Const es una variable que no se puede modificar su valor tras la inicialización.
*/
const PI = 3.141516;
let TAU = 6.28;
// console.log(TAU);
TAU = 0;
// console.log(TAU);

/*
    TIPOS DE DATOS
        Number
            int [integer] número entero
            float/double  número decimal
        Strings [Cadenas de texto]
        Booleanos (true/false 1/0)

        Estructuras de datos
            Arrays [lista de datos]
            Objetos
                JSONS [Representa datos más complejos en estructuras]
                OOP/POO Clases [Unos moldes de código]
*/


// Operadores

// +
let a = 1;
let b = 2;
let c = a + b;
console.log("Suma", c);

// -
a = 1;
b = 2;
c = a - b;
console.log("Resta", c);

// *
a = 1;
b = 2;
c = a * b;
console.log("Multiplicación", c);

// /
a = 1;
b = 2;
c = a / b;
console.log("División", c);

// % (resto de una división)
a = 1;
b = 2;
c = a % b;
console.log("Resto", c);

//NaN -> Not a Number

// a = "Hola2";
// b = 2;
// c = a - b;
// console.log(c);

// a += 1 es lo mismo que a = a + 1

a = "Hola"
a += " Mundo"; // a = a + "Mundo"
console.log("+=", a);

// a -= 1 es lo mismo que a = a - 1
a = 1;
a -= 2;
console.log("-=", a);

// a *= 1 es lo mismo que a = a * 1
a = 1;
a *= 5;
console.log("*=", a);

// a /= 2 es lo mismo que a = a / 2
a = 7;
a /= 2;
console.log("/=", a);

// a %= 3 es lo mismo que a = a % 3

a = 7;
a %= 2;
console.log("%=", a);


let i = 0;
//Operador de POSTincremento
/*
    1er paso: Obtiene el valor
        console.log(i);
    2º paso: Aumenta en 1 el valor
        i += 1;

*/
console.log(i++);
console.log(i);

//Operador de PREincremento
/*
    1er paso: Aumenta en 1 el valor
        i += 1;
    2º paso: Obtiene el valor
        console.log(i);

*/
console.log(++i);


i = 0;
//Igual que el i++
console.log("i--", i--);
console.log("i", i);

//Igual que el ++i
console.log("--i", --i);
console.log("i", i);

// CONDICIONALES

/*
    BOOLEANOS
        Evaluan a true (1) o a false (0)
*/



let ter1 = 3;
let ter2 = "3";
/*
    ==
        El valor (y no el tipo)  de la izquierda es igual al de la derecha
*/

//3 == 3    siempre es true
//3 == "3"  siempre es true
//3 == 4    siempre es false
//3 == "4"  siempre es false
let boolean = ter1 == ter2;
console.log(ter1, "==", ter2, ":", boolean);

/*
    ===
        El tipo de dato de la izq es igual al de la derecha
            Si lo es:
                Si el valor de la izq es igual al de la der.
*/

//3 === 3   siempre es true
//3 === "3" siempre es false
//3 === 4   siempre es false
//3 === "4" siempre es false

boolean = ter1 === ter2;
console.log(ter1, "===", ter2, ":", boolean);


/*
    !=
        El valor (y no el tipo)  de la izquierda es diferente al de la derecha
*/

//3 != 3    siempre es false
//3 != "3"  siempre es false
//3 != 4    siempre es true
//3 != "4"  siempre es true
boolean = ter1 != ter2;
console.log(ter1, "!=", ter2, ":", boolean);

/*
    !==
        El tipo de dato de la izq es diferente al de la derecha
            Si lo es:
                Si el valor de la izq es diferente al de la der.
*/

//3 !== 3    siempre es false
//3 !== "3"  siempre es true
//3 !== 4    siempre es true
//3 !== "4"  siempre es true

boolean = ter1 !== ter2;
console.log(ter1, "!==", ter2, ":", boolean);

/*
    !booleano
        Niega la expresión booleana después de la !
            !false === true
            !true === false
            !(1 == 2 && 2 == 2) = true
*/
boolean = true;
console.log(boolean, "!boolean", !boolean);

boolean = false;
console.log(boolean, "!boolean", !boolean);

/*
    && (AND)
        Comprueba que la expresión a su izquierda sea true
            Si lo es:
                Comprueba que la expresión a su derecha sea true
                    Si lo es:
                        Evalua true
                    Si no:
                        Evalua false
            Si no lo es:
                Evalua false
*/

let age = 18;
boolean = (true && age !== 17);
console.log(boolean);

boolean = (age === 18 || age === 19);
console.log(boolean);

//-------------

/*
    Nunca se pueden combinar && y || sin un paréntesis puesto que:
        (n > 3 && n < 10 || n == 0)
        podría ser:
            (n > 3 && n < 10) || n == 0
            n > 3 && (n < 10 || n == 0) //Lo cual no tiene sentido
*/
let sexo = "M";
boolean = (age === 18 && (sexo === "F" || sexo === "M"));
console.log("Puedes entrar?", boolean);

age = "18";
i = 1;
boolean = (age === 18 && ++i == 2);
console.log(boolean, i);


//0.3
//0.30000004 Por la coma flotante

//console.log('b' + 'a' + + 'a' + 'a') => baNaNa
console.log("0.1 + 0.2 =", 0.1 + 0.2);

// Mayor o igual a
boolean = (age >= 18);
// Mayor que
boolean = (age > 17);

// Menor o igual a
boolean = (age <= 17);
// Menor que
boolean = (age < 18);

age = 5;
//if ejecuta un fragmento de código si se cumple la condición
if (age >= 18) {
    console.log("Eres mayor de edad");
    //Lo que tiene que pasar
}
//else if ejecuta un fragmento de código si las condiciones anteriores no se cumplen
//pero si esta
else if (age >= 13) {
    console.log("Puedes usar la app con tus padres");
}
//else ejecuta un fragmento de código si no se ha cumplido ninguna condición anterior
else {
    console.log("Lo siento, no puedes usar la app")
}

if (age >= 18 && sexo === "F") {
    console.log("Puedes entrar");
}
else if (age < 18) {
    console.log("Vuelve en unos años");
}
else if (sexo !== "F") {
    console.log("Lo siento, nunca podrás entrar");
}
else {
    console.log("No puedes entrar");
}


sexo = "SP"

//switch...case es una especie de multi if...if...if...else
switch (sexo) {
    //if sexo == "M"
    case "M":
        console.log("Tu sexo es masculino");
        break;
    //if sexo == "F"
    case "F":
        console.log("Tu sexo es femenino");
        break;
    //else
    default:
        console.log("Sexo no identificado");
}

//los case han de ser una constante no una expresión booleana