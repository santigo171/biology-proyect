const showMoreButton = document.getElementById("show-button");
const main_main = document.getElementById("main");
const presentation = document.getElementById("presentation");

const day = document.getElementById("day");
const img1 = document.getElementById("img_montaje1");
const img2 = document.getElementById("img_montaje2");
const img3 = document.getElementById("img_montaje3");

const description1_div = document.getElementById("description1");
const description2_div = document.getElementById("description2");
const description3_div = document.getElementById("description3");

function defineDayNumber() {
    var i = 1;
    while (i <= 9) {
        variable = "document.getElementById('" + i + "')"
        eventListener = ".addEventListener('click', () => modifyMain(" + i + "))"
        eval(variable + eventListener)
        i++
    }
}

function changeImages(number) {
    img1.style.backgroundImage = "url(./img/montaje1/" + number + ".jpg)";
    img2.style.backgroundImage = "url(./img/montaje2/" + number + ".jpg)";
    img3.style.backgroundImage = "url(./img/montaje3/" + number + ".jpg)";

    img1.addEventListener('mouseover', () => img1.style.backgroundImage = "url(./img/montaje1/" + number + "h.jpg)");
    img1.addEventListener('mouseout', () => img1.style.backgroundImage = "url(./img/montaje1/" + number + ".jpg)");
    img2.addEventListener('mouseover', () => img2.style.backgroundImage = "url(./img/montaje2/" + number + "h.jpg)");
    img2.addEventListener('mouseout', () => img2.style.backgroundImage = "url(./img/montaje2/" + number + ".jpg)");
    img3.addEventListener('mouseover', () => img3.style.backgroundImage = "url(./img/montaje3/" + number + "h.jpg)");
    img3.addEventListener('mouseout', () => img3.style.backgroundImage = "url(./img/montaje3/" + number + ".jpg)");
}

function getDescription(number) {
    switch(number) {
        case 1:
            return (
                description1 = "8 de febrero de 2021, Se inicia el montaje, se ponen un total de 6 dientes de ajo en un vaso de plástico lleno con agua y se deja bajo el sol.",
                description2 = "8 de febrero de 2021, Se inicia el montaje, se ponen 3 pinchos con 4 ajos cada uno en una botella de plástico de 1.5L, llena con agua. ",
                description3 = "8 de febrero de 2021, Se inicia el montaje, se pone la cabeza con los ajos en agua y se pone bajo el sol.")
        case 2:
                return (
                description1 = "16 de febrero de 2021, Los ajos han mostrado un progreso muy bueno, 3 de ellos ya tienen un tallo verde y firme en la parte superior y todos tiene raíces. Procedo a cambiarles el agua porque se veía color café.",
                description2 = "11 de febrero de 2021, El agua del montaje está realmente sucia, a pesar de que tiene la toalla encima, hay una gran cantidad de bichos en el interior de la botella nadando sobre el agua. Los ajos no han botado semillas y por eso no se ha seguido a la fase 2. Procedo a cambiarles el agua y a poner un refuerzo mayor a la toalla (Que al parecer no estaba bien atada)",
                description3 = "16 de febrero de 2021, Los ajos han mostrado un progreso exitoso, 5 de ellos tienen un tallo sólido verde y todos tienen raíces, de igual forma procedo a cambiarles el agua.")
        case 3:
            return (
            description1 = "23 de febrero de 2021, De 6 ajos, 2 se quedaron en el fondo sin generar raíces o tallo. Los otros 4 han duplicado su altura, están sólidos y fuertes. Se ve un gran avance y a criterio de la profe ya hay que buscar tierra.",
            description2 = "16 de febrero de 2021, Los ajos no han presentado cambios, tampoco raíces, el agua sigue igual de limpia que cuando se cambió (Entonces la toalla ha resultado exitosa.",
            description3 = "23 de febrero de 2021, Los ajos han presentado un muy buen proceso de germinación. Todos tienen raíces y un tallo, aunque se evidencia que el tallo de los ajos del centro son mas altos. 2 ajos de una esquina tienen una parte como negra o morada.")
        case 4:
            return (
            description1 = "2 de marzo de 2021, Los ajos siguen mostrando un buen crecimiento. algunos de ellos ya tienen raices, y un buen tallo. Sin embargo en el cuerpo se les ve un area morada y/o negra. A mi opinion ya están listos para ser plantados. Se le pedirá permiso a la profesora.",
            description2 = "23 de febrero de 2021, El montaje no ha dado buenos resultados. Produce un fuerte y desagradable olor, el agua se encuentra realmente sucia. Los ajos parecen estar muertos, puesto que no tienen ni raíces ni tallo. Aunque no hay bichos o organismos que se vean a simple vista nadando por el agua o sobre la botella.",
            description3 = "2 de marzo de 2021, Este es el mejor montaje de los 3, todos los ajos tienen un tallo alto y fuerte junto con raíces grandes, aunque los ajos tienen un color muy negro. Se le pregunta a la profe si se puede empezar a plantarlos.")
        case 5:
            return (
            description1 = "9 de marzo de 2021, se plantan los ajos, estan quedando muy bonitos y muestran un buen crecimiento :) .",
            description2 = "2 de marzo de 2021, el montaje no se ve en buenas condiciones, el agua está realmente sucia, tiene unas cosas blancas en su interior, los ajos parecen muertos y el olor es muy desagradable.",
            description3 = "9 de marzo de 2021, se plantan los ajos, estan quedando muy bonitos y muestran un buen crecimiento :) .")
        case 6:
            return (
            description1 = "Aún no se tiene información (Ese día no ha comenzado).",
            description2 = "9 de marzo de 2021, siguen realmente muertos",
            description3 = "Aún no se tiene información (Ese día no ha comenzado).")
        case 7:
            return (
            description1 = "Aún no se tiene información (Ese día no ha comenzado).",
            description2 = "Aún no se tiene información (Ese día no ha comenzado).",
            description3 = "Aún no se tiene información (Ese día no ha comenzado).")
        case 8:
            return (
            description1 = "Aún no se tiene información (Ese día no ha comenzado).",
            description2 = "Aún no se tiene información (Ese día no ha comenzado).",
            description3 = "Aún no se tiene información (Ese día no ha comenzado).")
        case 9:
            return (
            description1 = "No aplica",
            description2 = "Aún no se tiene información (Ese día no ha comenzado).",
            description3 = "No aplica")
    }

}

function modifyMain(number) {
    day.innerHTML = number;
    getDescription(number);
    description1_div.innerHTML = description1;
    description2_div.innerHTML = description2;
    description3_div.innerHTML = description3;
    changeImages(number);
}

function showContent() {
    main_main.style.display = "block";
    presentation.style.display = "none";
}

function main() {
    showMoreButton.addEventListener('click', () => showContent());
    defineDayNumber();
}

main()