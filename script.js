console.log("script.js cargado correctamente");

/* =============================
   FORMULARIO (MENSAJE LOCAL)
============================= */
const formulario = document.querySelector(".reservas form");
const mensaje = document.getElementById("mensaje");

if (formulario) {
  formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    mensaje.innerText =
      "Gracias por tu mensaje. Te responderemos a la brevedad.";
    formulario.reset();
  });
}

/* =============================
   MENU ACTIVO
============================= */
const menuLinks = document.querySelectorAll(".menu a");

menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    menuLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});

/* =============================
   SLIDER DE FOTOS BIOGRAFÍA
============================= */
const fotosBio = [
  "fotos/tadeo.jpg",
  "fotos/tadeo2.jpg",
  "fotos/tadeo3.jpg",
  "fotos/tadeo4.jpg"

];

let indice = 0;
const imagenBio = document.getElementById("bio-slider");

if (imagenBio) {
  setInterval(() => {
    imagenBio.classList.add("fade");

    setTimeout(() => {
      indice = (indice + 1) % fotosBio.length;
      imagenBio.src = fotosBio[indice];
      imagenBio.classList.remove("fade");
    }, 800);

  }, 3500);
}




const flyers = document.querySelectorAll('.flyer-card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.2
});

flyers.forEach(flyer => observer.observe(flyer));



let prevScrollpos = window.scrollY || window.pageYOffset;
const menu = document.querySelector(".menu");

window.addEventListener("scroll", function() {
  let currentScrollPos = window.scrollY || window.pageYOffset;
  
  if (prevScrollpos > currentScrollPos) {
    // Subiendo → mostrar menú
    menu.style.top = "0";
  } else {
    // Bajando → ocultar menú
    menu.style.top = "-80px"; // Ajusta según la altura del menú
  }
  
  prevScrollpos = currentScrollPos;
});




const menu = document.querySelector(".menu");
let lastScroll = 0;

// Creamos un sentinel invisible al inicio de la página
const sentinel = document.createElement('div');
sentinel.style.position = 'absolute';
sentinel.style.top = '0';
sentinel.style.width = '1px';
sentinel.style.height = '1px';
document.body.prepend(sentinel);

// Observador que detecta scroll hacia abajo o hacia arriba
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.boundingClientRect.y < lastScroll) {
      // Bajando → ocultar menú
      menu.style.transform = 'translateY(-100%)';
    } else {
      // Subiendo → mostrar menú
      menu.style.transform = 'translateY(0)';
    }
    lastScroll = entry.boundingClientRect.y;
  });
}, { threshold: [0] });

observer.observe(sentinel);

