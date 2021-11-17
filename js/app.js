const btnNav = document.querySelector(".navegacion__boton");
const lineaClose = document.querySelector("#linea-close");
const nav = document.querySelector(".navegacion__enlaces");

btnNav.addEventListener("click", () => {
    nav.classList.toggle("toggle");
    lineaClose.classList.toggle("linea-close");
})