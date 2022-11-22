export default {
  global: {
    componenteFormativo: 'Protocolo en los eventos',
    descripcionCurso:
      'Para que todos los eventos tengan éxito, es necesario aplicar y hacer seguimiento al protocolo y cumplir ciertas reglas de etiqueta establecidas. Tanto el protocolo como la etiqueta dependen del tipo de actividad, puesto que no todos los eventos siguen las mismas normas, ya que no tienen las mismas características. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.svg'),
      },
    ],
  },

  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Normas de protocolo',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Reglas de etiqueta',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Ceremonias',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Protocolo',
      referencia:
        'Real Federación Motociclistas Española (s. f.). <em> Protocolo deportivo</em>. Fedemoto.',
      tipo: 'Documento',
      link: 'https://fedemoto.info/ImgFCK_15/File/PROTOCOLO_DEPORTIVO(1).pdf',
    },
    {
      tema: 'Protocolo',
      referencia:
        'Organización de Estados Americanos [OEA], Departamento de Gestión de Conferencias (2017). <em> Manual operativo para la organización de reuniones y conferencias fuera de la sede</em>. OEA',
      tipo: 'Documento',
      link: 'http://www.scm.oas.org/Manual/ManualOperativo.pdf',
    },
    {
      tema: 'Protocolo',
      referencia:
        'Fernández, M. (s. f.). <em>Memorias, protocolo y organización de eventos</em>. Universidad Católica Luis Amigó-Funlam.',
      tipo: 'Documento',
      link:
        'https://www.funlam.edu.co/uploads/facultadcomunicacion/244_MEMORIAS_PROTOCOLO_Y_ORGANIZACION_DE_EVENTOS01.pdf',
    },
    {
      tema: 'Protocolo',
      referencia:
        'Área Metropolitana Valle de Aburra (s. f.).<em>Manual de eventos y protocolo</em>. Metropol.',
      tipo: 'Documento',
      link:
        'https://www.metropol.gov.co/area/Documents/transparencia/3.%20Manual%20de%20Eventos%20y%20Protocolo.pdf',
    },
    {
      tema: 'Protocolo',
      referencia:
        'Estrada, S. (2011).<em> Manual de protocolo para la realización de eventos institucionales en la Corporación Universitaria Lasallista </em>[tesis pregrado]. Corporación Universitaria Lasallista. Repositorio Lasallista.',
      tipo: 'Tesis de pregrado',
      link:
        'http://repository.unilasallista.edu.co/dspace/bitstream/10567/273/1/Manual_Protocolo_Eventos_CUL.pdf',
    },
    {
      tema: 'Protocolo',
      referencia:
        'Barrientos, J. (2016). <em> Manual de protocolo para la realización de eventos académicos en Contáctica Comunicaciones </em> [tesis de pregrado]. Corporación Universitaria Lasallista. Repositorio Lasallista.',
      tipo: 'Tesis',
      link:
        'http://repository.unilasallista.edu.co/dspace/bitstream/10567/1794/1/Manual_protocolo_eventos_academicos_Contactica.pdf',
    },
    {
      tema: 'Protocolo',
      referencia:
        'Colombia, Ministerio de Relaciones Exteriores (s. f.). <em>Manual del protocolo</em>. Ministerio de Relaciones Exteriores.',
      tipo: 'Documento',
      link:
        'https://www.cancilleria.gov.co/sites/default/files/FOTOS2020/DP-MA-002%20MANUAL%20DE%20PROTOCOLO%20V5.pdf',
    },
    {
      tema: 'Protocolo',
      referencia:
        'Servicio Nacional de Aprendizaje [SENA] (2021). “Definición de protocolo” [video]. Ecosistema de Recursos Educativos Digitales SENA. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=sBDvcLGFD3Y',
    },
    {
      tema: 'Protocolo',
      referencia:
        'Servicio Nacional de Aprendizaje [SENA] (2021). “Tipos de protocolo” [video]. Ecosistemas de Recursos Educativos Digitales SENA. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=MivhiyU2jTM',
    },
    {
      tema: 'Protocolo y Ceremonial',
      referencia:
        'Colombia, Presidencia de la República (1982, 12 de marzo). <em> Decreto 770 de 1982 “por el cual se expide el Reglamento de Protocolo y Ceremonial de la Presidencia de la República”</em>. D. O. 36005.',
      tipo: 'Decreto',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=40050',
    },
    {
      tema: 'Etiqueta',
      referencia:
        'Servicio Nacional de Aprendizaje [SENA] Formación en Ambientes Virtuales de Aprendizaje [FAVA]. (s. f.). <em>Etiqueta y protocolo</em>. SENA.',
      tipo: 'Documento',
      descarga: '/downloads/Anexo 2_ Etiqueta y protocolo.pdf',
    },
    {
      tema: 'Etiqueta y protocolo',
      referencia:
        'Servicio Nacional de Aprendizaje [SENA] (2021). “Normas de etiqueta y protocolo” [video]. Ecosistema de Recursos Educativos Digitales SENA.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=a-BgD2Cb0po',
    },
  ],
  glosario: [
    {
      termino: 'Bufé',
      significado:
        'Comida compuesta por diferentes platos calientes y fríos, a veces dispuesta en varias mesas, para que las personas puedan elegir lo que más les guste.',
    },
    {
      termino: 'Diplomático',
      significado:
        'Persona que tiene un trato armónico y amable con los demás.',
    },
    {
      termino: 'Entremés',
      significado:
        'Alimento, por lo general frío, que se sirve antes del plato fuerte. Se pueden destacar el coctel de camarones, los huevos rellenos y las ensaladas compuestas, entre otros.',
    },
    {
      termino: 'Etiqueta',
      significado:
        'Reglas que se usan dentro de la sociedad para armonizar la interrelación entre los individuos que la componen.',
    },
    {
      termino: 'Infraestructura',
      significado:
        'Instalaciones, servicios o medios técnicos que se requieren en un lugar para que pueda ser utilizado.',
    },
    {
      termino: 'Norma',
      significado: 'Principio para imponer una conducta correcta.',
    },
    {
      termino: 'Pertenencia',
      significado: 'Formar parte de un grupo u organización.',
    },
    {
      termino: 'Pertinencia',
      significado: 'Aquello relevante y conveniente que acarrea compromiso.',
    },
    {
      termino: 'Precedencia',
      significado:
        'Preeminencia o preferencia en el lugar y asiento de las personas para una ceremonia.',
    },
    {
      termino: 'Símbolos',
      significado: 'Representación de actos, países o culturas.',
    },
    {
      termino: 'Solemnidad',
      significado:
        'Cualidad de solemne, formal, riguroso, acompañado de todos los requisitos necesarios.',
    },
    {
      termino: 'Uniformidad',
      significado:
        'Cualidad de uniforme. Relacionado con los uniformes o vestidos distintivos usados en distintas entidades como empresas o fuerzas militares.',
    },
  ],
  referencias: [
    {
      referencia:
        'Libro Borges, A. (2013). La innovación en la organización de eventos. <em> Compe. Revista Científica de Comunicación, Protocolo y Eventos </em> (1), pp. 46-60.',
      link: '',
    },
    {
      referencia:
        'Página web Coll, M. (2020, 13 de noviembre). <em> Tipos de protocolo.</em> Economipedia.com.',
      link: 'https://economipedia.com/definiciones/tipos-de-protocolo.html. ',
    },
    {
      referencia:
        'Página web Ecodiario.es (2020, agosto 17). <em> Reglas de etiqueta del día a día que todos hemos roto al menos una vez.</em> ElEconomista.es.',
      link:
        'https://ecodiario.eleconomista.es/viralplus/noticias/10724631/08/20/Reglas-de-etiqueta-del-dia-a-dia-que-todos-hemos-roto-al-menos-una-vez.html.',
    },
    {
      referencia:
        'Página web Eserp Business & Law School (s. f.). <em> Qué es el protocolo empresarial.</em> Eserp Business & Law School.',
      link: 'https://es.eserp.com/articulos/protocolo-empresarial/.',
    },
    {
      referencia:
        'Página web Esneca Business School (2020, 6 de noviembre). <em> Los tipos de protocolos que debes conocer.</em> Esneca.com.',
      link: 'https://www.esneca.com/blog/tipos-de-protocolo/.',
    },
    {
      referencia:
        'Página web Euroinnova International Online Education (s. f.). <em> Qué es un protocolo militar.</em>',
      link: 'https://www.euroinnova.edu.es/que-es-un-protocolo-militar.',
    },
    {
      referencia:
        'Página web Lanzito, C. (s. f.). <em> Las reglas de etiqueta más importantes. AARP. </em> ',
      link: 'https://bit.ly/3ExJSAI.',
    },
    {
      referencia:
        'Página web IOE Business School (2018, 7 de noviembre). <em> Conoce los tipos de protocolo.</em> Grupo IOE. ',
      link: 'https://www.grupoioe.es/conoce-los-tipos-de-protocolo/.',
    },
    {
      referencia:
        'Libro electrónico Jiménez, M., y Panizo, J. (2017). Eventos y protocolo: la gestión estratégica de actos corporativos e institucionales. Universitat Oberta de Catalunya. Digitalia.',
      link: 'https://www-digitaliapublishing-com.bdigital.sena.edu.co/a/47383',
    },
    {
      referencia:
        'Página web Materia Efímera (2020). <em> El protocolo aplicado a eventos.</em> Materia Efímera.  ',
      link:
        'https://materiaefimera.com/sin-categorizar-2/protocolo-en-los-eventos/2020/.',
    },
    {
      referencia:
        'Libro electrónico Montedeoca, R. (2013). <em> Organización de reuniones y eventos.</em> IC Editorial. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/44531?page=196',
    },
    {
      referencia:
        'Página web Nanduca, A. (2021, 20 de junio). <em> Evento formal e informal.</em> Prezi.',
      link: 'https://prezi.com/p/sahonilir-1l/eventos-formales-e-informales/.',
    },
    {
      referencia:
        'Libro electrónico Otero, M. (2009). <em> Protocolo y organización de eventos.</em> Editorial UOC. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/56460',
    },
    {
      referencia:
        'Libro electrónico Patiño, L. (2012). <em>Etiqueta y protocolo: base de la imagen empresarial.</em> Eumed. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/25122',
    },
    {
      referencia:
        'Página web Vargas, U. (s. f.). <em>Tipos de eventos empresariales que puedes organizar.</em> Aprende Institute.',
      link:
        'https://aprende.com/blog/emprendimiento/eventos/tipos-de-eventos-empresariales-que-puedes-organizar/.',
    },
    {
      referencia:
        'Libro Villanueva, R. (2012). <em>Gestión de protocolo.</em> IC Editorial. ',
      link: '',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
