import { render_widget, initialize_page_main } from '../index.js';
import { ruta_widgets, data_header} from './global_data.js';


// Cambios de objetos globales
data_header.title = 'CONTÁCTENOS'


const data_reference_units = {
    bold_text: "Contáctenos >",
    course_name: "Diplomado de Transformación Digital",
    id: "banner_background_img_styles_1",

    banner_button_list: [
        {
            banner_button_name: "Compartir",
            banner_button_link: "https://docs.google.com/forms/d/e/1FAIpQLSfHm93B4hny8PHNEIKZo-lcmM6DvWlOv2bgYk38iZjWm4e3fA/viewform"
        },
        {
            banner_button_name: "Certificado",
            banner_button_link: "/certificate.html"
        },
    ]
};


const additionalWidget = [
    render_widget(`${ruta_widgets}header.html`, 'id_header', data_header),
    render_widget(ruta_widgets + 'information_banner.html', 'id_information_banner_1', data_reference_units),
];

initialize_page_main([additionalWidget]);