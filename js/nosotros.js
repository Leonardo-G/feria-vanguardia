const imgCuadricula = document.querySelectorAll("#cuadricula img");
const galeria = document.querySelector("#galeria");

document.addEventListener("DOMContentLoaded", () => {
    imgEvent()
})

function imgEvent(){
    imgCuadricula.forEach( (img, idx) => {
        img.addEventListener("click", zoomImg)
        img.dataset.img = idx + 1
    })
}

function zoomImg(e){
    const divContainer = document.createElement("div");
    divContainer.classList = "zoom";
    divContainer.id = "zoom";
    
    const imgContainer = document.createElement("div");
    imgContainer.classList = "zoom__container";

    const iconClose = document.createElement("i");
    iconClose.classList = "fas fa-times iconClose";
    
    const img = document.createElement("img");
    img.classList = "zoom--img";
    img.src = e.target.src;
    img.alt = "Feria Vanguardia";

    divContainer.appendChild(iconClose)
    imgContainer.appendChild(img);
    divContainer.appendChild(imgContainer);
    galeria.appendChild(divContainer);

    iconClose.onclick = () => {
        divContainer.remove();
    };
}

function iconClose(){
    const zoom = document.querySelector("#zoom");
    console.log("cerradp")
}