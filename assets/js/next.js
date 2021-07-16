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
        document.getElementById("info").innerHTML = '<div class="col-4"><img class="img-fluid imagen" src="./assets/images/yo.png"></div><div class="col-4"><h1 class="texto-bienvenida">Mi nombre es Gonzalo</h1></div>';
        animateCSS('.my-element', 'bounce').then((message) => {
            // Do something after the animation
            animateCSS('.my-element', 'bounce');
          });
        window.location.href="/index.html#1";
    }else if(page=="#1"){
        //ACERCA -> PORTAFOLIO
        document.getElementById("info").innerHTML = '<div class="col-4"><img class="img-fluid imagen" src="./assets/images/logo.png"></div><div class="col-4"><h1 class="texto-bienvenida">PORTAFOLIO</h1></div>';
        animateCSS('.my-element', 'bounce').then((message) => {
            // Do something after the animation
            animateCSS('.my-element', 'bounce');
          });
        window.location.href="/index.html#2";
    }else if(page=="#2"){
        //PORTAFOLIO -> CONTACTO
        document.getElementById("info").innerHTML = '<div class="col-4"><h1 class="texto-bienvenida">CONTACTAME</h1></div>';
        animateCSS('.my-element', 'bounce').then((message) => {
            // Do something after the animation
            animateCSS('.my-element', 'bounce');
          });
        window.location.href="/index.html#3";
    }else if(page=="#3"){
        //CONTACTO -> INDEX
        document.getElementById("info").innerHTML = '<div class="col-4"><img class="img-fluid imagen" src="./assets/images/imagen_1.png"></div><div class="col-4"><h1 class="texto-bienvenida">Bienvenido a mi pagina!</h1></div>';
        animateCSS('.my-element', 'bounce').then((message) => {
            // Do something after the animation
            animateCSS('.my-element', 'bounce');
          });
        window.location.href="/index.html#";
    }else{
        window.location.href="/index.html";
        //ALL -> INDEX
    }
}