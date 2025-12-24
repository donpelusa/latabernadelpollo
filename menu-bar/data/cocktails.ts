export interface Cocktail {
  id: number;
  name: string;
  ingredients: string[];
  description: string;
  image: string;
}

export const cocktails: Cocktail[] = [
  {
    id: 1,
    name: "Rosato Tonic",
    ingredients: [
      "Cubos de Hielo",
      "50 ml de Aperitivo Rosato",
      "100 ml de agua tónica",
      "Rodajas de limón",
      "(Opcional) Toque de syrup casero, para los dulzones.",
    ],
    description:
      "Cóctel fresco y ligero de perfil cítrico y floral. Ideal como aperitivo, muy fácil de tomar y perfecto para tardes calurosas.",
    image:
      "https://res.cloudinary.com/dfigfbsxy/image/upload/v1766589483/Rosato-Tonic-1024x684_hsrezc.webp",
  },
  {
    id: 2,
    name: "Violetto Tonic",
    ingredients: [
      "Cubos de Hielo",
      "1/3 de Aperitivo Violetto",
      "2/3 de agua tónica",
      "Arándanos",
      "(Opcional) Toque de syrup casero, para los dulzones.",
    ],
    description:
      "Refrescante y aromático, con notas florales y frutales. La tónica realza el carácter del Violetto y los arándanos aportan color y acidez.",
    image:
      "https://res.cloudinary.com/dfigfbsxy/image/upload/v1766589483/violetto-spritz.jpeg_s9qnup.webp",
  },
  {
    id: 3,
    name: "Rosato Spritz",
    ingredients: [
      "Cubos de Hielo",
      "50 ml de Aperitivo Rosato",
      "100 ml de Espumante Brut",
      "(Opcional) Rodaja de Naranja / Limón o Arándanos",
      "(Opcional) Toque de syrup casero, para los dulzones.",
    ],
    description:
      "Spritz elegante y refrescante, con burbujas suaves y un equilibrio perfecto entre dulzor y acidez. Ideal para compartir y abrir el apetito.",
    image:
      "https://res.cloudinary.com/dfigfbsxy/image/upload/v1766589482/Rosato-Mio-1024x684.jpg_g1jazq.webp",
  },
  {
    id: 4,
    name: "Violetto Spritz",
    ingredients: [
      "Cubos de Hielo",
      "50 ml de Aperitivo Violetto",
      "100 ml de Espumante Brut",
      "(Opcional) Rodaja de Naranja / Limón o Arándanos",
      "(Opcional) Toque de syrup casero, para los dulzones.",
    ],
    description:
      "Spritz floral y sofisticado, con un perfil aromático intenso y un final seco y burbujeante. Ideal para quienes buscan algo distinto al spritz clásico.",
    image:
      "https://res.cloudinary.com/dfigfbsxy/image/upload/v1766589483/violetto-tonic_drink_jjoosb.webp",
  },
  {
    id: 5,
    name: "Aperol Spritz",
    ingredients: [
      "90 ml de Espumante Brut",
      "60 ml de Aperol",
      "30 ml de Soda",
      "Rodaja de Naranja",
    ],
    description:
      "El spritz clásico italiano: refrescante, ligeramente amargo y muy equilibrado. Un aperitivo icónico, popular por Sex and the City.",
    image:
      "https://res.cloudinary.com/dfigfbsxy/image/upload/v1766589483/aperol-spritz_jwxn85.jpg",
  },
  {
    id: 6,
    name: "Gin Tonic",
    ingredients: [
      "90ml Prosecco",
      "60ml Aperol",
      "30ml Agua con gas",
      "Rodaja de naranja",
      "Hielo",
    ],
    description:
      "Refrescante y equilibrado, donde las notas botánicas del gin se combinan con la efervescencia de la tónica y un sutil toque cítrico. Un clásico versátil, ideal para cualquier momento.",
    image:
      "https://res.cloudinary.com/dfigfbsxy/image/upload/v1766589482/gin-tonic_viey0d.jpg",
  },
  {
    id: 7,
    name: "Sangría",
    ingredients: [
      "30ml Gin",
      "30ml Campari",
      "30ml Vermut rojo",
      "Twist de naranja",
      "Hielo",
    ],
    description:
      "Tradicional y frutal, mezcla de vino, frutas frescas y un dulzor justo. Refrescante, aromática y perfecta para compartir en buena compañía.",
    image:
      "https://res.cloudinary.com/dfigfbsxy/image/upload/v1766589483/sangria_c1gjil.jpg",
  },
  {
    id: 8,
    name: "Calafate Sour",
    ingredients: ["Pisco Sour Calafate", "Hielo", "(Opcional) Rodaja de limón"],
    description:
      "Cóctel patagónico de carácter intenso, con el equilibrio perfecto entre acidez y dulzor. El calafate aporta un color profundo y un sabor frutal único, con un final suave y persistente.",
    image:
      "https://res.cloudinary.com/dfigfbsxy/image/upload/v1766591092/sour-calafate_tdrsdc.png",
  },
  {
    id: 9,
    name: "Whisky Cola (Jack)",
    ingredients: ["Whisky Jack Daniels", "Coca Colita", "Hielo"],
    description:
      "Clásico y directo, combina la intensidad del whisky con el dulzor y las burbujas de la cola. Simple, potente y siempre confiable.",
    image:
      "https://res.cloudinary.com/dfigfbsxy/image/upload/c_pad,ar_4:3/v1766589483/whisky-cola_pxwafo.jpg",
  },
];
