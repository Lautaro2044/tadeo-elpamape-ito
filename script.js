console.log("script.js cargado correctamente");
document.getElementById("formulario").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("mensaje").innerText =
    "Gracias por tu mensaje. Te responderemos a la brevedad.";
});

const menuLinks = document.querySelectorAll('.menu a');

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

const fotosBio = [
  "fotos/tadeo.jpg",
  "fotos/tadeo2.jpg",
  "fotos/tadeo3.jpg"
];

let indice = 0;
  const imagenBio = document.getElementById("bio-slider");

  if (!imagenBio) return;

  setInterval(() => {
    imagenBio.classList.add("fade");

    setTimeout(() => {
      indice = (indice + 1) % fotosBio.length;
      imagenBio.src = fotosBio[indice];
      imagenBio.classList.remove("fade");
    }, 800);
  }, 3500);
});