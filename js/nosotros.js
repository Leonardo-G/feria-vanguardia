const imgCuadricula = document.querySelectorAll("#cuadricula img");
const galeria = document.querySelector("#galeria");
let imgs = [];
let currentImgUnique = 0;
let currenSrcImg = [];

document.addEventListener("DOMContentLoaded", () => {
    imgEvent();
})

function imgEvent(){
    imgCuadricula.forEach( (img, idx) => {
        img.addEventListener("click", zoomImg)
        img.dataset.img = idx + 1;
        imgs.push(img);
    })
}

function zoomImg(e){

    const currentImg = document.querySelector("#zoom");

    if(currenSrcImg.length === 0){
        console.log("Bienvenido")
        currenSrcImg = [e.target];
        currentImgUnique = e.target.dataset.img;
    }
    if(currentImg){
        currentImg.remove();
    }
    
    const divContainer = document.createElement("div");
    divContainer.classList = "zoom";
    divContainer.id = "zoom";
    
    const imgContainer = document.createElement("div");
    imgContainer.classList = "zoom__container";

    const iconClose = document.createElement("i");
    iconClose.classList = "fas fa-times iconClose";
    
    const img = document.createElement("img");
    img.dataset.img = currenSrcImg[0].dataset.img;
    img.classList = "zoom--img";
    img.src = currenSrcImg[0].src;
    img.alt = "Feria Vanguardia";

    const arrowRight = document.createElement("i");
    arrowRight.classList = "fas fa-arrow-right iconRight";
    arrowRight.onclick = rightImg

    divContainer.appendChild(iconClose);
    divContainer.appendChild(arrowRight);
    imgContainer.appendChild(img);
    divContainer.appendChild(imgContainer);
    galeria.appendChild(divContainer);

    iconClose.onclick = () => {
        divContainer.remove();
        currentImgUnique = 0;
        currenSrcImg = [];
    };
}

function rightImg(){
    const imgCurrent = imgs.find( img => Number(img.dataset.img) === (Number(currentImgUnique) + 1));
    currenSrcImg = [imgCurrent];
    currentImgUnique = imgCurrent.dataset.img
    console.log(currenSrcImg)

    zoomImg();
}