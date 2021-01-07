let str = "Hola";
let str2 = '';

let num1 = 3;
let msg = `El resultado es
${[1, 2, 3]}`;
console.log(msg);
console.log("el resultado es\n", [1, 2, 3]);




/*
    window.location

    Puedo hacer muchas cosas:
        * Ver la url
        * Ver el pathname (/login, /contacto...)
        * Redireccionar al usuario
*/

// window.location.href = "../5.-DOM/index.html";

/*
    window.open()


    Hacer una redirección:
        * En la misma página
        * En una página en blanco
        * ...
*/

let button = document.querySelector("#openGoogle");

button.addEventListener("click", function () {
    window.open("https://google.com");
});




/*
    LocalStorage es una base de datos no relacional
    Es una base de datos documental


    localStorage:
        * Crear una entrada               (C)
        * Leerla                          (R)
        * [No la tiene] Actualizar        (U)
        * Eliminarla                      (D)
*/

// localStorage.setItem("highScore", 100);
// console.log(localStorage.getItem("highScore"));
// localStorage.removeItem("highScore");


let body = document.querySelector("body");

let score = 0;

let btnIncrement = document.createElement("button");
btnIncrement.innerText = "Incrementar puntuación";

let btnGetHighScore = document.createElement("button");
btnGetHighScore.innerText = "Ver máxima puntuación";

let btnSaveScore = document.createElement("button");
btnSaveScore.innerText = "Guardar puntuación";

let currentScore = document.createElement("p");
currentScore.innerText = score;


body.appendChild(btnIncrement);
body.appendChild(btnGetHighScore);
body.appendChild(btnSaveScore);
body.appendChild(currentScore);


btnIncrement.addEventListener("click", function () {
    score += 10;
    currentScore.innerText = score;
});

btnGetHighScore.addEventListener("click", function () {
    let highScore = localStorage.getItem("highScore");
    console.log(highScore);
});

btnSaveScore.addEventListener("click", function () {
    let highScore = localStorage.getItem("highScore");
    if (score > highScore)
        localStorage.setItem("highScore", score);
});


localStorage.setItem("storedObject", JSON.stringify({ nombre: "Miguel" }))

let objectFromLocalStorage = localStorage.getItem("storedObject");
let convertedToObject = JSON.parse(objectFromLocalStorage);
console.log(convertedToObject);

// console.log(JSON.stringify({ nombre: "Miguel" }) + "Hola")
// console.log(JSON.stringify([1, 2, 3]));