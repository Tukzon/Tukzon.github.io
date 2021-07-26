const animateCSS = (element, animation, prefix = 'animate__') =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);

    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd, {once: true});
  });

function next(){
    let page = window.location.hash;
    if(page == ""){
        //INDEX -> ACERCA
        animateCSS('.inicio', 'fadeOutLeft').then((message) => {
            // Do something after the animation
            document.getElementById("info").innerHTML = '<div class="row justify-content-around acerca"><div class="col-4"><img class="img-fluid imagen" src="./assets/images/yo.png"></div><div class="col-4"><h1 class="texto-bienvenida">Mi nombre es Gonzalo</h1></div></div><div class="row justify-content-between"><div class="col-4 mx-auto boton"><span class="iconify" data-icon="mdi:arrow-right-bold-outline" data-width="50px" onclick="next();"></span></div></div>';
            animateCSS('.acerca', 'fadeInRight');
          });
        window.location.href="#1";
    }else if(page=="#1"){
        //ACERCA -> PORTAFOLIO
        animateCSS('.acerca', 'fadeOutLeft').then((message) => {
            // Do something after the animation
            document.getElementById("info").innerHTML = '<div class="row justify-content-around portafolio"><div class="col-4"><img class="img-fluid imagen" src="./assets/images/logo.png"></div><div class="col-4"><h1 class="texto-bienvenida">Mi Portafolio</h1></div></div><div class="row justify-content-between"><div class="col-4 mx-auto boton"><span class="iconify" data-icon="mdi:arrow-right-bold-outline" data-width="50px" onclick="next();"></span></div></div>';
            animateCSS('.portafolio', 'fadeInRight');
          });
        window.location.href="#2";
    }else if(page=="#2"){
        //PORTAFOLIO -> CONTACTO
        animateCSS('.portafolio', 'fadeOutLeft').then((message) => {
            // Do something after the animation
            document.getElementById("info").innerHTML = '<div class="row justify-content-around contacto"><h1>CONTACTAME</h1><div class="row justify-content-between"><div class="col-4 mx-auto boton"><span class="iconify" data-icon="mdi:arrow-right-bold-outline" data-width="50px" onclick="next();"></span></div></div>';
            animateCSS('.contacto', 'fadeInRight');
          });
        window.location.href="#3";
    }else if(page=="#3"){
        //CONTACTO -> INDEX
        animateCSS('.contacto', 'fadeOutLeft').then((message) => {
            // Do something after the animation
            document.getElementById("info").innerHTML = '<div class="row justify-content-around inicio"><div class="col-4"><img class="img-fluid imagen" src="./assets/images/imagen_1.png"></div><div class="col-4"><h1 class="texto-bienvenida">Bienvenido a mi pagina!</h1></div></div><div class="row justify-content-between"><div class="col-4 mx-auto boton"><span class="iconify" data-icon="mdi:arrow-right-bold-outline" data-width="50px" onclick="next();"></span></div></div>';
            animateCSS('.inicio', 'fadeInRight');
          });
        window.location.href="#";
    }else{
        window.location.href="#";
        //ALL -> INDEX
    }
}