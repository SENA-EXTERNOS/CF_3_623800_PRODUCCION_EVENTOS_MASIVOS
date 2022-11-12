<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Normas de protocolo

    
    .row.mt-5.justify-content-center
      .col-lg-4.mb-5
        p Todos en algún momento de nuestra vida hemos oído hablar sobre la ‘etiqueta y el protocolo’, y muchas veces la mención de estos viene acompañada de la sensación de tedio o aburrimiento. Pero ¿por qué debemos conocer sobre ello? Para empezar, hay que establecer primero qué es el protocolo. Para ello se incluye a continuación el video 

        .col-lg-12
          a.anexo.mb-4(href="https://www.youtube.com/watch?v=sBDvcLGFD3Y" target="_blank")
              .anexo__icono
                img(src="@/assets/curso/temas/tema1/img10.svg")
              .anexo__texto
                b Enlace web. #[p ‘Definición de protocolo’ (SENA, 2021)]
      
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema1/img1.png', alt='Texto que describa la imagen').imagen-deco
      
      .col-lg-4.mb-5
        .bloque-texto-b.color-acento-botones.p-4
          .bloque-texto-b__texto
            p Entonces, cuando se habla de protocolo se hace referencia a un conjunto de reglas que las personas en una determinada sociedad deben acatar y respetar en situaciones específicas para mantener el orden y manifestar empatía, respeto y amabilidad, en especial en actos oficiales, solemnes o ceremoniales. Ese conjunto de reglas está dado por normas o por la costumbre; lo establecen quienes propician el evento y puede variar dependiendo del objetivo de este, que se ha definido con antelación. 
      
      .col-lg-12
        p Para aplicar la norma es importante definir si la reunión se va a desarrollar en un espacio cerrado o abierto, qué tipo de invitados asistirán, qué programa se va a llevar a cabo y la infraestructura requerida. Una de las normas de protocolo fundamentales en todo tipo de evento es la puntualidad, tanto en el inicio como en el cierre. Las otras normas que exige el evento se dan a conocer cuando se da la bienvenida y se hace la presentación de este.
      
      .col-lg-9
          a.anexo.mb-4(href="https://www.youtube.com/watch?v=MivhiyU2jTM" target="_blank")
              .anexo__icono
                img(src="@/assets/curso/temas/tema1/img10.svg")
              .anexo__texto
                b Enlace web. #[p ‘Tipos de protocolo’ (SENA, 2021)]

    .row.mt-5
      b Dentro de los tipos de protocolo se encuentran los siguientes:

    TabsA.color-acento-contenido.mb-5.mt-5
      .tarjeta.imgpestanas.p-4(titulo="Gubernamental")
        .row
          .col-xl-5.mb-4
            figure
            img(src='@/assets/curso/temas/tema1/img2.png')

          .col-xl-7
            p Es un conjunto de reglas que se aplican durante los eventos o ceremonias de organismos estatales (presidencia, congreso, ministerios, alcaldías o unidades territoriales). En Colombia, estas normas protocolarias están publicadas en el #[i Manual de protocolo. Dirección general del protocolo y ceremonial del Estado], el cual no solo determina el protocolo para eventos relacionados con la Presidencia de la República, sino también el del Ministerio de Relaciones Exteriores. 
            p Para ampliar la información puede consultar el Anexo 1 - Decreto 770 de 1982, que contempla el reglamento de protocolo ceremonial de la Presidencia de la República de Colombia.

        .row.justify-content-around.align-items-centerrd.mt-5
          .col-11
            .tarjeta.color-primario.mt-2.p-3
              .row
                .col-lg-3
                  img(src='@/assets/curso/temas/tema1/img11.svg' width='200px' height='100px')
                .col-5
                  .row.justify-content-around.mt-3
                    .col.mb-4.mb-sm-0
                      h4 Anexo 1
                      p Decreto 770 de 1982 

                    .col-lg-1
                      a.boton.color-acento-botones.texto-negro(:href="obtenerLink('/downloads/Anexo 1_Decreto_770_de_1982.pdf')" target="_blank")
                        span Descargar
                        i.fas.fa-file-download
      
      .tarjeta.imgpestanas.p-4(titulo="Diplomático")
        .row
          .col-xl-5.mb-4
            figure
            img(src='@/assets/curso/temas/tema1/img3.png')

          .col-xl-7
            p Estas normas se establecen para la relación de un representante diplomático de un país en relación con su homólogo de otro Estado. Marcan la interacción en el encuentro de representantes de varios países. Con ellas se busca estandarizar las relaciones entre estos, así como establecer las conductas que deben seguir los representantes diplomáticos en actos oficiales.
            p Vale la pena destacar la diferencia entre un protocolo diplomático y uno internacional, pues, aunque parecen iguales, el primero rige dentro del personal diplomático, mientras el segundo es utilizado en entornos donde se relacionan personas de distintos países para guiar la conducta de los asistentes.


      .tarjeta.imgpestanas.p-4(titulo="Religioso")
        .row
          .col-xl-5.mb-4
            figure
            img(src='@/assets/curso/temas/tema1/img4.png')

          .col-xl-7
            p Las normas de protocolo religioso varían de acuerdo con cada comunidad y doctrina. De acuerdo con el tipo de religión, las ceremonias o eventos tales como matrimonios, funerales, bautizos, misas o cultos ceremoniales siguen unas normas protocolarias y de etiqueta, las cuales son muy estrictas y ligadas a rituales.
            p En el caso de la religión católica, por ejemplo, la misa es un acto solemne con varios símbolos y una liturgia establecida, mientras en otras religiones el culto es más libre. Asimismo, las ceremonias de bautismo o de matrimonio tienen desarrollos diferentes.

      .tarjeta.imgpestanas.p-4(titulo="Deportivos")
        .row
          .col-xl-5.mb-4
            figure
            img(src='@/assets/curso/temas/tema1/img5.png')

          .col-xl-7
            p En los eventos deportivos las normas de protocolo velan por la armonía de todos los participantes. Dentro de los propósitos están informar y ayudar a los invitados y asistentes al evento, así como dar respuesta y solución a problemas y situaciones que surjan durante el encuentro. Junto con ello, es fundamental enriquecer el desarrollo de la competencia de acuerdo con su objetivo y organización; por último, aplicar las normas, reglas y leyes para facilitar la consecución de los objetivos. 
            p Por otro lado, se busca con el protocolo deportivo agradar a todos los participantes en su conjunto e individualmente, en la medida de lo posible, y ordenar las diferentes actuaciones con flexibilidad, diálogo, negociación, pero aplicando los reglamentos y normas pertinentes. 
            p Como los eventos deportivos se rigen por normas y reglas, los aspectos protocolarios son diversos según el tipo de deporte; sin embargo, existen normas y reglas de base como son precedencias para inauguraciones, premiaciones y el uso de símbolos como banderas, escudos e himnos.

      
      .tarjeta.imgpestanas.p-4(titulo="Militar")
        .row
          .col-xl-5.mb-4
            figure
            img(src='@/assets/curso/temas/tema1/img6.png')

          .col-xl-7
            p Según Euroinnova International Online Education (s. f.), el protocolo militar 

            .bloque-texto-b.p-4
              .bloque-texto-b__texto
                i.fas.fa-quote-left
                p Es un elemento fundamental en su constructo teórico-disciplinario, porque casi todo tiene un elemento ceremonial. Es decir, desde el simple toque de diana hasta actos más formales […]. Abarca más que “simples reglas, acciones y comportamientos, porque es un tesoro de principios éticos que conciernen a la carrera militar, fijando normas de conducta y comportamientos profesionales, éticos y morales (párrs. 1 y 7).   
                i.fas.fa-quote-right
              p Los actos de protocolo militar son precedidos por la autoridad que los organice o por una superior. Las ceremonias militares cuentan con un manual de protocolo y ceremonial militar que se ejecutan diariamente debido a que sus actos son constantes. La uniformidad en los actos militares es fundamental debido a que se refiere a los diferentes atuendos que tienen las fuerzas militares para cada actividad.


      .tarjeta.imgpestanas.p-4(titulo="Social")
        .row
          .col-xl-5.mb-4
            figure
            img(src='@/assets/curso/temas/tema1/img4.png')

          .col-xl-7
            p Reglas de cortesía u organización aplicadas en actos donde tienen lugar relaciones sociales, las cuales exigen cierta formalidad. Estas reglas han cambiado a raíz de la pandemia de COVID-19 que vivió el planeta, y las consideraciones de cada organizador y evento; sin embargo, es muy importante que se conozcan las normas que se tienen dentro de un evento social, para tener éxito en él. 
            p Las normas más comunes dentro del protocolo social, de acuerdo con Coll (2020), son: “ser puntual, vestir acordemente, no interrumpir, ser respetuoso, son algunos ejemplos de protocolo social. El protocolo social, en cierta forma, garantiza que se respetan las normas de convivencia, por ello, se enseña a la sociedad desde la infancia” (párrs. 3-4). 



      .tarjeta.imgpestanas.p-4(titulo="Empresarial")
        .row
          .col-xl-5.mb-4
            figure
            img(src='@/assets/curso/temas/tema1/img4.png')

          .col-xl-7
            p Los eventos empresariales son variados y por ello pueden tener diferentes objetivos y formatos. Sin embargo, y a pesar de las diferencias, todos tienen una característica común: necesitan un protocolo, el cual será marcado por el tipo de evento. 
            p Hay un protocolo que tiene como base la interrelación con el cliente y no solo funciona para eventos, sino también dentro del proceso de venta, el cual se conoce como protocolo estándar; mientras que el protocolo de eventos es el que recoge pautas y se rige por normas basadas en la imagen e identidad corporativa. 
            p El protocolo empresarial se aplica en negociaciones donde también se hacen evidentes las normas de etiqueta y cortesía. Cada empresa es libre de crear sus manuales con normas de protocolo para cada situación. Las pautas que se consideran para ello son: que el manual sea práctico, conciso, claro, flexible y de fácil acceso; además, debe contemplar todo lo que la empresa requiera para las reuniones o eventos que gestione de acuerdo con sus planes estratégicos. 
            p Sobre este tema, Barrientos (2016) expresa:
            p 
            .bloque-texto-b.p-4
                .bloque-texto-b__texto
                  i.fas.fa-quote-left
                  p Con la elaboración del manual de protocolo, también se busca la implementación de herramientas de tecnología actuales que se adapten a los eventos a realizar, con el fin de que los procesos se lleven a cabo de la mejor forma y con rapidez, generando una buena imagen frente a los clientes (p.7).   
                  i.fas.fa-quote-right
      .tarjeta.imgpestanas.p-4(titulo="Académico")
        .row
          .col-xl-5.mb-4
            figure
            img(src='@/assets/curso/temas/tema1/img4.png')

          .col-xl-7
            p Los eventos de enseñanza-aprendizaje siempre deben tener un protocolo regido por un programa, el cual se debe cumplir puntualmente y a cabalidad. Ejemplos de estos son las conferencias, seminarios, paneles, cursos, foros, simposios, coloquios, encuentros y charlas, entre otros.
            p Cada uno de estos eventos marcan unas normas para su realización, aunque en general su dinámica es exposición e interacción sobre un tema, con unas reglas de intervención, por ello aquí la comunicación asertiva desempeña un papel fundamental. Los eventos académicos, a diferencia de los demás, aplican como línea de protocolo un tiempo muy exacto y apropiado para su desarrollo, debido a que su objetivo es compartir conocimientos, y los invitados son personas enfocadas en el tema que se va a tratar. En líneas generales, se prefiere un tiempo para cada exposición, que oscila entre cuarenta y cinco minutos y una hora, con intervalos para la interacción con el público.
            p Dentro de las normas de protocolo se contempla elaborar unas memorias del evento y contar con material de apoyo, dejando abierta la posibilidad de seguir ampliando el conocimiento del tema propuesto.



</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
