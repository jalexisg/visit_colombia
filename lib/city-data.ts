import { getAssetPath } from './utils';

export const cityImages: Record<string, string> = {
    'bucaramanga': '/images/city-bucaramanga.png',
    'manizales': '/images/city-manizales.png',
    'pereira': '/images/city-pereira.png',
    'armenia': '/images/city-armenia.png',
    'cúcuta': '/images/city-cucuta.png',
    'cucuta': '/images/city-cucuta.png',
    'ibagué': '/images/city-ibague.png',
    'ibague': '/images/city-ibague.png',
    'neiva': '/images/city_neiva.png',
    'pasto': '/images/city_pasto.png',
    'villavicencio': '/images/city_villavicencio.png',
    'popayán': '/images/city_popayan.png',
    'popayan': '/images/city_popayan.png',
    'popay': '/images/city_popayan.png',
    'valledupar': '/images/city_valledupar.png',
    'montería': '/images/city_monteria.png',
    'monteria': '/images/city_monteria.png',
    'monter': '/images/city_monteria.png',
    'tunja': '/images/city_tunja.png',
    'riohacha': '/images/city_riohacha.png',
    'quibdó': '/images/city_quibdo.png',
    'quibdo': '/images/city_quibdo.png',
    'quibd': '/images/city_quibdo.png',
    'leticia': '/images/city_leticia.png',
    'florencia': '/images/city_florencia.png',
    'yopal': '/images/city_yopal.png',
    'arauca': '/images/city_arauca.png',
    'sincelejo': '/images/city_sincelejo.png',
    'mocoa': '/images/city_mocoa.png',
    'inírida': '/images/city_inirida.png',
    'inirida': '/images/city_inirida.png',
    'mitu': '/images/city_mitu.png',
    'mitú': '/images/city_mitu.png',
    'buenavista': '/images/city_buenavista.png',
    'circasia': '/images/city_circasia.png',
    'córdoba': '/images/city_cordoba.png',
    'cordoba': '/images/city_cordoba.png',
    'filandia': '/images/city_filandia.png',
    'la tebaida': '/images/city_la_tebaida.png',
    'montenegro': '/images/city_montenegro.png',
    'pijao': '/images/city_pijao.png',
    'quimbaya': '/images/city_quimbaya.png',
    'salento': '/images/city_salento.png',
    'calarcá': '/images/city_calarca.png',
    'calarca': '/images/city_calarca.png',
    'génova': '/images/city_genova.png',
    'genova': '/images/city_genova.png',
    'mirití paraná': '/images/city_miriti_parana.png',
    'miriti paraná': '/images/city_miriti_parana.png',
    'mirití parana': '/images/city_miriti_parana.png',
    'miriti parana': '/images/city_miriti_parana.png',
    'puerto nariño': '/images/city_puerto_narino.png',
    'puerto narino': '/images/city_puerto_narino.png',
    'el encanto': '/images/city_el_encanto.png',
    'la chorrera': '/images/city_la_chorrera.png',
    'la pedrera': '/images/city_la_pedrera.png',
    'la victoria': '/images/city_la_victoria.png',
    'puerto arica': '/images/city_puerto_arica.png',
    'puerto santander': '/images/city_puerto_santander.png',
    'tarapacá': '/images/city_tarapaca.png',
    'tarapaca': '/images/city_tarapaca.png',
    'puerto alegría': '/images/city_puerto_alegria.png',
    'puerto alegria': '/images/city_puerto_alegria.png',
    'puerto carreño': '/images/city_puerto_carreno.png',
    'puerto carreno': '/images/city_puerto_carreno.png',
    'guatapé': '/images/city_guatape.png',
    'guatape': '/images/city_guatape.png',
    'jardín': '/images/city_jardin.png',
    'jardin': '/images/city_jardin.png',
    'jericó': '/images/city_jerico.png',
    'jerico': '/images/city_jerico.png',
    'santafé de antioquia': '/images/city_santafe_antioquia.png',
    'santafe de antioquia': '/images/city_santafe_antioquia.png',
    'santa rosa de osos': '/images/city_santa_rosa_osos.png',
    'támesis': '/images/city_tamesis.png',
    'tamesis': '/images/city_tamesis.png',
    'rionegro': '/images/city_rionegro.png',
    'envigado': '/images/city_envigado.png',
    'sabaneta': '/images/city_sabaneta.png',
    'itagüí': '/images/city_itagui.png',
    'itagui': '/images/city_itagui.png',
    'la ceja': '/images/city_la_ceja.png',
    'el carmen de viboral': '/images/city_el_carmen_viboral.png',
    'villa de leyva': '/images/city_villa_de_leyva.png',
    'paipa': '/images/city_paipa.png',
    'monguí': '/images/city_mongui.png',
    'mongui': '/images/city_mongui.png',
    'ráquira': '/images/city_raquira.png',
    'raquira': '/images/city_raquira.png',
    'sogamoso': '/images/city_sogamoso.png',
    'duitama': '/images/city_duitama.png',
    'iza': '/images/city_iza.png',
    'nobsa': '/images/city_nobsa.png',
    'aquitania': '/images/city_aquitania.png',
    'tibasosa': '/images/city_tibasosa.png',
    'sáchica': '/images/city_sachica.png',
    'sachica': '/images/city_sachica.png',
    'cucaita': '/images/city_cucaita.png',
    'bogotá': '/images/city-bogota.png',
    'bogota': '/images/city-bogota.png',
    'bogot': '/images/city-bogota.png',
    'santafé de bogotá': '/images/city-bogota.png',
    'santafe de bogota': '/images/city-bogota.png',
    'medellín': '/images/city-medellin.png',
    'medellin': '/images/city-medellin.png',
    'medell': '/images/city-medellin.png',
    'cali': '/images/city-cali.png',
    'santiago de cali': '/images/city-cali.png',
    'barranquilla': '/images/city-barranquilla.png',
    'santa marta': '/images/city-santa-marta.png',
    'cartagena': '/images/city_cartagena.png',
    'cartagena de indias': '/images/city_cartagena.png',
    'san andrés': '/images/city-san-andres.png',
    'san andres': '/images/city-san-andres.png',
    'san andr': '/images/city-san-andres.png'
};

export function getCityImage(cityName: string): string {
    const name = cityName.toLowerCase();

    for (const [key, value] of Object.entries(cityImages)) {
        if (name.includes(key) || key.includes(name)) {
            return getAssetPath(value);
        }
    }

    if (cityImages[name]) return getAssetPath(cityImages[name]);

    return `https://source.unsplash.com/800x600/?colombia,${cityName}`;
}

export const cityOverviews: Record<string, string> = {
    // Boyacá
    'villa de leyva': 'Famous for its massive cobblestone plaza and beautifully preserved white colonial buildings.',
    'tunja': 'The capital of Boyacá and the highest capital city in Colombia. It features a rich colonial heritage, historic churches, and was built on the site of the ancient Muisca capital Hunza.',
    'paipa': 'Known for the serene Lake Sochagota and its relaxing medicinal thermal springs.',
    'monguí': 'A "Pueblo Patrimonio" of Colombia, famous for its historic stone bridge and hand-stitched soccer ball industry.',
    'raquira': 'The craft capital of Boyacá, famous for its extremely colorful pottery shops and colonial charm.',
    'ráquira': 'The craft capital of Boyacá, famous for its extremely colorful pottery shops and colonial charm.',
    'sogamoso': 'Home to the Sun Temple of the Muiscas, an important site of indigenous heritage.',
    'duitama': 'Features the "Pueblito Boyacense," a charming area representing the architecture of the region\'s diverse towns.',
    'iza': 'A peaceful colonial town known for its green hills and traditional dessert market.',
    'nobsa': 'Renowned for its high-quality wool crafts, especially traditional ruanas and blankets.',
    'aquitania': 'Offers stunning panoramic views of Lake Tota, the largest lake in Colombia.',
    'tibasosa': 'A picturesque colonial town famous for its beautiful gardens and Feijoa fruit products.',
    'sáchica': 'Known for its unique Mediterranean-like atmosphere, desert landscapes, and historic church.',
    'sachica': 'Known for its unique Mediterranean-like atmosphere, desert landscapes, and historic church.',
    'cucaita': 'A tranquil village surrounded by scenic mountains and traditional Boyacense countryside.',

    // Antioquia
    'guatapé': 'A vibrant town famous for its incredibly colorful "zócalos" and the massive Peñol Rock offering 360-degree views.',
    'guatape': 'A vibrant town famous for its incredibly colorful "zócalos" and the massive Peñol Rock offering 360-degree views.',
    'jardín': 'One of Colombia\'s most beautiful towns, characterized by its flower-filled balconies and preserving colonial architecture.',
    'jardin': 'One of Colombia\'s most beautiful towns, characterized by its flower-filled balconies and preserving colonial architecture.',
    'jericó': 'The birthplace of Mother Laura, famous for its traditional leather "carriel" bags and stunning mountain scenery.',
    'jerico': 'The birthplace of Mother Laura, famous for its traditional leather "carriel" bags and stunning mountain scenery.',
    'santafé de antioquia': 'The historical capital of the department, featuring remarkable colonial architecture and the iconic Bridge of the West.',
    'santafe de antioquia': 'The historical capital of the department, featuring remarkable colonial architecture and the iconic Bridge of the West.',
    'santa rosa de osos': 'A high-altitude town known for its dairy traditions and the "Cathedral of the North."',
    'támesis': 'An ecological paradise known for its pre-Columbian petroglyphs and diverse hiking trails.',
    'tamesis': 'An ecological paradise known for its pre-Columbian petroglyphs and diverse hiking trails.',
    'rionegro': 'A historical industrial hub and the gateway to the beautiful San Nicolás valley.',
    'envigado': 'A traditional town that maintains a small-town feel within the metro area, famous for its gastronomy and festivals.',
    'sabaneta': 'The smallest municipality in Colombia, known for its vibrant town square and traditional buñuelos.',
    'itagüí': 'An industrial city known for its cultural centers and vibrant street murals.',
    'itagui': 'An industrial city known for its cultural centers and vibrant street murals.',
    'la ceja': 'A peaceful valley town famous for its flower exports and its strong cycling culture.',
    'el carmen de viboral': 'Famous worldwide for its unique, hand-painted ceramic traditions and artistic streets.'
};

export function getCityOverview(cityName: string, defaultDescription?: string): string {
    const name = cityName.toLowerCase();

    // Check for direct matches
    if (cityOverviews[name]) return cityOverviews[name];

    // Check for partial matches
    for (const [key, value] of Object.entries(cityOverviews)) {
        if (name.includes(key) || key.includes(name)) {
            return value;
        }
    }

    return defaultDescription || `Discover the beauty and culture of ${cityName}, a unique destination in Colombia.`;
}
