const cursos = [
  {
    IdCurso: 1,
    title: "Java orientado a objetos",
    descriction: "Texto descriptivo",
    imgCurso:
      "https://formaciononline.eu/wp-content/uploads/2013/05/curso-java.jpg",
    idiom: "Español",
    price: 29.99,
    duration: "3 meses",
    skills: ["java", "java orientado a objetos", "visual"],
    difficulty: "Basico", //Recordando que cuando se este del lado del registro de curso, este OLE: Basico,Intermedio,Avanzado
    instructor: "Yeison Gonzalez", // aca para el back llega distinto
    category: ["programacion", "mundo TI", "Tecnoliga"],
    ratings: 4.6,
    asset: true,
  },
  {
    IdCurso: 2,
    title: "Photoshop",
    descriction: "Texto descriptivo",
    imgCurso:
      "https://imactions.agency/wp-content/uploads/2022/12/que-es-photoshop.jpg",
    idiom: "Español",
    price: 25,
    duration: "una semana",
    skills: ["photoshop", "diseño grafico", "paleta de colores"],
    difficulty: "Medio",
    instructor: "Felipe Garcia",
    category: ["Diseño grafico", "Marketing"],
    ratings: 3.3,
    asset: true,
  },
  {
    IdCurso: 3,
    title: "Introducción a Python",
    description: "Curso introductorio a Python para programadores novatos",
    imgCurso:
      "https://www.dongee.com/tutoriales/content/images/2023/01/image-47.png",
    idiom: "Español",
    price: 19.99,
    duration: "2 meses",
    skills: ["python", "programación", "novatos"],
    difficulty: "Basico",
    instructor: "Maria Garcia",
    category: ["programación", "mundo TI", "Tecnología"],
    ratings: 4.8,
    asset: true,
  },
  {
    IdCurso: 4,
    title: "Machine Learning con TensorFlow",
    description: "Curso de Machine Learning para expertos en TensorFlow",
    imgCurso:
      "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2015/12/139161-que-es-inteligencia-artificial.jpg?tf=3840x",
    idiom: "Inglés",
    price: 99.99,
    duration: "6 meses",
    skills: ["machine learning", "TensorFlow", "programación"],
    difficulty: "Avanzado",
    instructor: "John Smith",
    category: ["inteligencia artificial", "ciencia de datos", "Tecnología"],
    ratings: 4.9,
    asset: true,
  },
  {
    IdCurso: 5,
    title: "Desarrollo web con React",
    description: "Curso de desarrollo web utilizando la librería React",
    imgCurso:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbHt_SjisE0B--OHBCw5TOTIFPgOEtXhmcEmq39tH7_cYUqZe0JzwbadwcGkG4kjZFdD8&usqp=CAU",
    idiom: "Español",
    price: 49.99,
    duration: "4 meses",
    skills: ["React", "desarrollo web", "programación"],
    difficulty: "Intermedio",
    instructor: "Carlos Rodriguez",
    category: ["desarrollo web", "mundo TI", "Tecnología"],
    ratings: 4.7,
    asset: true,
  },
  {
    IdCurso: 6,
    title: "Introducción a la inteligencia artificial",
    description:
      "Curso introductorio para aprender los fundamentos de la inteligencia artificial",
    imgCurso:
      "https://elordenmundial.com/wp-content/uploads/2023/04/que-es-inteligencia-artificial.jpg",
    idiom: "Español",
    price: 29.99,
    duration: "2 meses",
    skills: [
      "Inteligencia artificial",
      "aprendizaje automático",
      "programación",
    ],
    difficulty: "Básico",
    instructor: "María García",
    category: ["Inteligencia artificial", "mundo TI", "Tecnología"],
    ratings: 4.2,
    asset: false,
  },
  {
    IdCurso: 7,
    title: "Programación avanzada en Python",
    description: "Curso avanzado de programación utilizando el lenguaje Python",
    imgCurso: "https://img-b.udemycdn.com/course/750x422/2722434_fd59_6.jpg",
    idiom: "Español",
    price: 79.99,
    duration: "6 meses",
    skills: ["Python", "programación avanzada", "algoritmos"],
    difficulty: "Avanzado",
    instructor: "Juan Pérez",
    category: ["programación", "mundo TI", "Tecnología"],
    ratings: 4.8,
    asset: true,
  },
  {
    IdCurso: 8,
    title: "Diseño gráfico para principiantes",
    description: "Curso para aprender los conceptos básicos del diseño gráfico",
    imgCurso:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNGXBjC3NRc_rGEEiADyNP85KEKmf5gN4iJy3huHZgS-rE8NXxkZ3NcRi8o8Sgt6FGmJ4&usqp=CAU",
    idiom: "Español",
    price: 19.99,
    duration: "2 meses",
    skills: ["Diseño gráfico", "Adobe Illustrator", "Photoshop"],
    difficulty: "Básico",
    instructor: "Ana Torres",
    category: ["diseño gráfico", "creatividad", "arte"],
    ratings: 4.5,
    asset: false,
  },
  {
    IdCurso: 9,
    title: "Marketing digital para emprendedores",
    description:
      "Curso para emprendedores que quieren aprender a hacer marketing digital",
    imgCurso:
      "https://www.salesforce.com/content/dam/blogs/br/2021/por-que-investir-em-marketing-digital.jpg",
    idiom: "Español",
    price: 49.99,
    duration: "3 meses",
    skills: ["Marketing digital", "SEO", "publicidad en redes sociales"],
    difficulty: "Intermedio",
    instructor: "Luisa Ramírez",
    category: ["marketing", "negocios", "emprendimiento"],
    ratings: 4.3,
    asset: true,
  },
  {
    IdCurso: 10,
    title: "Desarrollo de aplicaciones móviles con Flutter",
    description:
      "Curso para desarrollar aplicaciones móviles utilizando el framework Flutter",
    imgCurso:
      "https://cocktailmarketing.com.mx/wp-content/uploads/2021/07/que-es-y-que-hace-una-agencia-de-marketing-digital.jpg",
    idiom: "Español",
    price: 59.99,
  },
];

module.exports = cursos;