/*
    Math.random() es una función que devuelve un número en el rango [0, 1)
    En otras palabras, puede llegar a incluir el 0, pero no el 1
*/
console.log(Math.random() * 5); // [0, 5)

/*
    JSON - JavaScript Object Notation (Estándar entre lenguajes)

    Si hablais con gente de python no digais nunca JSON, decir Diccionarios
    Diccionarios === JSON

    JSON sirve para almacenar varios datos con un nombre para cada dato

    Un JSON se puede declarar con comillas en la clave o no, es indiferente en JavaScript, pero si le vamos a mandar
    a otro lenguaje el JSON, es preferible que tenga las comillas.
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

// Para acceder a una propiedad como profesiones podríamos hacerlo de dos formas:
console.log(persona.profesiones);
// O como si la clave fuese la posición del array (no recomendado a no ser que la clave provenga de una variable)
console.log(persona["profesiones"]);

// Para acceder al segundo elemeneto del array de profesiones
console.log(persona.profesiones[1]);

console.log(persona.profesion); //más recomendable
let prop = prompt("Qué dato quieres saber?");
console.log(persona[prop]) //si las claves tienen espacios, si las claves dependen de una variable

// Para acceder al primer elemento del array de profesiones de la pareja
// Primero accedemos a la pareja y después a su profesión
console.log(persona.pareja.profesiones[0]);

console.log(Object.keys(persona));
console.log(Object.values(persona));
console.log(Object.entries(persona));

/*
    JSONs se pueden utilizar para todo
    En JSONs se puede meter de todo
*/

// Como por ejemplo una función
let coche = {
    "marca": "Asiento",
    "modelo": "Leon",
    "arrancar": function () {
        console.log("Brum Brum");
    }
}

// Y ejecutar dicha función, aunque en este caso se llamaría método, puesto que es una función de un objeto
coche.arrancar();


// Una función también podría devolver un JSON
function generarPersona(name, age) {
    /*
        A la hora de declarar un JSON, si queremos llamar a las claves igual que las variables que tenemos podemos poner
        directamente el nombre de la variable.

        Sería lo mismo que:
            return {"name": name, "age": age}
    */
    return { name, age }
}

// Y podríamos leerlo
console.log(generarPersona("Miguel", 19));
console.log(generarPersona("Fulano", 80));
console.log(generarPersona("Pepe", 20));

let example = { name: "Miguel", age: 19, surname: "Florido" };
// Si queremos guardar en variables los datos de un JSON, podríamos usar destructuring
let { name, age } = example;
/*
    En este caso cogeríamos la propiedad name del json y la guardaríamos en una variable, igual con age

    Otra forma:
        let name = example.name;
        let age = example.age;
*/

// Para los arrays funciona igual, y si queremos omitir un dato, dejamos un espacio vacío
let [, second, third, fourth] = [1, 2, 3, 4];

/*
    Equivalente a:
        let array = [1, 2, 3, 4]
        let second = array[1];
        let third = array[2];
        let fourth = array[3];
*/

let data = {
    "name": "Miguel",
    "apellidos": "florido",
    "edad": 19,
    "gustos": ["programación"],
    "ciudad": "Madrid"
}

/*
    También podríamos obtener 2 datos y el resto meterlos en un nuevo json
    Equivalente a:
        let gustos = data.gustos;
        let ciudad = data.ciudad;
        let newData = { name, apellidos, edad };
*/
let { gustos, ciudad, ...newData } = data;
console.log(newData);

// Recordemos que un JSON puede tener en su interior cualquier tipo de dato
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