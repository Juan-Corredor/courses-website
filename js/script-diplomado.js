function setInitialTabState(containerId, unitName) {
    // Obtener el contenedor y el enlace de la pestaña de introducción
    let container = document.getElementById(containerId);
    let introduccionTab = document.getElementById('introduccion-tab');

    // Verificar si el contenedor y el enlace de la pestaña de introducción existen
    if (container && introduccionTab) {
        // Agregar la clase 'active' al enlace de la pestaña de introducción
        introduccionTab.classList.add("active");

        // Obtener el contenido de la pestaña y mostrarlo
        let tabContent = document.getElementById(unitName);
        if (tabContent) {
            tabContent.style.display = "block";
        }
    }
}

document.addEventListener('componentsLoaded', async () => {
    // Llamar a la función setInitialTabState con los valores deseados
    setInitialTabState('article_page_tab', 'tab-diplomado');
    setInitialTabState('article_page_tab_2', 'tab-diplomado_2');
});


// FUNCIÓN PARA CONTROLAR EL MENÚ DE TABS DE CONTENIDO DEL CURSO 
function openUnits(evt, containerId, unitName) {
    let container = document.getElementById(containerId);

    // Verificar si el contenedor existe en el DOM
    if (!container) {
        console.error("El contenedor especificado no existe en el DOM.");
        return;
    }

    // Obtener todos los elementos de pestaña dentro del contenedor
    let tablinks = container.querySelectorAll('.tablinks');
    let tabcontents = container.querySelectorAll('.tabcontent');

    // Ocultar todos los contenidos de pestañas
    tabcontents.forEach(tabcontent => {
        tabcontent.style.display = "none";
    });

    // Remover la clase 'active' de todos los enlaces de pestañas
    tablinks.forEach(tablink => {
        tablink.classList.remove("active");
    });

    // Mostrar el contenido de la pestaña seleccionada y añadir la clase 'active'
    document.getElementById(unitName).style.display = "block";
    evt.currentTarget.classList.add("active");
}

document.addEventListener("DOMContentLoaded", function () {
    const defaultOpenElements = document.querySelectorAll('.defaultOpen');

    defaultOpenElements.forEach(element => {
        const containerId = element.getAttribute('data-container');
        const unitName = element.getAttribute('data-unit');

        openUnits({ currentTarget: element }, containerId, unitName);
    });
});


// FUNCIÓN PARA CONTROLAR EL CARRUSEL DE TESTIMONIOS 
let indiceActual = 0;
let elementosPorVista = 0;
function mover(direccion, carouselId) {
    const carousel = document.getElementById(carouselId);    
    // Verificar si el carrusel existe en el DOM
    if (!carousel) {
        console.error("El carrusel especificado no existe en el DOM.");
        return;
    }

    const elementos = carousel.querySelectorAll('.element_carousel').length;

    // Determina el número de elementos por vista según el ancho de la ventana
    if (window.innerWidth <= 855) {
        elementosPorVista = 1;
    } else if (window.innerWidth <= 1300) {
        elementosPorVista = 2;
    } else {
        elementosPorVista = 3;
    }

    // Actualiza el índice actual según la dirección
    indiceActual += direccion;    

    // Reinicia al inicio si se pasa del final y al final si se pasa del inicio
    if (indiceActual < 0) {
        indiceActual = elementos - elementosPorVista;
    } else if (indiceActual > elementos - elementosPorVista) {
        indiceActual = 0;
    }

    // Aplica la transformación para mover el carrusel
    carousel.querySelector('.card_carousel').style.transform = `translateX(-${indiceActual * 100 / elementosPorVista}%)`;
}


