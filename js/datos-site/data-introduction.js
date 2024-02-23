import { render_widget, initialize_page_main } from '../index.js';
import { ruta_img, ruta_widgets} from './global_data.js';


const data_reference_units = {
    bold_text: "Introducción >",
    course_name: "Diplomado de Transformación Digital",
    id: "banner_background_img_styles_1",

    banner_button_list: [
        {
            banner_button_name: "Ir al inicio",
            banner_button_link: "/"
        },
        {
            banner_button_name: "unidad 1",
            banner_button_link: "/"
        },
    ]
};

const data_list_links_sections = [
    { id: "#id_website_navigation_menu" }, //0
    { id: "#id_units_navigation_menu" }, //1
    { id: "#placeholder_information_banner_2" }, //2
    { id: "#id_information_banner_1" }, //3
    { id: "#id_motivation" }, //4
    { id: "#id_motivation" }, //5
    { id: "#id_activities" }, //6
    { id: "#id_resources" }, //7
    { id: "#article-collaborators-placeholder" }, //8
    { id: "#article-testimonials-placeholder" }, //9

]

const data_section_navigation_index = {
    title: "Índice de la",
    highlighted_title: "página",

    data_list_links_sections: data_list_links_sections,

    home: {
        href_index: data_list_links_sections[3].id,
        name_index: "Inicio"
    },

    sections_site: [
        {
            id: "section_2",
            href_index: data_list_links_sections[5].id,
            name_index: "Motivación"
        },
        {
            id: "section_3",
            href_index: data_list_links_sections[6].id,
            name_index: "Actividades de aprendizaje"
        },
        {
            id: "section_4",
            href_index: data_list_links_sections[7].id,
            name_index: "Recursos de apoyo"
        },
    ]
};

// OBJETO PARA LA CONSTRUCCIÓN DE INTRODUCCIÓN AL DIPLOMADO
const data_introduction_diplomado = {
    info_mediacontent: {
        title_yt_column: "¡Te invitamos a ver el video introductorio!",
        id: "iframe-video-introduccion",
        mediacontent: "https://www.youtube.com/embed/kaJcirfiCHc",
    },
    title: "Bienvenido al diplomado en",
    highlighted_title: "Transformación Digital",
    description: "Nuestro Diplomado en Transformación Digital es la plataforma de inicio perfecta para tu camino hacia el futuro empresarial. Este programa está especialmente diseñado para líderes y profesionales ambiciosos que desean adentrarse en la revolución digital en sus organizaciones.     A lo largo del programa, explorarás desde los conceptos fundamentales de la transformación digital hasta el desarrollo de competencias clave en las tecnologías habilitadoras, proporcionándote las herramientas necesarias para impulsar la innovación y el cambio en tu entorno empresarial. Este diplomado te brindará una base sólida para continuar aprendiendo y creciendo en este ámbito en constante evolución.",
    ending_phrase: "¡Únete a nosotros y transforma la forma en que tu organización opera en la era digital!"
};

// OBJETO PARA LA CONSTRUCCIÓN DE SECCION DE MOTIVACIÓN DE ESTE DIPLOMADO
const data_info_motivation = {
    highlighted_title: "MOTIVACIÓN",
    description: "La transformación digital es un proceso emocionante que redefine el panorama empresarial. Te desafiamos a adoptar este tema con interés y determinación, ya que la capacidad de liderar la transformación digital es una habilidad altamente valiosa en el mundo empresarial actual. Tu participación activa, enfoque y esfuerzo te llevarán a un aprendizaje significativo y te permitirán convertirte en un agente de cambio en tus organizaciones y carrera.",
    motivational_text: "¡Listo para explorar, aprender y transformar el futuro empresarial en este emocionante diplomado!"
}

// OBJETO PARA LA CONSTRUCCIÓN DE INFORMACIÓN DE ACTIVIDADES DE ESTE DIPLOMADO**
const data_info_activities = {
    title: "ACTIVIDADES DE ",
    highlighted_title: "APRENDIZAJE",
    opening_text: "Para esta unidad se plantean las siguientes actividades de aprendizaje:",
    list_card_data: [
        {
            src_img: `${ruta_img}/img-introduccion/img-actividad-formativa.png`,
            name: "Actividad de",
            highlighted_name: "Formativa",
            description: "El estudiante conoce los conceptos que abarcan un tema a través del estudio de diferentes recursos que pueden estar en formato de video o documento."
        },
        {
            src_img: `${ruta_img}/img-introduccion/img-actividad-entrenamiento.png`,
            name: "Actividad de",
            highlighted_name: "Entrenamiento",
            description: " El estudiante realiza actividades prácticas que le ayudan a afianzar los conocimientos adquiridos. Este tipo de actividades suelen ser formularios."
        },
        {
            src_img: `${ruta_img}/img-introduccion/img-actividad-evaluativa.png`,
            name: "Actividad de",
            highlighted_name: "Evaluativa",
            description: "El estudiante realiza evaluaciones cortas que le permiten comprobar el conocimiento adquirido. Este tipo de actividades suelen ser formularios con valoración."
        },
    ]
}

// OBJETO PARA LA CONSTRUCCIÓN DE LOS RECURSOS DE APOYO
const data_support_resources = {
    title: "ENLACES DE ",
    highlighted_title: "INTERÉS",

    link_list_container: [
        {
            name: "Enlaces de ",
            highlighted_name: "interés",
            links_list: [
                {
                    href: "https://www.mintic.gov.co/portal/inicio/Sala-de-prensa/Noticias/149186:MinTIC-publica-el-Marco-de-Transformacion-Digital-para-mejorar-la-relacion-Estado-ciudadano",
                    name_link: "Marco de Transformación Digital para mejorar la relación Estado-Ciudadano.",
                },
                {
                    href: "https://www.semana.com/mejor-colombia/articulo/formacion-y-apropiacion-del-talento-las-claves-de-la-transformacion-digital-en-la-que-avanza-colombia/202300/",
                    name_link: "Formación y apropiación del talento: las claves de la transformación digital en la que avanza Colombia.",
                }
            ]
        },
        {
            highlighted_name: "Presentaciones",
            links_list: [
                {
                    href: "https://drive.google.com/file/d/1e5024OWUgs2gE-7cvWsmE--554KW7Yxv/view",
                    name_link: "Introducción al diplomado de transformación digital",
                }
            ]
        }
    ]
}

const additionalWidget = [
    render_widget(ruta_widgets + 'information_banner.html', 'id_information_banner_1', data_reference_units),
    render_widget(ruta_widgets + 'information_with_video.html', 'id_introduction_diplomado', data_introduction_diplomado),
    render_widget(ruta_widgets + 'navigation_index_horizontal.html', 'id_navigation_index_horizontal', data_section_navigation_index),
    render_widget(ruta_widgets + 'flat_vertical_information.html', 'id_motivation', data_info_motivation),
    render_widget(ruta_widgets + 'information_with_cards.html', 'id_activities', data_info_activities),
    render_widget(ruta_widgets + 'link_columns.html', 'id_resources', data_support_resources),

    // BOTONES DE NAVEGACIÓN POR PAGINA
    render_widget(ruta_widgets + 'button_navegation_section.html', 'id_section_navigation_btn_1', data_list_links_sections[3]),
    render_widget(ruta_widgets + 'button_navegation_section.html', 'id_section_navigation_btn_2', data_list_links_sections[3]),
    render_widget(ruta_widgets +  'button_navegation_section.html', 'id_section_navigation_btn_3', data_list_links_sections[3]),
];

initialize_page_main([additionalWidget]);