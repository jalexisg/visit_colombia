export interface ManualAttraction {
    id: number;
    name: string;
    description: string;
    latitude: string;
    longitude: string;
    images: string[];
    link?: string;
}

export const manualAttractions: ManualAttraction[] = [
    {
        id: 1,
        name: "Monserrate",
        description: "A mountain that dominates the city center of Bogotá, rising to 3,152 meters above the sea level, where there is a church (built in the 17th century) with a shrine, devoted to 'El Señor Caído'.",
        latitude: "4.6058",
        longitude: "-74.0564",
        images: ["/images/city-bogota.png"],
        link: "/cities/167" // Bogotá
    },
    {
        id: 2,
        name: "Castillo San Felipe de Barajas",
        description: "A fortress in the city of Cartagena, Colombia. The castle is located on the Hill of San Lázaro in a strategic location, dominating approaches to the city by land or sea.",
        latitude: "10.4225",
        longitude: "-75.5414",
        images: ["/images/blog-cartagena.png"],
        link: "/cities/210" // Cartagena
    },
    {
        id: 3,
        name: "Hacienda Nápoles",
        description: "Hacienda Nápoles was the luxurious estate built and owned by Colombian drug lord Pablo Escobar. It is now a theme park and zoo.",
        latitude: "5.9189",
        longitude: "-74.7214",
        images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/P%C3%B3rtico_Hacienda_N%C3%A1poles.JPG/800px-P%C3%B3rtico_Hacienda_N%C3%A1poles.JPG"],
        link: "/cities/88" // Puerto Triunfo
    },
    {
        id: 4,
        name: "Parque Nacional del Café",
        description: "A theme park in the Quindío department, Colombia. The park features a museum, culture shows, a cable car, and several ecological trails.",
        latitude: "4.5401",
        longitude: "-75.7706",
        images: ["/images/blog-coffee.png"],
        link: "/cities/891" // Montenegro
    },
    {
        id: 5,
        name: "Catedral de Sal de Zipaquirá",
        description: "An underground Roman Catholic church built within the tunnels of a salt mine 200 metres underground in a halite mountain near the city of Zipaquirá.",
        latitude: "5.0200",
        longitude: "-74.0111",
        images: ["https://images.unsplash.com/photo-1591823903176-0f86580f4803?q=80&w=1000&auto=format&fit=crop"],
        link: "/cities/641" // Zipaquirá
    },
    {
        id: 6,
        name: "Plaza de Bolívar",
        description: "The main square of the Colombian capital Bogotá. The square, previously known as Plaza Mayor, is located in the heart of the city's historical area.",
        latitude: "4.5981",
        longitude: "-74.0758",
        images: ["/images/city-bogota.png"],
        link: "/cities/167"
    },
    {
        id: 7,
        name: "Museo del Oro",
        description: "The Gold Museum is a museum located in Bogotá, Colombia. It displays a selection of the the largest collection of gold pre-Hispanic artifacts in the world.",
        latitude: "4.6019",
        longitude: "-74.0719",
        images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Museo_del_Oro_Bogota.jpg/800px-Museo_del_Oro_Bogota.jpg"],
        link: "/cities/167"
    },
    {
        id: 8,
        name: "Parque Arqueológico de San Agustín",
        description: "An archaeological site located in the town of San Agustín in the Huila Department in Colombia. It contains the largest collection of religious monuments and megalithic sculptures in Latin America.",
        latitude: "1.8894",
        longitude: "-76.2947",
        images: ["https://images.unsplash.com/photo-1627932644265-f94d0dc5222b?q=80&w=1000&auto=format&fit=crop"],
        link: "/cities/693" // San Agustín
    },
    {
        id: 9,
        name: "Ciudad Perdida",
        description: "The 'Lost City' is an ancient archaeological site in the Sierra Nevada de Santa Marta. It is believed to have been founded about 800 CE, some 650 years earlier than Machu Picchu.",
        latitude: "11.0372",
        longitude: "-73.9250",
        images: ["https://images.unsplash.com/photo-1579207024653-e997f7dc8d91?q=80&w=1000&auto=format&fit=crop"],
        link: "/cities/709" // Santa Marta
    },
    {
        id: 10,
        name: "Santuario de Las Lajas",
        description: "A basilica church located in the southern Colombian Department of Nariño, in the municipality of Ipiales, and built inside the canyon of the Guáitara River.",
        latitude: "0.8056",
        longitude: "-77.5861",
        images: ["https://images.unsplash.com/photo-1533662973123-d3090deb941c?q=80&w=1000&auto=format&fit=crop"],
        link: "/cities/791" // Ipiales
    },
    {
        id: 11,
        name: "Parque Tayrona",
        description: "A protected area in the Colombian northern Caribbean region and within the jurisdiction of the Department of Magdalena and 34 kilometres from the city of Santa Marta.",
        latitude: "11.3125",
        longitude: "-74.0708",
        images: ["/images/blog-tayrona.png"],
        link: "/natural-parks/66" // Tayrona
    },
    {
        id: 12,
        name: "Valle de Cocora",
        description: "A broad valley in the Cordillera Central of the Colombian Andes. It is the principal location of the national tree and symbol of Colombia, the Quindío wax palm.",
        latitude: "4.6400",
        longitude: "-75.5683",
        images: ["/images/dept-coffee.png"],
        link: "/cities/885" // Armenia (Salento not in API?)
    },
    {
        id: 13,
        name: "Caño Cristales",
        description: "Known as the 'River of Five Colors' or the 'Liquid Rainbow', is a Colombian river located in the Serrania de la Macarena province of Meta.",
        latitude: "2.2642",
        longitude: "-73.7944",
        images: ["/images/blog-cano-cristales.png"],
        link: "/natural-parks/426" // Sierra de la Macarena
    },
    {
        id: 14,
        name: "Piedra del Peñol",
        description: "Also known as El Peñón de Guatapé, is a massive stone rising over 200 meters out of the flat ground of Guatapé, Antioquia.",
        latitude: "6.2206",
        longitude: "-75.1792",
        images: ["https://images.unsplash.com/photo-1591823903176-0f86580f4803?q=80&w=1000&auto=format&fit=crop"],
        link: "/cities/62" // Guatapé
    },
    {
        id: 15,
        name: "Comuna 13 Graffitour",
        description: "Once known as one of the most dangerous neighborhoods in Medellin, it has transformed into a vibrant hub of street art, music, and culture.",
        latitude: "6.2464",
        longitude: "-75.6022",
        images: ["/images/city-medellin.png"],
        link: "/cities/12" // Medellín
    },
    {
        id: 16,
        name: "Jardin Botánico de Medellín",
        description: "A 14-hectare botanical garden in Medellín, featuring a butterfly house, lagoon, and diverse plant species.",
        latitude: "6.2694",
        longitude: "-75.5653",
        images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Jard%C3%ADn_bot%C3%A1nico_de_Medell%C3%ADn_Joaqu%C3%ADn_Antonio_Uribe_-_Orquideorama.jpg/800px-Jard%C3%ADn_bot%C3%A1nico_de_Medell%C3%ADn_Joaqu%C3%ADn_Antonio_Uribe_-_Orquideorama.jpg"],
        link: "/cities/12"
    },
    {
        id: 17,
        name: "Parque Explora",
        description: "An interactive science museum and aquarium in Medellín, featuring over 300 interactive experiences.",
        latitude: "6.2706",
        longitude: "-75.5656",
        images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Parque_Explora%2C_Medell%C3%ADn.jpg/800px-Parque_Explora%2C_Medell%C3%ADn.jpg"],
        link: "/cities/12"
    },
    {
        id: 18,
        name: "Plaza Botero",
        description: "An outside park in front of the Museum of Antioquia in Medellin that displays 23 sculptures donated by Colombian artist Fernando Botero.",
        latitude: "6.2522",
        longitude: "-75.5683",
        images: ["/images/city-medellin.png"],
        link: "/cities/12"
    },
    {
        id: 19,
        name: "Torre del Reloj",
        description: "The main city gate of the historic center of Cartagena de Indias, Colombia and the original entrance of the fortified city.",
        latitude: "10.4222",
        longitude: "-75.5483",
        images: ["/images/blog-cartagena.png"],
        link: "/cities/210"
    },
    {
        id: 20,
        name: "Islas del Rosario",
        description: "An archipelago located off the coast of Colombia, approximately 100 kilometres from Cartagena. It is one of the 46 Natural National Parks of Colombia.",
        latitude: "10.1667",
        longitude: "-75.7500",
        images: ["https://images.unsplash.com/photo-1583531352515-8884af319dc1?q=80&w=1000&auto=format&fit=crop"],
        link: "/natural-parks/206" // Corales del Rosario
    },
    {
        id: 21,
        name: "Desierto de la Tatacoa",
        description: "The Tatacoa Desert is the second largest arid zone in Colombia after the Guajira Peninsula. It is one of the most attractive scenarios in Colombia.",
        latitude: "3.2300",
        longitude: "-75.1667",
        images: ["https://images.unsplash.com/photo-1540206395-68808572332f?q=80&w=1000&auto=format&fit=crop"],
        link: "/cities/691" // Villavieja
    },
    {
        id: 23,
        name: "Amacayacu National Park",
        description: "A national park located in the south of the majestic Colombian Amazon rain forest. It provides an opportunity to see the rich wildlife of the Amazon.",
        latitude: "-3.4767",
        longitude: "-70.3000",
        images: ["/images/landscape-amazon.png"],
        link: "/natural-parks/72"
    },
    {
        id: 24,
        name: "El Cocuy National Park",
        description: "A national natural park dealing with the Sierra Nevada de Güicán, Chita or Cocuy, a formation of more than 25 peaks covered with snow and ice.",
        latitude: "6.4167",
        longitude: "-72.3333",
        images: ["/images/landscape-andes.png"],
        link: "/natural-parks/263"
    },
    {
        id: 25,
        name: "Los Nevados National Park",
        description: "Located in the Colombian Coffee-Growers Axis. The park is surrounded by snow-capped peaks, including Nevado del Ruiz, Nevado de Santa Isabel, and Nevado del Tolima.",
        latitude: "4.8833",
        longitude: "-75.3667",
        images: ["/images/park-mountain.png"],
        link: "/natural-parks/18"
    },
    {
        id: 26,
        name: "Serranía de Chiribiquete National Park",
        description: "A UNESCO World Heritage Site and the world's largest tepui plateau, featuring ancient rock art with over 75,000 paintings. It is a biodiversity hotspot and sacred land for indigenous peoples.",
        latitude: "0.8667",
        longitude: "-72.6333",
        images: ["/images/landscape-amazon.png"],
        link: "/natural-parks/450"
    },
    {
        id: 27,
        name: "Chingaza National Park",
        description: "Located northeast of Bogotá, Chingaza is a high-altitude páramo ecosystem that provides drinking water to millions of people. It is home to tapirs, spectacled bears, and the Andean condor.",
        latitude: "4.5167",
        longitude: "-73.7500",
        images: ["/images/park-paramo.png"],
        link: "/natural-parks/204"
    },
    {
        id: 28,
        name: "Gorgona Natural National Park",
        description: "A remote island national park in the Pacific Ocean, formerly a prison colony. Today it is a sanctuary for humpback whales, sea turtles, sharks, and some of the most biodiverse coral reefs in the eastern Pacific.",
        latitude: "2.9667",
        longitude: "-78.1833",
        images: ["/images/park-coast.png"],
        link: "/natural-parks/149"
    },
    {
        id: 29,
        name: "Utría National Park",
        description: "A stunning coastal park on the Pacific coast of Chocó, one of the world's most biodiverse regions. It protects lush jungle, mangroves, and turquoise coves where humpback whales come to breed.",
        latitude: "6.0167",
        longitude: "-77.3500",
        images: ["/images/park-coast.png"],
        link: "/natural-parks/115"
    },
    {
        id: 30,
        name: "Puracé National Park",
        description: "A volcanic landscape in the Colombian Andes featuring the active Puracé volcano, sulfur springs, waterfalls, and páramo ecosystems rich in frailejones and spectacled bears.",
        latitude: "2.3167",
        longitude: "-76.4000",
        images: ["/images/park-mountain.png"],
        link: "/natural-parks/14"
    },
    {
        id: 31,
        name: "Santuario Los Flamencos",
        description: "A wildlife sanctuary on the Caribbean coast of La Guajira, protecting coastal lagoons, mangroves, and beaches. It is famous for its flamingo colonies and is a key stop on migratory bird routes.",
        latitude: "11.2500",
        longitude: "-73.4167",
        images: ["/images/park-coast.png"],
        link: "/natural-parks/107"
    },
    {
        id: 32,
        name: "Las Orquídeas National Park",
        description: "A biodiversity hotspot in the western Colombian Andes, protecting one of the world's greatest concentrations of orchid species alongside jaguar, ocelot, and an extraordinary array of birds.",
        latitude: "6.5833",
        longitude: "-76.2500",
        images: ["/images/park-jungle.png"],
        link: "/natural-parks/73"
    },
    {
        id: 33,
        name: "Serranía de la Macarena National Park",
        description: "A unique biological crossroads where the Andes, Orinoquía, and Amazon regions meet. Home to the legendary Caño Cristales river — the 'River of Five Colors' — and remarkable endemic species.",
        latitude: "3.3833",
        longitude: "-73.9167",
        images: ["/images/blog-cano-cristales.png"],
        link: "/natural-parks/426"
    }
];
