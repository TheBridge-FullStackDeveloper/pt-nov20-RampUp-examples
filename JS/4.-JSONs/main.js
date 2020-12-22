console.log(Math.random() * 5 + 5);
console.log(Math.floor(Math.random() * 5 + 5) + 1) //5 - 10


/*
    JSON - JavaScript Object Notation (Estándar entre lenguajes)

    Si hablais con gente de python no digais nunca JSON
    Diccionarios === JSON

    JSON sirve para almacenar varios datos con un nombre para cada dato
*/

let persona = {
    "nombre": "Jason",
    "apellido": "Statham",
    "profesiones": ["Actor", "estructura de datos"],
    "pareja": {
        "nombre": "JSONE",
        "apellido": "Statham",
        "profesiones": ["Actor"]
    }
}

console.log(persona.profesiones[1]);
console.log(persona.pareja.profesiones[0]);

console.log(Object.keys(persona));
console.log(Object.values(persona));
console.log(Object.entries(persona));

/*
    JSONs se pueden utilizar para todo
    JSON se puede meter de todo
*/

let coche = {
    "marca": "Asiento",
    "modelo": "Leon",
    "arrancar": function () {
        console.log("Brum Brum");
    }
}


coche.arrancar();

// console.log(persona.profesion); //más recomendable
// let prop = prompt("Qué dato quieres saber?");
// console.log(persona[prop]) //si las claves tienen espacios, si las claves dependen de una variable



function generarPersona(name, age) {
    return { name, age }
}
let { name, age } = { name: "Miguel", age: 19, surname: "Florido" };
let [, second, third, fourth] = [1, 2, 3, 4];

console.log(third);

console.log(name);
console.log(age);

console.log(generarPersona("Fulano", 80));
console.log(generarPersona("Pepe", 20));

let data = {
    "name": "Miguel",
    "apellidos": "florido",
    "edad": 19,
    "gustos": ["programación"],
    "ciudad": "Madrid"
}

let { gustos, ciudad, ...newData } = data;

console.log(newData);


let data = {
    "property": "value",
    "property1": 1,
    "property2": [1, 2],
    "property3": {
        "first": 1,
        "second": 2
    },
    "property4": function () {
        return "FizzBuzz"
    }
}