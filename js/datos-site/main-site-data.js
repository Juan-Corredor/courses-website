import {render_widget, initialize_page_main } from '../index.js';
import {ruta_img, ruta_widgets, data_header, data_info_certificate } from './global_data.js';



// OBJETO PARA LA CONSTRUCCIÓN DE ÍNDICE DE LA PÁGINA
const data_list_links_sections = [
    { id: "#id_header" }, //0
    { id: "#id_information_banner_1" }, //1
    { id: "#id_information_banner_2" }, //2
    { id: "#id_about" }, //3
    { id: "#id_interested_party_info" }, //4
    { id: "#id_what_you_learn" }, //5
    { id: "#id_course_content" }, //6
    { id: "#id_work_team" }, //7
    { id: "#id_testimonials" }, //8

]

const data_section_navigation_index = {
    title: "Índice de la",
    highlighted_title: "página",

    data_list_links_sections: data_list_links_sections,

    home: {
        href_index: data_list_links_sections[1].id,
        name_index: "Inicio"
    },

    sections_site: [
        {
            id: "section_2",
            href_index: data_list_links_sections[3].id,
            name_index: "Acerca del diplomado"
        },
        {
            id: "section_3",
            href_index: data_list_links_sections[4].id,
            name_index: "A quién va dirigido"
        },
        {
            id: "section_4",
            href_index: data_list_links_sections[5].id,
            name_index: "Lo que aprenderás"
        },
        {
            id: "section_5",
            href_index: data_list_links_sections[6].id,
            name_index: "Contenido del curso"
        },
        {
            id: "section_6",
            href_index: data_list_links_sections[7].id,
            name_index: "Equipo de trabajo"
        },
        {
            id: "section_7",
            href_index: data_list_links_sections[8].id,
            name_index: "Testimonios"
        }
    ]
};

// OBJETO PARA LA CONSTRUCCIÓN DE INTRODUCCIÓN AL DIPLOMADO
const data_introduction_diplomado = {
    mediacontent: `${ruta_img}/img-informacion/img-introduction.jpg`,
    title: "Bienvenido al diplomado en",
    highlighted_title: "Transformación Digital",
    description: "Un programa educativo diseñado para llevarte en un emocionante viaje hacia el mundo de la transformación empresarial en la era digital. En un entorno en constante evolución, la capacidad de adaptación y la adopción de nuevas tecnologías se han convertido en imperativos para el éxito organizacional. Este diplomado está diseñado para equiparte con las habilidades, conocimientos y perspectivas necesarios para iniciar el camino de la transformación digital en tus empresas y carrera."
};

// OBJETOS PARA LA CONSTRUCCIÓN DE BLOQUES DE INFORMACIÓN
const data_information_banner_1 = {
    bold_text: "Inicio >",
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

const data_information_banner_2 = {
    id: "banner_background_img_styles_2",

    banner_information_block_list: [
        {
            banner_img_path: `${ruta_img}/img-informacion/img-academy.png`,
            banner_title: "Ofrecido por",
            banner_text: "Laboratorio de Usabilidad - Universidad del Quindío",
        },
        {
            banner_img_path: `${ruta_img}/img-informacion/img-calendario.png`,
            banner_title: "Duración",
            banner_text: "32 Horas"
        },
        {
            banner_img_path: `${ruta_img}/img-informacion/img-modalidad.png`,
            banner_title: "Modalidad",
            banner_text: "Virtual"
        },
        {
            banner_img_path: `${ruta_img}/img-informacion/img-costo.png`,
            banner_title: "Costo",
            banner_text: "Gratis"
        },
        {
            banner_img_path: `${ruta_img}/img-informacion/img-certificado.png`,
            banner_title: "Certificado",
            banner_text: "Si"
        }
    ]
};

const data_information_banner_3 = {
    id: "banner_background_img_styles_1",

    banner_information_block_list: [
        {
            banner_img_path: `${ruta_img}/img-informacion/img-calendario-de-inicio.png`,
            banner_title: "Inicio",
            banner_text: "15/01/2024",
        },
        {
            banner_img_path: `${ruta_img}/img-informacion/img-grupo-de-estudio.png`,
            banner_title: "N° Estudiantes",
            banner_text: "150"
        },
        {
            banner_img_path: `${ruta_img}/img-informacion/img-idioma.png`,
            banner_title: "Idioma",
            banner_text: "Español"
        },
        {
            banner_img_path: `${ruta_img}/img-informacion/img-horas-de-video.png`,
            banner_title: "Horas de video",
            banner_text: "10 Horas"
        },
        {
            banner_img_path: `${ruta_img}/img-informacion/img-numero-de-clases.png`,
            banner_title: "N° de clases",
            banner_text: "38 clases"
        }
    ]
};

// OBJETO PARA LA CONSTRUCCIÓN DE ACERCA DE ESTE DIPLOMADO
const data_about = {
    title: "ACERCA DE ESTE",
    highlighted_title: "DIPLOMADO",
    description: "Únete a nuestro Diplomado en Transformación Digital y prepárate para liderar la revolución digital en el mundo empresarial. A lo largo de este programa, adquirirás los fundamentos de la transformación digital y de las tecnologías clave. Nuestro equipo de expertos ha diseñado un diplomado que te lleva progresivamente a lo largo de los contenidos de las diferentes unidades, mientras exploras cómo las organizaciones pueden prosperar en la era digital. Prepárate para adquirir las habilidades y el conocimiento necesarios para liderar con confianza en este emocionante nuevo paradigma empresarial.",
    motivational_text: "¡Únete a nosotros y sé parte de la revolución digital que transformará tu visión en una realidad empresarial innovadora!"
}

// OBJETO PARA LA CONSTRUCCIÓN DE A QUIEN VA DIRIGIDO
const data_interested_party_info = {
    title: "A QUIÉN VA ",
    highlighted_title: "DIRIGIDO",
    description: "Este diplomado está cuidadosamente diseñado para atender a líderes, profesionales y emprendedores interesados en estar a la vanguardia de la transformación digital. Además, es idóneo para empresas, tanto formales como informales, así como para cualquier persona que desee ampliar sus conocimientos en esta temática. Si tienes la ambición de liderar el cambio y aprovechar al máximo las oportunidades digitales, este programa es para ti. Está diseñado para adaptarse a diversas necesidades y perfiles, brindando una valiosa perspectiva en un entorno empresarial en constante evolución."
}

// OBJETO PARA LA CONSTRUCCIÓN DE LO QUE APRENDERAS
const data_what_you_learn = {
    list_of_information: true,
    title: "LO QUE",
    highlighted_title: "APRENDERÁS",
    description: "El objetivo central de este diplomado es proporcionarte una comprensión general y práctica de la transformación digital. A lo largo de las unidades, adquirirás los conocimientos fundamentales para:",
    goal_list: [
        {item: "Evaluar el estado actual de una organización y detectar problemas.",},
        {item: "Diseñar estrategias de transformación digital alineadas con los objetivos empresariales.",},
        {item: "Implementar y gestionar iniciativas digitales de manera efectiva.",},
        {item: "Fomentar una cultura de innovación y adaptación continua.",},
        {item: "Comprender las tecnologías habilitadoras de la transformación digital.",},
        {item: "Explorar el futuro de la transformación digital y la innovación empresarial.",    },
    ]
}

// LISTADO PARA EL TAB DEL MENÚ DE LA SECCIÓN DE CONTENIDO DEL CURSO
const tab_list = [
    {
        id_tab: "introduccion-tab",
        class_tab: "active",
        name_tab: "Introducción al curso",
        tabcontent_id: "tab-diplomado",
    },
    {
        name_tab: "Unidad 1",
        tabcontent_id: "tab-unidad-uno"
    },
    {
        name_tab: "Unidad 2",
        tabcontent_id: "tab-unidad-dos"
    },
    {
        name_tab: "Unidad 3",
        tabcontent_id: "tab-unidad-tres"
    },
    {
        name_tab: "Unidad 4",
        tabcontent_id: "tab-unidad-cuatro"
    },
    {
        name_tab: "Unidad 5",
        tabcontent_id: "tab-unidad-cinco"
    },
    {
        name_tab: "Unidad 6",
        tabcontent_id: "tab-unidad-seis"
    },
];

// LISTADO TEMAS POR UNIDAD LA SECCIÓN DE CONTENIDO DEL CURSO
const course_topic_list = {
    topiscs_tab_1: {
        topic_1: "Introducción a la transformación digital y su importancia.",
        topic_2: "Casos de estudio de éxito en transformación digital.",
        topic_3: "Evolución tecnológica y su impacto en los negocios.",
        topic_4: "Retos y oportunidades en la era digital.",
        topic_5: "Impacto en la cultura organizacional y en el modelo de negocio.",
        topic_6: "Marco ético y legal en la transformación digital.",
    },
    topiscs_tab_2: {
        topic_1: "Análisis de la cultura organizacional y su alineación con la transformación digital.",
        topic_2: "Evaluación de la infraestructura tecnológica y sistemas existentes.",
        topic_3: "Identificación de capacidades y habilidades del equipo para la transformación digital.",
        topic_4: "Evaluación de procesos internos y su adaptabilidad al entorno digital.",
        topic_5: "Análisis de la experiencia del cliente y su impacto en la transformación digital.",
        topic_6: "Identificación de desafíos y problemas clave que la transformación digital abordará.",
    },
    topiscs_tab_3: {
        topic_1: "Internet de las cosas (IoT) y su aplicación en procesos empresariales.",
        topic_2: "Inteligencia artificial y aprendizaje automático en la toma de decisiones.",
        topic_3: "Automatización de procesos y robótica.",
        topic_4: "Big data y analítica para la generación de conocimiento.",
        topic_5: "Cloud Computing y su papel en la infraestructura tecnológica.",
        topic_6: "Ciberseguridad y gestión de riesgos en la era digital.",
    },
    topiscs_tab_4: {
        topic_1: "Diseño de modelos de negocio digitales.",
        topic_2: "Estrategias omnicanal para la experiencia del cliente.",
        topic_3: "Personalización y marketing digital.",
        topic_4: "Experiencia de usuario (UX) y diseño centrado en el usuario.",
        topic_5: "Implementación de sistemas de gestión de la relación con el cliente (CRM).",
        topic_6: "Medición y optimización de la experiencia del cliente.",
    },
    topiscs_tab_5: {
        topic_1: "Diseño de una estrategia de transformación digital alineada con los objetivos.",
        topic_2: "Priorización de iniciativas digitales y elaboración de un plan de acción.",
        topic_3: "Gestión del cambio y capacitación para asegurar la adopción de nuevas tecnologías.",
        topic_4: "Selección y evaluación de proveedores tecnológicos y soluciones.",
        topic_5: "Monitoreo y medición de resultados en la implementación de la transformación digital.",
        topic_6: "Estrategias de iteración y mejora continua en el proceso de transformación.",
    },
    topiscs_tab_6: {
        topic_1: "Exploración de tendencias emergentes en tecnología y su impacto en las empresas.",
        topic_2: "Fomento de la cultura de innovación y su relación con la transformación digital.",
        topic_3: "Estrategias para mantener la competitividad en un entorno digital en constante cambio.",
        topic_4: "Adopción de enfoques ágiles y su papel en la evolución de la transformación digital.",
        topic_5: "El rol de la sostenibilidad en la transformación digital.",
        topic_6: "Casos de estudio de empresas que han logrado una transformación digital continua.",
    },
}

// OBJETO PARA LA CONSTRUCCIÓN DEL CONTENIDO DEL CURSO
const data_course_units = {
    containerId: "article_page_tab",
    title: "CONTENIDO DEL ",
    highlighted_title: "CURSO",

    tab_list: tab_list,
    course_topic_list: course_topic_list,

    list_content_per_tab: [
        {
            id: tab_list[0].tabcontent_id,
            name_tab: "DIPLOMADO DE TRANSFORMACIÓN DIGITAL:",
            description: "Nuestro Diplomado en Transformación Digital es la plataforma de inicio perfecta para tu camino hacia el futuro empresarial. Este programa está especialmente diseñado para líderes y profesionales ambiciosos que desean adentrarse en la revolución digital en sus organizaciones. A lo largo del programa, explorarás desde los conceptos fundamentales de la transformación digital hasta el desarrollo de competencias clave en las tecnologías habilitadoras, proporcionándote las herramientas necesarias para impulsar la innovación y el cambio en tu entorno empresarial. Este diplomado te brindará una base sólida para continuar aprendiendo y creciendo en este ámbito en constante evolución.",
        },
        {
            id: tab_list[1].tabcontent_id,
            name_tab: "Fundamentos de transformación digital:",
            description: "En esta unidad, daremos un primer paso hacia el mundo de la Transformación Digital y exploraremos cómo ésta se relaciona estrechamente con el proceso de adaptación empresarial en la era digital. Los Fundamentos de Transformación Digital representan un pilar esencial para el progreso en diversas áreas de negocios y directamente influyen en el contenido crucial de este diplomado en Transformación Digital. A continuación se presentan los temas que te ayudarán a entender esta unidad:",
            topics_tab: course_topic_list.topiscs_tab_1
        },
        {
            id: tab_list[2].tabcontent_id,
            name_tab: "Evaluación del estado actual de la organización y detección de problemas:",
            description: "En esta unidad, nos sumergiremos en la parte vital de tu organización y exploraremos cómo está posicionada para alcanzar la Transformación Digital. Estudiaremos aspectos clave que determinarán el éxito hacia la digitalización. Esta unidad es esencial para comprender cómo aplicar los Fundamentos de Transformación Digital en tu contexto específico. A continuación se exponen los temas que te ayudarán a entender esta unidad:",
            topics_tab: course_topic_list.topiscs_tab_2
        },
        {
            id: tab_list[3].tabcontent_id,
            name_tab: "Tecnologías habilitadoras de la transformación digital:",
            description: "En esta unidad, exploraremos las tecnologías esenciales que posibilitan y aceleran la transformación digital. Cada tema se centra en cómo estas tecnologías revolucionan los negocios, optimizan los procesos, y crean nuevas oportunidades y modelos de negocio. Entenderemos cómo estas tecnologías son centrales para la agenda digital y cómo su implementación afecta cada aspecto de la organización. A continuación se presentan los temas que te ayudarán a entender esta unidad:",
            topics_tab: course_topic_list.topiscs_tab_3
        },
        {
            id: tab_list[4].tabcontent_id,
            name_tab: "Estrategia digital y experiencia del cliente:",
            description: "En esta unidad, nos sumergiremos en el mundo de la Estrategia Digital y la Experiencia del Cliente, dos componentes esenciales en la Transformación Digital. Exploraremos cómo diseñar modelos de negocio digitales, estrategias omnicanal, personalización y marketing digital, así como la importancia de la Experiencia de Usuario (UX) y el uso de sistemas de gestión de la relación con el cliente (CRM). Además, aprenderemos a medir y optimizar la experiencia del cliente. A continuación se exponen los temas que te ayudarán a entender esta unidad:",
            topics_tab: course_topic_list.topiscs_tab_4
        },
        {
            id: tab_list[5].tabcontent_id,
            name_tab: "Métodos para la implementación de la transformación digital en las empresas:",
            description: "En esta emocionante unidad, nos adentraremos en el proceso crucial de llevar a cabo la Transformación Digital en las organizaciones. Exploraremos métodos y estrategias que te permitirán convertir la visión digital en realidad. Esta unidad es la esencia misma de la Transformación Digital y te equipará para liderar el cambio en tu empresa. A continuación se presentan los temas que te ayudarán a entender esta unidad:",
            topics_tab: course_topic_list.topiscs_tab_5
        },
        {
            id: tab_list[6].tabcontent_id,
            name_tab: "Innovación y futuro de la transformación digital:",
            description: "En esta última unidad, nos adentraremos en la vanguardia de la Transformación Digital y exploraremos cómo la innovación continua es esencial para el éxito en un entorno empresarial en constante cambio. Abordaremos tendencias emergentes en tecnología, estrategias para mantener la competitividad y casos de estudio inspiradores que muestran cómo las empresas han alcanzado la Transformación Digital de manera continua. A continuación se exponen los temas que comprenden esta unidad:",
            topics_tab: course_topic_list.topiscs_tab_6
        },
    ]
}


// OBJETO PARA LA CONSTRUCCIÓN DEL EQUIPO DE TRABAJO
const data_work_team = {
    title: "EQUIPO DE",
    highlighted_title: "TRABAJO",
    list_items: [
        {
            name_item: "Diseño curricular",
            description: "William Joseph Giraldo Orozco, Moisés Rentería."
        },
        {
            name_item: "Diseño instruccional",
            description: "Luisa Fernanda Londoño, Raúl Yulbraynner Rivera, Juan Pablo Corredor, Juan David Arcila."
        },
        {
            name_item: "Diseño microcurricular",
            description: "William Joseph Giraldo Orozco, Alexandra Ruiz Gaona, María Lili Villegas."
        },
        {
            name_item: "Evaluación y retroalimentación",
            description: "Alexandra Ruiz Gaona, Luisa Fernanda Londoño, María Lili Villegas."
        },
        {
            name_item: "Coordinadoras",
            description: "Alexandra Ruiz Gaona, María Lili Villegas."
        },
        {
            name_item: "Desarrollo de la plataforma",
            description: "William Joseph Giraldo Orozco, Robinson Arias Muñoz."
        },
        {
            name_item: "Equipo de apoyo administrativo",
            description: "Luisa Fernanda Londoño, Robinson Arias Muñoz, Raúl Yulbraynner Rivera, Juan Pablo Corredor, Juan David Arcila"
        },
        {
            name_item: "Soporte técnico",
            description: "Raúl Yulbraynner Rivera, Juan Pablo Corredor, Juan David Arcila."
        },
    ]

}

// OBJETO PARA LA CONSTRUCCIÓN DE LOS TESTIMONIOS
const data_testimonials = {
    title: "TESTIMONIOS",
    carouselId: "data_testimonials",

    list_cards: [
        {
            description: "El diplomado me permitió transformar mi enfoque en diseño gráfico, pasando de buscar solo un resultado visual a comprender la importancia de la funcionalidad y el análisis detrás de la experiencia UI-UX. Aprendí a considerar el modelo de negocio, los elementos clave y herramientas funcionales, lo que me permitió crear productos con elementos asociados y contar con un equipo humano de calidad para apoyo y aprendizaje.",
            src_img_card: `${ruta_img}/img-informacion/img-testimonio-sice.png`,
            title_card: "Julián García Quiñones",
            name: "Comercial - SIE7E AXM",
        },
        {
            description: "El diplomado cuenta con excelente dinámica para la ejecución y el desarrollo de la metodología, las herramientas educativas son adaptadas para su manipulación y destreza para captar el objetivo que se desea aprender. Los profesores se destacan por su elevada capacidad para llevar a cabo el diplomado, respaldada por su profesionalismo, lo que enriquece la experiencia educativa.",
            src_img_card: `${ruta_img}/img-informacion/img-testimonio-sss.png`,
            title_card: "Jesús Telmo Nene Chocue",
            name: "CEO - Sinapsys",
        },
        {
            description: "El diplomado nos brindó conocimientos y herramientas valiosas para transformar nuestra plataforma de prospección inmobiliaria, logrando una reducción en el tiempo de desarrollo, la minimización de errores y cuellos de botella, así como una mayor facilidad de uso y soporte al usuario final. Agradecemos al equipo del Laboratorio de Usabilidad por compartir su conocimiento.",
            src_img_card: `${ruta_img}/img-informacion/img-testimonio-haha.png`,
            title_card: "Juan Felipe Muñoz Berrio",
            name: "Director de innovación y desarrollo",
        },
        {
            description: "Quiero agradecer al Laboratorio de Usabilidad por el diplomado ofrecido, a los integrantes del equipo que lo conformaron por brindarme la oportunidad de capacitarme en el tema dictado debido a que lo desconocía, me ayudo mucho en la ampliación y fortalecimiento de nuevos conocimientos y en la aplicación del conocimiento en proyectos de marketing digital y diseño gráfico.",
            src_img_card: `${ruta_img}/img-informacion/img-testimonio-untitled.png`,
            title_card: "Camilo Augusto Gómez Martínez",
            name: "CEO - Hybrid",
        },
    ]
}

const additionalWidget = [
    // render_widget(ruta_widgets + 'article-reference.html', 'article-reference-placeholder', reference),
    // render_widget(ruta_widgets + 'menu-indice.html', 'menu-indice-placeholder', data_section_navigation_index),

    render_widget(`${ruta_widgets}header.html`, 'id_header', data_header),
    render_widget(`${ruta_widgets}information_banner.html`, 'id_information_banner_1', data_information_banner_1),
    render_widget(`${ruta_widgets}navigation_index_horizontal.html`, 'id_navigation_index_horizontal', data_section_navigation_index),
    render_widget(`${ruta_widgets}information_with_img.html`, 'id_introduction', data_introduction_diplomado),
    render_widget(`${ruta_widgets}information_banner.html`, 'id_information_banner_2', data_information_banner_2),
    render_widget(`${ruta_widgets}information_banner.html`, 'id_information_banner_3', data_information_banner_3),
    render_widget(`${ruta_widgets}flat_vertical_information.html`, 'id_about', data_about),
    render_widget(`${ruta_widgets}information_on_card.html`, 'id_info_certificate', data_info_certificate),
    render_widget(`${ruta_widgets}information_with_list.html`, 'id_interested_party_info', data_interested_party_info),
    render_widget(`${ruta_widgets}information_with_list.html`, 'id_what_you_learn', data_what_you_learn),
    render_widget(`${ruta_widgets}dynamic_column_information.html`, 'id_work_team', data_work_team),
    render_widget(`${ruta_widgets}information_tabs.html`, 'id_course_content', data_course_units),    
    render_widget(`${ruta_widgets}card_carousel.html`, 'id_testimonials', data_testimonials),        

    // BOTONES DE NAVEGACIÓN POR PAGINA
    render_widget(`${ruta_widgets}button_navegation_section.html`, 'id_section_navigation_btn_1', data_list_links_sections[1]),
    render_widget(`${ruta_widgets}button_navegation_section.html`, 'id_section_navigation_btn_2', data_list_links_sections[1]),
    render_widget(`${ruta_widgets}button_navegation_section.html`, 'id_section_navigation_btn_3', data_list_links_sections[1]),
    render_widget(`${ruta_widgets}button_navegation_section.html`, 'id_section_navigation_btn_4', data_list_links_sections[1]),
    render_widget(`${ruta_widgets}button_navegation_section.html`, 'id_section_navigation_btn_5', data_list_links_sections[1]),
];

initialize_page_main([additionalWidget]);