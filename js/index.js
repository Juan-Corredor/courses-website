import {ruta_widgets, menu_lateral_site, data_menu_lateral_units, data_footer} from './datos-site/global_data.js';

// Función de throttle para limitar la frecuencia de ejecución de otra función
function throttle(fn, wait) {
    let lastTime = 0; // Inicializa una variable para almacenar el último tiempo en que se ejecutó la función.
    
    // Devuelve una nueva función que actúa como función throttled.
    return function (...args) {
        const now = new Date().getTime(); // Obtiene el tiempo actual.
        
        // Compara el tiempo actual con el último tiempo en que se ejecutó la función.
        // Si el tiempo transcurrido es menor que el intervalo de espera, no se ejecuta la función y se retorna.
        if (now - lastTime < wait) {
            return;
        }

        // Si el tiempo transcurrido es mayor o igual al intervalo de espera, se ejecuta la función.
        // Se actualiza el último tiempo de ejecución.
        lastTime = now;
        
        // Se llama a la función original con los argumentos pasados.
        fn(...args);
    };
}

// Función principal que se ejecuta al hacer scroll
function handleScroll() {
    const header = document.getElementById("header");
    const menu = document.querySelector('#article_navigation_index_horizontal');
    const distanceScrolled = window.scrollY;
    const distanceInPixels = header ? 20 * 37.8 : 10 * 37.8;

    // Verifica si la resolución de pantalla es mayor a 855px antes de cambiar la posición del menú
    if (window.innerWidth > 855) {
        toggleFixedNav(menu, distanceScrolled, distanceInPixels);
    }

    highlightLinks(distanceScrolled);
}

// FUNCIÓN PARA CONTROLAR EL MENÚ DE ÍNDICE EN MODO FIXED AL HACER SCROLL
window.addEventListener('scroll', throttle(handleScroll, 100));
window.addEventListener('resize', throttle(handleScroll, 100)); // Agregado un listener para cambios de tamaño de ventana

// Función para cambiar el estilo del menú cuando se hace scroll
function toggleFixedNav(menu, distanceScrolled, threshold) {
    const stylePlaceholders = document.querySelectorAll('.placeholder_styles');

    if (menu) {
        if (distanceScrolled > threshold) {
            menu.classList.add('fixed_nav');
            // Ajusta el scroll-margin-top para evitar que el contenido se oculte detrás del menú fijo
            stylePlaceholders.forEach(element => {
                element.style.scrollMarginTop = '1.5cm';
            });
        } else {
            menu.classList.remove('fixed_nav');
            // Restaura el scroll-margin-top al valor predeterminado cuando el menú no está fijo
            stylePlaceholders.forEach(element => {
                element.style.scrollMarginTop = '4.5cm';
            });
        }
    }
}

// Función para resaltar automáticamente los enlaces del índice según la posición del scroll
function highlightLinks(distanceScrolled) {
    const offset = 4.5 * 37.7952755906; // Offset para los enlaces, equivalente a 4.5 cm en píxeles
    const links = document.querySelectorAll('.generic_section a[href^="#"]');

    links.forEach(link => {
        const section = document.getElementById(link.getAttribute('href').substring(1));
        if (section) {
            const { top, height } = section.getBoundingClientRect();
            const sectionPosition = top + distanceScrolled;

            // Agrega o quita la clase 'active-link' según si el enlace está en la vista
            if (sectionPosition - offset <= distanceScrolled && sectionPosition + height - offset > distanceScrolled) {
                link.classList.add('active-link');
            } else {
                link.classList.remove('active-link');
            }
        }
    });
}



/*FUNCIÓN PARA ACTUALIZAR EL ESTADO DE SELECCIÓN DEL MENÚ LATERAL
  Recibe la ruta actual (path) y actualiza visualmente el estado de selección del enlace correspondiente en el menú lateral.*/
export const updateLinkState = (path) => {
    // Primero elimina la clase 'selected' de todos los enlaces en la clase 'options_menu'
    document.querySelectorAll('.options_menu a').forEach(link => {
        link.classList.remove('selected');
    });

    // Luego, determina qué enlace debe estar seleccionado según la ruta proporcionada
    let linkId;
    switch (path) {
        case '/':
            linkId = 'link-home';
            break;
        case '/introduction':
            linkId = 'link-about';
            break;
        // Agregar más casos aquí según sea necesario para otras rutas
    }

    // Añade la clase 'selected' al enlace correspondiente si se encontró el identificador del enlace
    const activeLink = document.getElementById(linkId);
    if (activeLink) {
        activeLink.classList.add('selected');
    }
};

// FUNCIÓN PARA CONTROLAR EL MENÚ LATERAL
const website_navigation_menu = () => {
    // Obtener referencias a elementos del DOM
    const body = document.getElementById("body");
    const overlay = document.getElementById('overlay');

    // Función para alternar la visibilidad del menú lateral y el botón asociado.
    function toggleMenu(menuId, buttonId) {
        const menu = document.getElementById(menuId);
        const button = document.getElementById(buttonId);

        // Verificar que los elementos existan antes de realizar cambios
        if (menu && button && body) {
            // Alternar clases para cambiar el estilo y posición del menú y el botón
            body.classList.toggle("body_move");
            menu.classList.toggle("menu_side_move");
            button.classList.toggle("btn_open_move");
            // No es necesario ajustar el estilo de 'overlay' aquí debido a la recomendación de usar CSS media queries.
            overlay.style.display = overlay.style.display === 'block' ? 'none' : 'block';
        }
    }

    // Manejador de eventos para escuchar clics en el cuerpo del documento.
    document.body.addEventListener("click", function (event) {
        if (event.target.matches("#btn-open-site")) {
            toggleMenu('menu-side-main', 'btn-open-site');
        } else if (event.target.matches("#btn-open-units")) {
            toggleMenu('menu-side-units', 'btn-open-units');
        } else if (event.target.matches('#overlay') || event.target.matches('.close_btn')) {
            // Cerrar todos los menús si se hace clic en el overlay o el botón de cerrar
            closeMenus();
        }
    });

    // Función para cerrar todos los menús.
    function closeMenus() {
        closeMenu("menu-side-main", "btn-open-site");
        closeMenu("menu-side-units", "btn-open-units");
    }

    // Función para cerrar un menú específico.
    function closeMenu(menuId, buttonId) {
        const menu = document.getElementById(menuId);
        const button = document.getElementById(buttonId);

        // Verificar que los elementos existan antes de realizar cambios
        if (menu && button && body && overlay) {
            // Restaurar clases y estilos para cerrar el menú
            body.classList.remove("body_move");
            menu.classList.remove("menu_side_move");
            button.classList.remove("btn_open_move");
            overlay.style.display = 'none'; // Puede ser reemplazado por CSS media queries.
        }
    }
};

// Llamar a la función para inicializar el comportamiento del menú lateral.
document.addEventListener('DOMContentLoaded', website_navigation_menu);

/* FUNCIÓN PARA CONTROLAR LA CARGA DE CONTENIDO POR ETAPAS:
  Esta es una función que carga y renderiza un componente en una posición específica del DOM.
  Toma la ruta del componente (componentPath), el ID del marcador de posición en el DOM (placeholderId),
  y datos adicionales para pasar al componente (data).*/
export const render_widget = (componentPath, placeholderId, data = {}) => {
    return new Promise(async (resolve, reject) => {
        try {
            // Busca el elemento en el DOM con el ID proporcionado como marcador de posición.
            const placeholder = document.getElementById(placeholderId);

            // Verifica si el marcador de posición existe.
            if (!placeholder) {
                console.warn(`Placeholder no encontrado: ${placeholderId}`);
                reject(`Placeholder no encontrado: ${placeholderId}`);
                return;
            }

            // Realiza una solicitud para obtener el contenido del componente en la ruta especificada.
            const response = await fetch(componentPath);

            // Obtiene el contenido del componente como texto.
            const content = await response.text();

            // Handlebars para compilar y aplicar los datos al contenido del componente.
            const template = Handlebars.compile(content);
            const html = template(data);

            // Reemplaza el contenido del marcador de posición con el HTML renderizado del componente.
            placeholder.innerHTML = html;

            // Resuelve la promesa una vez que el contenido se ha cargado y renderizado correctamente.
            resolve();
        } catch (error) {
            // Maneja los errores, imprime el error en la consola y rechaza la promesa.
            console.error(`Error al cargar el componente ${componentPath}:`, error);
            reject(error);
        }
    });
};

/*FUNCIÓN PARA INSERTAR TEMPLATES DINÁMICAMENTE:
Esta función inicializa la página principal cargando y renderizando widgets dinámicamente.
Acepta un array opcional de widgets adicionales (additionalWidgets) que se pueden proporcionar al llamar la función.*/
export const initialize_page_main = async (additionalWidgets = []) => {
    // Definición de widgets principales y sus parámetros
    const widgets = [
        render_widget(ruta_widgets + 'website_navigation_menu.html', 'id_website_navigation_menu', menu_lateral_site),
        render_widget(ruta_widgets + 'website_navigation_menu.html', 'id_units_navigation_menu', data_menu_lateral_units),
        render_widget(ruta_widgets + 'footer.html', 'id_footer', data_footer),
    ];

    // Combinar widgets principales con widgets adicionales
    const allWidgets = widgets.concat(additionalWidgets);

    // Esperar a que todos los widgets se carguen y rendericen antes de continuar
    await Promise.all(allWidgets);

    // Actualizaciones y asignaciones de eventos necesarias

    // Obtener la ruta actual de la página
    const path = window.location.pathname;

    // Actualizar el estado de los enlaces en la página según la ruta
    updateLinkState(path);

    // Emitir un evento personalizado una vez que todo esté cargado
    document.dispatchEvent(new Event('componentsLoaded'));
};

