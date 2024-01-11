// ***************
// FONDO DEL NABAR
// ***************
const handleScroll = () => {
  const scrollY = window.scrollY;
  const scrollThreshold = 50;

  // Agregar o quitar la clase 'scrolled' al elemento 'inicio'
  const inicioElement = document.getElementById('inicio');
  if (scrollY > scrollThreshold) {
    inicioElement.classList.add('scrolled');
  } else {
    inicioElement.classList.remove('scrolled');
  }
};

// Agregar el EventListener al DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  // Llamamos a handleScroll inicialmente para manejar el estado inicial
  handleScroll();
  // Agregar el EventListener de scroll
  window.addEventListener('scroll', handleScroll);
});



// MENU Y PRECIOS
function handleMenuItemClick(menuItem) {
  // Oculta todos los elementos de contenido
  var contentItems = document.querySelectorAll('.content-item');
  contentItems.forEach(function(item) {
    item.style.display = 'none';
  });

  // Muestra el contenido correspondiente al botón clickeado
  var selectedContent = document.getElementById(menuItem);
  if (selectedContent) {
    selectedContent.style.display = 'block';
  }
}
    


// BOTON DEL CORAZON
const likeButtons = document.querySelectorAll(".card__btn");

likeButtons.forEach((likeButton) => {
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__btn--like");
  });
});

