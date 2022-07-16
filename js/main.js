//Menu
const  menu = document.querySelector('.burger-mobile');
const  icono_menu = document.querySelector('.iconos-menu');
const  nav = document.querySelector('nav')

menu.onclick = () => {
    nav.classList.toggle('is-active');
    desplegarMenu();
}

var contador = 1;
function desplegarMenu() {
    if (contador == 1) {
        icono_menu.setAttribute('src', 'images/icon-x.png');
        contador = 0;
    } else {
        contador = 1;
        icono_menu.setAttribute('src', 'images/icon-bars.png');
    }  
};


//Form
const busquedaForm = document.forms.busqueda;
const campo_search = busquedaForm.elements.buscar;
busquedaForm.addEventListener('submit', validateForm);

function validateForm (e) {
     e.preventDefault();
     
     if ( (campo_search.value) == "") {
        campo_search.classList.add('error');
        return false;
     } else {
        alert('Buqueda deseada: "'+campo_search.value+'" (Datos enviados al Backend)');
        limpiar();
        return true;
     }

}

function limpiar() {
    campo_search.classList.remove("error");
    modal.style.display = "none";
    campo_search.value = "";
};


//Modal
var modal = document.getElementById("myModal");
var btn = document.getElementById("modalSearch");

btn.onclick = function() {
    modal.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == modal) {
    limpiar();
    }
}


//Acordeon
const toggles = document.querySelectorAll(".toggle");

function toggleAccord(e) {
  e.preventDefault();
  if (this.parentNode.classList.contains("active")) {
    this.parentNode.classList.remove("active");
  } else {
    for (i = 0; i < toggles.length; i++) {
      toggles[i].parentNode.classList.remove("active");
    }
    this.parentNode.classList.add("active");
  }
}
for (i = 0; i < toggles.length; i++) {
  toggles[i].addEventListener("click", toggleAccord);
}


//Carousel
var slider = tns({
    container: ".my-slider-2",
    items: 1,
    arrowKeys: true,
    swipeAngle: false,
    mouseDrag: true,
    controls: false,
    speed: 500,
    autoplay: true,
    autoplayTimeout: 5000
});