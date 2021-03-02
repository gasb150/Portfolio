// Url actual
let URLact = window.location.pathname.substr(-6,1);
console.log(URLact)

//Imagenes
let images = [`./assests/images/project_${URLact}/img_1.jpeg`, `./assests/images/project_${URLact}/img_2.jpeg`, `./assests/images/project_${URLact}/img_3.jpeg`, `./assests/images/project_${URLact}/img_4.jpeg`, `./assests/images/project_${URLact}/img_5.jpeg`];
//Elemento para cargar el slider
let slider = document.getElementById("slider-js");
//elemento general
let sliderContainer = document.getElementById("slider-container");
// Ancho del contenedor
slider.style.width = `${images.length * 100}%`;
//Cargar navegacion
let sliderNav = document.getElementById("slider-navigation");
//cuando tenemos slide activo
let active = true;
//eventos para raton hover
sliderContainer.addEventListener("mouseover", ()=>{
    if (active) active = false;
});

//eventos para raton out
sliderContainer.addEventListener("mouseout", ()=>{
    if (!active) active = true;
});
//Evento al pulsar navegacin
sliderNav.addEventListener("click", (e)=> slideImage(e.target.id.slice(-1)));
//Dibujar slide
for (let img in images){
    //cargar imagenes
    slider.innerHTML += `<img src="${images[img]}" class="slider__img" style="width: ${100/images.length}%">`;
    //cargar navegacion

    sliderNav.innerHTML += `<img src="${images[img]}" class="${img==0 ? 'slider-nav slider-nav--active' : 'slider-nav'}" id="slider-nav-${img}" style="width: ${100/images.length}%">`;
    //
}
//
// COntador de imagenes
let conta =0;

//intervalos de tiempo para contador
let startInterval = ()=> setInterval(counter, 5000);

//iniciar contador
startInterval();

//cambio de img
function counter() {
    if (active){
        conta++;
        if (conta>=images.length) conta=0;
        setInterval(slideImage(conta), 5000);
        setInterval(setActive(conta),5000);
    }
}

function slideImage(id) {
    if (!active && !isNaN(id)){
        conta = id;
        setActive(id);
        console.log(conta)
    }

    slider.style.left = `-${id}00%`
}
let navIcons = [...document.getElementsByClassName("slider-nav")];

function setActive(id) {
    // for(let icon in navIcons){
    //     if(icon < navIcons.length){
    //         if(navIcons[icon].id=== "slider-nav-"+id){
    //             document.getElementById(navIcons[icon].id).classList.add("slider-nav--active");
    //         }else{
    //             document.getElementById(navIcons[icon].id).classList.remove("slider-nav--active");
    //         }
    //     }
    // }
     navIcons.map(idValue => idValue.attributes.id.nodeValue.slice(-1)== id ? 
                             idValue.classList.add("slider-nav--active") : 
                             idValue.classList.remove("slider-nav--active",
                             ))
}

