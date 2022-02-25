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

function menu(pagina){
  if(pagina == 'inicio'){
    document.getElementById("info").innerHTML = '<div class="row justify-content-around inicio"><div class="col-4"><script src="https://cdn.lordicon.com/lusqsztk.js"></script><lord-icon class="img"src="https://cdn.lordicon.com/jnlncdtk.json" trigger="loop" delay="2500" colors="primary:#109121,secondary:#221920,tertiary:#9cc2f4,quaternary:#ddc2bc,quinary:#e7e2eb" style="width:250px;height:250px"></lord-icon></div><div class="col-4"><h1 class="texto-bienvenida text-fix">Bienvenido a mi pagina!</h1></div></div><div class="row justify-content-between boton-site"><div class="mx-auto boton"><span class="iconify" data-icon="mdi:arrow-right-bold-outline" data-width="50px" onclick="next();"></span></div></div>';
  }else if(pagina == 'acerca'){
    document.getElementById("info").innerHTML = '<div class="row justify-content-around acerca"><div class="col-4"><img class="img-fluid imagen" src="./assets/images/yo.png"></div><div class="col-6"><h1 class="texto-bienvenida text-fix">Mi nombre es Gonzalo,</h1><h3>tengo 22 años y soy estudiante de ingeniería civil en informática y telecomunicaciones de la Universidad Diego Portales</h3></div></div><div class="row justify-content-between boton-site"><div class="mx-auto boton"><span class="iconify" data-icon="mdi:arrow-right-bold-outline" data-width="50px" onclick="next();"></span></div></div>';
  }else if(pagina == 'portafolio'){
    document.getElementById("info").innerHTML = '<div class="row justify-content-around portafolio"><div class="col-4"><img class="img-fluid imagen" src="./assets/images/porta.png"></div><div class="col-6"><h1 class="texto-bienvenida">Mi Portafolio</h1><p>Realicé mi primera práctica profesional como Soporte TI para una gran empresa nacional, además he participado en diversos proyectos relacionados con la ingeniería de software de manera independiente, los cuales se pueden encontrar en mi perfil de GitHub, los que más destacan son los siguientes:</p><ul><li>Pymesup: Aplicación web (PHP Vanilla con Bootstrap y DB MySQL) que permite gestionar inventarios, entregando todos los recursos para un manejo eficiente de recursos, enfocado en pequeñas y medianas empresas.</li><li>GesTex: Aplicación web (ReactJS, Express, NodeJS y DB PostgreSQL) desarrollada para una empresa nacional textil que facilita la asignación de pagos a sus trabajadores.</li></ul></div></div><div class="row justify-content-between boton-site"><div class="mx-auto boton"><span class="iconify" data-icon="mdi:arrow-right-bold-outline" data-width="50px" onclick="next();"></span></div></div>';
  }else if (pagina == 'contacto'){
    document.getElementById("info").innerHTML = '<div class="row justify-content-around contacto"><div class="col-4"><h1 class="texto-bienvenida text-fix">CONTACTAME</h1></div><div class="col-4"><form><div class="mb-3"><label for="exampleInputEmail1" class="form-label">Correo electrónico</label><input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></div><div class="mb-3"><label for="exampleInputPassword1" class="form-label">Mensaje</label><input type="text" class="form-control" id="exampleInputPassword1"></div><div class="mb-3 form-check"><input type="checkbox" class="form-check-input" id="exampleCheck1"><label class="form-check-label" for="exampleCheck1">Estás seguro?</label></div><button type="submit" class="btn btn-primary">Enviar</button></form></div></div><div class="row justify-content-between boton-site"><div class="mx-auto boton"><span class="iconify" data-icon="mdi:arrow-right-bold-outline" data-width="50px" onclick="next();"></span></div></div>';
  }else{
    window.location.href="#";
    menu('inicio');
  }
};

function next(){
    let page = window.location.hash;
    if(page == ""){
        //INDEX -> ACERCA
        animateCSS('.inicio', 'fadeOutLeft').then((message) => {
            // Do something after the animation
            menu('acerca');
            animateCSS('.acerca', 'fadeInRight');
          });
        window.location.href="#1";
    }else if(page=="#1"){
        //ACERCA -> PORTAFOLIO
        animateCSS('.acerca', 'fadeOutLeft').then((message) => {
            // Do something after the animation
            menu('portafolio');
            animateCSS('.portafolio', 'fadeInRight');
          });
        window.location.href="#2";
    }else if(page=="#2"){
        //PORTAFOLIO -> CONTACTO
        animateCSS('.portafolio', 'fadeOutLeft').then((message) => {
            // Do something after the animation
            menu('contacto');
            animateCSS('.contacto', 'fadeInRight');
          });
        window.location.href="#3";
    }else if(page=="#3"){
        //CONTACTO -> INDEX
        animateCSS('.contacto', 'fadeOutLeft').then((message) => {
            // Do something after the animation
            menu('inicio');
            animateCSS('.inicio', 'fadeInRight');
          });
        window.location.href="#";
    }else{
        window.location.href="#";
        menu('inicio');
        //ALL -> INDEX
    }
};