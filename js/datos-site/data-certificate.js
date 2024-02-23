import { render_widget, initialize_page_main } from '../index.js';
import { ruta_widgets, data_header, data_info_certificate } from './global_data.js';


// Cambios de objetos globales
data_header.title = 'CERTIFICADO'
data_info_certificate.button_description= ''
data_info_certificate.button_text = 'Quiero registrarme'
data_info_certificate.target_value = '_blank'
data_info_certificate.linkButton = 'https://docs.google.com/forms/d/e/1FAIpQLSciMfDJUF7AJR8j7vre3o3KFzwSQkcfHBnw9IR8hRmxRTHTTQ/viewform'

const data_reference_units = {
    bold_text: "Certificado >",
    course_name: "Diplomado de Transformación Digital",
    id: "banner_background_img_styles_1",

    banner_button_list: [
        {
            banner_button_name: "Compartir",
            banner_button_link: "https://docs.google.com/forms/d/e/1FAIpQLSfHm93B4hny8PHNEIKZo-lcmM6DvWlOv2bgYk38iZjWm4e3fA/viewform"
        },
    ]
};

const data_importance_of_the_certificate = {
    list_of_information: true,
    title: "IMPORTANCIA ",
    highlighted_title: "DEL CERTIFICADO",
    description: "Obtener un Certificado de Finalización tiene múltiples beneficios:",
    goal_list: [
        {
            title_item: 'Validación de tus Conocimientos: ',
            item: "El certificado es una prueba concreta de tu dedicación y del dominio de las habilidades adquiridas durante el diplomado. Es una forma efectiva de mostrar a futuros empleadores o instituciones académicas que estás comprometido con tu educación y desarrollo profesional.",
        },
        {
            title_item: 'Mejora de tu Perfil: ',
            item: "Un certificado de finalización puede aumentar tu perfil en el mercado laboral. Puede ser la clave para destacar entre otros candidatos y abrir nuevas oportunidades de carrera.",
        },
        {
            title_item: 'Autoconfianza:',
            item: "Obtener un certificado te brinda un sentido de logro personal y autoconfianza. Te motiva a continuar aprendiendo y creciendo en tu camino educativo.",
        },
    ]
}

const data_certificate_requirements = {
    list_of_information: true,
    title: "REQUISITOS PARA ",
    highlighted_title: "OBTENER EL CERTIFICADO",
    description: "Para obtener tu certificado de finalización, simplemente debes cumplir con los siguientes requisitos:",
    goal_list: [
        {
            title_item: 'Finalizar todas las lecciones: ',
            item: "Asegúrate de completar todas las lecciones del diplomado. Esto garantiza que has cubierto todo el contenido del curso.",
        },
        {
            title_item: 'Superar las evaluaciones: ',
            item: "Participa y aprueba todas las evaluaciones o exámenes que se incluyen en el diplomado. Estas pruebas son esenciales para demostrar tu comprensión de los conceptos.",
        },
        {
            title_item: 'Cumplir con el plazo:',
            item: "Completa el diplomado dentro del plazo especificado. Esto te ayudará a mantener un ritmo constante de aprendizaje y a obtener el certificado a tiempo.",
        },
    ]
}

// OBJETO PARA LA CONSTRUCCIÓN DE SECCION DE MOTIVACIÓN DE ESTE DIPLOMADO
const data_button_certificate = {
    motivational_text: "¡No esperes más para avanzar en tu educación y carrera. Regístrate en nuestro diplomado y comienza tu viaje de aprendizaje!",
    button_text: 'Quiero registrarme'
}



const additionalWidget = [
    render_widget(`${ruta_widgets}header.html`, 'id_header', data_header),
    render_widget(ruta_widgets + 'information_banner.html', 'id_information_banner_1', data_reference_units),
    render_widget(`${ruta_widgets}information_on_card.html`, 'id_info_certificate', data_info_certificate),
    render_widget(`${ruta_widgets}information_with_list.html`, 'id_importance_certificate', data_importance_of_the_certificate),
    render_widget(`${ruta_widgets}information_with_list.html`, 'id_certificate_requirements', data_certificate_requirements),    
    render_widget(`${ruta_widgets}text_with_button.html`, 'id_button_certificate', data_button_certificate),    
];

initialize_page_main([additionalWidget]);