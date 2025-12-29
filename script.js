console.log("script.js cargado correctamente");

/* =============================
   MENU MOBILE: OCULTAR / MOSTRAR
============================= */
const menu = document.querySelector(".menu");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (window.innerWidth <= 600) {
    if (currentScroll > lastScroll && currentScroll > 80) {
      // Bajando → ocultar
      menu.style.transform = "translateY(-100%)";
    } else {
      // Subiendo → mostrar
      menu.style.transform = "translateY(0)";
    }
  } else {
    // Desktop siempre visible
    menu.style.transform = "translateY(0)";
  }

  lastScroll = currentScroll;
});

/* =============================
   SLIDER BIOGRAFÍA (TUYO)
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
