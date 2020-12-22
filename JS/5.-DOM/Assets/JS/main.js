/*
    API DOM
        API
            Application Programming Interface
        HTML APIs
            X API DOM [Document Object Model]
            X API BOM [Browser Object Model]
            API History [Al historial de navegación]
            API Geolocation [Geolocalización]

            API fetch (para consular APIs de terceros)

    SPA
        Single Page Application (páginas que no se recargan, y tienen todo su contenido en la misma)
*/

// prompt("Pedir datos"); //window.prompt
// alert("Esto es una alerta"); //window.alert
// function setTimeout(f, ms) {
//     while (tiempoActual - tiempoInicial < ms) { }
//     f();
// }

// API BOM

// console.log("Antes del timeout");
// setTimeout(function () {
//     alert("Ha pasado 1 segundo")
//     console.log("Durante el timeout");
// }, 1000);
// console.log("Después del timeout");

// let loops = 0;

// let interval = setInterval(function () {
//     loops++;
//     if (loops >= 5)
//         clearInterval(interval);
//     console.log("Se ha vuelto a llamar")
// }, 1000);


//API DOM

// console.log(document);

// let divs = document.getElementsByTagName("div");
// console.log(divs[0]);

// let divsWithClass = document.getElementsByClassName("primary");
// console.log(divsWithClass[0]);

// let divWithId = document.getElementById("important");
// console.log(divWithId);


// /* -------- */

// divs = document.querySelectorAll("div");
// console.log(divs[0]);

// divsWithClass = document.querySelectorAll("div.primary");
// console.log(divsWithClass);

// divWithId = document.querySelector("#important");
// console.log(divWithId);



const div = document.querySelector(".primary");

// div.innerText = "<p>Hola Mundo</p>";
// PROHIBIDO: div.innerHTML = "<p>Hola Mundo</p>";

let p = document.createElement("p");
div.appendChild(p);
console.log(p);
p.innerText = "Hola Mundo";
p.className = "TheBest P";
p.id = "MyId";
p.className += " red";

// console.log(p.parentElement.nextElementSibling);
// console.log(div.nextElementSibling);
// div.removeChild(p);
// div.nextElementSibling
// div.lastElementSibling
// div.firstElementChild
// div.lastElementChild

p.remove();


/*
JSX
    function render() {
        return (
            <div>
                <h1>Hola</h1>
            </div>
        )

    }
    render();
*/


div.addEventListener("click", function (event) {
    event.target.remove();
})

let input = document.querySelector("input");

input.addEventListener("", function (e) {
    console.log(e.target.value);
});


console.log(new Date("12/15/2017 23:30:00").getHours());

let a = document.querySelectorAll("a");
let length = a.length;
for (let i = 0; i < length; i++) {
    a[i].addEventListener("click", function (e) {
        e.preventDefault();
        // window.location.href = e.target.href;
        window.open(a[i].href, "_blank");
        e.target.style.backgroundColor = "#0000ff";
    })
}