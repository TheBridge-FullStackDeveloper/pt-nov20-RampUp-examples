/*
    Var es una variable que se puede declarar
    múltiples veces
*/
// var mensaje = 1;
// let mensaje = 1;
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

// %
a = 1;
b = 2;
c = a % b;
console.log("Resto", c);

//NaN -> Not a Number

// a = "Hola2";
// b = 2;
// c = a - b;
// console.log(c);

a = "Hola"
a += " Mundo"; // a = a + "Mundo"
console.log("+=", a);

a = 1;
a -= 2;
console.log("-=", a);

a = 1;
a *= 5;
console.log("*=", a);

a = 7;
a /= 2;
console.log("/=", a);

a = 7;
a %= 2;
console.log("%=", a);


let i = 0;
//Operador de POSTincremento
console.log(i++);
console.log(i);

/*
    1er paso: Obtiene el valor
        console.log(i);
    2º paso: Aumenta en 1 el valor
        i += 1;

*/
//Operador de PREincremento
/*
    1er paso: Aumenta en 1 el valor
        i += 1;
    2º paso: Obtiene el valor
        console.log(i);

*/
console.log(++i);


i = 0;
console.log("i--", i--);
console.log("i", i);

console.log("--i", --i);
console.log("i", i);



// JavaScript Muy Básico

// JavaScript básico

/*
    BOOLEANOS
        Evaluan a true o a false
*/



/*
    ==
        El valor  de la izquierda es igual al de la derecha
*/

/*
    ===
        El tipo de dato de la izq es igual al de la derecha
            Si lo es:
                Si el valor de la izq es igual al de la der.
*/
let ter1 = 3;
let ter2 = "3";

let boolean = ter1 == ter2;
console.log(ter1, "==", ter2, ":", boolean);

boolean = ter1 === ter2;
console.log(ter1, "===", ter2, ":", boolean);



boolean = ter1 != ter2;
console.log(ter1, "!=", ter2, ":", boolean);

boolean = ter1 !== ter2;
console.log(ter1, "!==", ter2, ":", boolean);


boolean = true;
console.log(boolean, "!boolean", !boolean);

boolean = false;
console.log(boolean, "!boolean", !boolean);

let age = 18;
boolean = (true && age !== 17);
console.log(boolean);

boolean = (age === 18 || age === 19);
console.log(boolean);

//-------------

let sexo = "M";
boolean = (age === 18 && (sexo === "F" || sexo === "M"));
console.log("Puedes entrar?", boolean);

age = "18";
i = 1;
boolean = (age === 18 && ++i == 2);
console.log(boolean, i);

console.log("0.1 + 0.2 =", 0.1 + 0.2);

//0.3
//0.30000004 Por la coma flotante
//baNaNa

boolean = (age >= 18);
boolean = (age > 17);

boolean = (age < 18);
boolean = (age <= 17);

age = 5;
if (age >= 18) {
    console.log("Eres mayor de edad");
    //Lo que tiene que pasar
}
else if (age >= 13) {
    console.log("Puedes usar la app con tus padres");
}
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
switch (sexo) {
    case "M":
        console.log("Tu sexo es masculino");
        break;
    case "F":
        console.log("Tu sexo es femenino");
        break;
    default:
        console.log("Sexo no identificado");
}

