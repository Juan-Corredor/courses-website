let ruta_widgets = './widgets/';
let ruta_img = './resource';

// OBJETO PARA LA CONSTRUCCIÓN DE LA CABECERA DEL DIPLOMADO
const data_header = {
    title: "DIPLOMADO DE TRANSFORMACIÓN DIGITAL",
    usartetic: {
        href: "https://www.uxartetic.com/",
        name: "UXARTETIC"
    },
    link_list: [
        {
            href: "#",
            name_link: "Fundamentos",
            separator: "|",
        },
        {
            href: "#",
            name_link: "Estado",
            separator: "|",
        },
        {
            href: "#",
            name_link: "Tecnologías",
            separator: "|",
        },
        {
            href: "#",
            name_link: "Estrategias",
            separator: "|",
        },
        {
            href: "#",
            name_link: "Métodos",
            separator: "|",
        },
        {
            href: "#",
            name_link: "Futuro",
        },
    ]
};

const menu_lateral_site = {
    button_nav: {
        id_button: "btn-open-site",
        name_button: "Menú principal",
        class_icon_button: "icon-menu fa-solid fa-house",
        // #region inicio Estilos
        top: '100px',
        background_color: '#017ec7',
        width: '240px',
        left: '-185px'
        // #endregion inicio Estilos
    },

    id_nav: "menu-side-main",
    menu_side_color: '#017ec7',

    list_nav: [
        {
            href_option_menu: "/index.html",
            id_option_menu: "link-home",
            class_icon_option_menu: "fa-solid fa-graduation-cap",
            name_option_menu: "Diplomado de Transformación Digital",
        },
        {
            href_option_menu: "/introduction.html",
            id_option_menu: "link-about",
            class_icon_option_menu: "fas fa-home",
            name_option_menu: "Información diplomado",
        },
        {
            href_option_menu: "https://docs.google.com/forms/d/e/1FAIpQLSciMfDJUF7AJR8j7vre3o3KFzwSQkcfHBnw9IR8hRmxRTHTTQ/viewform",
            id_option_menu: "link-register",
            target: '_blank',
            class_icon_option_menu: "fa-solid fa-address-card",            
            name_option_menu: "Registrarse",
        },
        {
            href_option_menu: "/certificate.html",
            id_option_menu: "link-certificate",
            class_icon_option_menu: "fa-solid fa-award",
            name_option_menu: "Certificado",
        },
        {
            href_option_menu: "/contact_us.html",
            id_option_menu: "link-contact-us",
            class_icon_option_menu: "fa-solid fa-envelope",
            name_option_menu: "Contáctenos",
        },
    ]
}

const data_menu_lateral_units = {
    button_nav: {
        id_button: "btn-open-units",
        name_button: "Unidades",
        class_icon_button: "icon-menu fa-solid fa-book",
        // #region inicio Estilos
        top: '160px',
        background_color: '#AA3939',
        width: '175px',
        left: '-120px'
        // #endregion inicio Estilos
    },

    id_nav: "menu-side-units",
    menu_side_color: '#AA3939',

    list_nav: [
        {
            href_option_menu: "/unidades/unidad-uno.html",
            id_option_menu: "link-unit-1",
            class_icon_option_menu: "icon-units fa-solid fa-1",
            name_option_menu: "Fundamentos de transformación digital",
        },
        {
            href_option_menu: "/unidades/unidad-dos.html",
            id_option_menu: "link-unit-2",
            class_icon_option_menu: "icon-units fa-solid fa-2",
            name_option_menu: "Evaluación del estado actual de la organización",
        },
        {
            href_option_menu: "/unidades/unidad-tres.html",
            id_option_menu: "link-unit-3",
            class_icon_option_menu: "icon-units fa-solid fa-3",
            name_option_menu: "Tecnologías habilitadoras de la transformación digital",
        },
        {
            href_option_menu: "/unidades/unidad-cuatro.html",
            id_option_menu: "link-unit-4",
            class_icon_option_menu: "icon-units fa-solid fa-4",
            name_option_menu: "Estrategia digital y experiencia del cliente",
        },
        {
            href_option_menu: "/unidades/unidad-cinco.html",
            id_option_menu: "link-unit-5",
            class_icon_option_menu: "icon-units fa-solid fa-5",
            name_option_menu: "Métodos para la implementación de la transformación digital",
        },
        {
            href_option_menu: "/unidades/unidad-seis.html",
            id_option_menu: "link-unit-6",
            class_icon_option_menu: "icon-units fa-solid fa-6",
            name_option_menu: "Innovación y futuro de la transformación digital",
        },
    ]
}

const data_footer = {
    src_img_left: `${ruta_img}/logo-sinfoci.svg`,
    src_img_rigth: `${ruta_img}/img-uq-acreditada.png`,
    title_link_list: "Unidades del diplomado",
    text_email: "Email: labusabilidad@uniquindio.edu.co",
    text_telephone: "Tel: (+57) 7359300 Ext. 1006",
    text_address: "Dirección: Carrera 15 #12N, Armenia, Quindío",
    list_social_networks: [
        {
            href: "https://www.facebook.com/laboratoriodeusabilidaduq/",
            src_img: `${ruta_img}/img-facebook.png`,
        },
        {
            href: "https://www.facebook.com/laboratoriodeusabilidaduq/",
            src_img: `${ruta_img}/img-instagram.png`,
        },
    ],
    link_list: [
        {
            href: "#",
            name_link: "Fundamentos",
            separator: "|",
        },
        {
            href: "#",
            name_link: "Estado",
            separator: "|",
        },
        {
            href: "#",
            name_link: "Tecnologías",
            separator: "|",
        },
        {
            href: "#",
            name_link: "Estrategias",
            separator: "|",
        },
        {
            href: "#",
            name_link: "Métodos",
            separator: "|",
        },
        {
            href: "#",
            name_link: "Futuro",
        },
    ]
}

// OBJETO PARA LA CONSTRUCCIÓN DE INFORMACIÓN DEL CERTIFICADO
const data_info_certificate = {
    src_img: `${ruta_img}/img-informacion/img-certificado6.png`,
    title: "¡Obtenga un certificado de finalización reconocido por la industria!",
    description: "Como entidad formadora, valoramos profundamente tus logros y dedicación en tu camino de aprendizaje. Es por ello que brindamos un Certificado de Finalización a todos los estudiantes que culminan con éxito nuestros diplomados.",
    button_description: "Más info...",
    button_text: "Obtener certificado",
    linkButton: "/certificate.html",
    target_value: "_parent"
}

export  {
    ruta_widgets,
    ruta_img,
    data_header,
    menu_lateral_site,
    data_menu_lateral_units,
    data_footer,
    data_info_certificate
}