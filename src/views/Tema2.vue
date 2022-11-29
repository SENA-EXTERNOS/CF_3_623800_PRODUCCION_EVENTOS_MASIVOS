<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Reglas de etiqueta

    .row.justify-content-center.align-items-center
      .col-3.mb-5
        figure
          img(src='@/assets/curso/temas/tema2/img1.png' )
      .col-lg-9.mb-5.sm-8
        .bloque-texto-b.color-cajon.p-4
          .bloque-texto-b__texto
            p.mt-4 Una vez claro el concepto y tipos de protocolos, se entrará a estudiar la etiqueta. Senning (citado por Lanzito, 2017) expresa: #[b “La buena etiqueta se trata de invertir en la calidad del tiempo que pasamos con otras personas. Consiste en preocuparnos por los demás, por su comodidad y su alegría"] (párr. 2). En la realización de eventos se conjuga este concepto tan importante con los modales que hacen armónica la interacción con otros, con base en algunas reglas y modos de conducta para lograr una forma cómoda y amable de interacción entre las personas.
          
        .col-lg-12.mb-5.sm-8
          p.mt-4 La etiqueta no siempre implica reglas protocolarias, en cambio, el protocolo sí incluye reglas de etiqueta en el comportamiento de cada persona, por ello es tan importante definir, de acuerdo con el evento, si existen normas de etiqueta exigibles o no. Por ejemplo, en un almuerzo de negocios debemos aplicar todas las normas de etiqueta que existen cuando estamos sentados a la mesa, y tener en cuenta la forma de manejar la comunicación en ella, lo mismo sucede cuando hablamos de eventos solemnes que exigen una conducta de respeto y seriedad de parte de los asistentes.

      b A continuación, se verán dos tipos de etiqueta, que son las más usadas en la organización de eventos. 

    .row.mt-5.justify-content-center.imgslider
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center.my-lg-4
          .col-lg-8
            .number(data-number="01")
              b Etiqueta en eventos sociales: 
              p Para que podamos diferenciar la etiqueta en eventos sociales debemos tener presente que estos, aunque son tan diversos, tienen como objetivo implícito la interacción entre las personas; por ello para cada ocasión se establecen algunas normas de conducta y de trato entre sus participantes. Estas normas están definidas por la cultura y el estilo de vida: son distintas las normas de etiqueta usadas en la mesa en países del continente americano a las usuales en los países del Medio Oriente, o a aquellas usadas por los pueblos indígenas y ancestrales.
              p La etiqueta y el comportamiento en la mesa es un aspecto fundamental en actos sociales. Abarca desde cómo se pone la mesa hasta los modales durante el evento, e incluyen temas como la medida prudente del consumo de los alimentos que se ofrezcan. Todo lo que tiene que ver con lo social marca normas de etiqueta, por ejemplo, saludar y agradecer en cada evento al cual se asista.
              p Para profundizar en este tema, le invitamos a leer los documentos que se encuentran en la sección de material de apoyo de este componente formativo.

          .col-lg-3
            figure
              img(src='@/assets/curso/temas/tema2/img2.png')

        .row.justify-content-center.align-items-center.my-lg-4
          .col-lg-7
            .number(data-number="02")
              b Etiqueta empresarial:  
              p La etiqueta no se refiere exclusivamente a la forma de vestir, sino también a la imagen que impartimos por nuestra manera de actuar, de hablar, de gesticular, del lenguaje que empleamos, etc. Aunque el traje seleccionado debe adecuarse a cada situación, es también muy importante la personalidad, ya que no a todo el mundo le quedan bien las mismas cosas. De igual manera, el que un determinado atuendo nos quede bien, no significa que podamos usarlo para cualquier ocasión.  Se debe tener en cuenta que nuestra presentación personal será vista como una proyección de la imagen de la empresa a la que pertenecemos. Muchas empresas que tienen uniformes exigen normas o reglas de etiqueta en su uso, debido a que estos representan su imagen. También aplican normas de etiqueta en los ascensores y lugares donde se reúnen sus colaboradores. Estas normas se emplean como cortesía en situaciones cotidianas y se aplican tanto dentro de la organización como fuera de ella.
              p Muchas empresas, de acuerdo con sus políticas organizacionales y su búsqueda de pertenencia y pertinencia, tienen manuales de convivencia para regular el comportamiento de los empleados en distintas situaciones, frente a diversas interacciones y propósitos. #[b En la etiqueta empresarial es importante tener en cuenta los siguientes aspectos:]
              p El tratamiento de “tú” y de “usted”; el primero más informal y familiar, usado entre compañeros del mismo rango, y el segundo más formal, para tratar con personas de mayor jerarquía dentro de la organización.
              p El tratamiento en la recepción de personalidades y autoridades es fundamental. Se debe saber tratar a cada persona en función de su cargo o su rango, por ejemplo: su majestad (en el caso de reyes), excelencia (para jefes de Estado), señoría, señor o señora. 

          .col-lg-4
            figure
              img(src='@/assets/curso/temas/tema2/img3.png')

    .row.justify-content-center.mt-5
      .col-lg-9.sm-8
        .cajon.color-acento-contenido.p-4
          b El siguiente video amplía el tema, aborda algunos principios de la etiqueta empresarial y los tipos de eventos más comunes en donde se aplican.
    
      .video.mt-5
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption   VIDEO
    
    .row.mt-5.justify-content-center
      .col-12
        .bloque-texto-g.color-primario.tarjetaimgcar.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img.carimg(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img7.svg')})`}"
          )
          .bloque-texto-g__texto2.p-4
            .col-lg-12
              p Estas normas abarcan tanto el comportamiento de la persona como su imagen o presentación. Es importante tener en cuenta las normas de etiqueta que hombres y mujeres deben seguir en un evento empresarial, puesto que la imagen corporativa es un factor relevante. A continuación, se dan a conocer algunos requisitos para tener presentes en la forma de vestir.

      b.mt-5 La etiqueta en la vestimenta del hombre debe tener en cuenta:

    .row.justify-content-center.align-items-center.my-lg-4
      .col-lg-5
        ImagenInfografica.color-primario
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema2/img8.png', alt='Texto que describa la imagen')

          .tarjeta.color-acento-contenido.p-4(x="56%" y="17%" numero="1")
            .col-lg-11
              p Higiene personal, que involucra cabello, barba o bigote, manos, uñas, dientes y buen olor.

          .tarjeta.color-acento-contenido.p-4(x="40%" y="24%" numero="2")
            .col-lg-10
              p El color del traje debe ser preferiblemente oscuro y de estilo clásico.

          .tarjeta.color-acento-contenido.p-4(x="60%" y="36%" numero="3")
            .col-lg-10 
              p Camisa bien presentada, de manga larga y colores básicos, preferiblemente sin estampados, solo con algunas líneas finas.

          .tarjeta.color-acento-contenido.p-4(x="42%" y="40%" numero="4")
            .col-lg-10 
              p La corbata debe estar en armonía con el vestido.

          .tarjeta.color-acento-contenido.p-4(x="43%" y="85%" numero="5")
            .col-lg-11
              p Zapatos y cinturón acordes con la ropa. Los zapatos deben estar limpios.

    .row.justify-content-center
      .col-lg-7
        .cajon.color-acento-contenido.p-3
          p.text-center #[b En cuanto a la mujer, las normas son similares:]

      b.mt-5 La etiqueta en la vestimenta de la mujer debe tener en cuenta:

    .row.justify-content-center.align-items-center.my-lg-4
      .col-lg-5
        ImagenInfografica.color-primario
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema2/img9.png', alt='Texto que describa la imagen')

          .tarjeta.color-acento-contenido.p-4(x="40%" y="7%" numero="1")
            .col-lg-11
              p Higiene personal, cabello limpio. Se recomienda que el pelo largo esté recogido.

          .tarjeta.color-acento-contenido.p-4(x="60%" y="14%" numero="2")
            .col-lg-10
              p Se recomienda uso de maquillaje muy discreto.

          .tarjeta.color-acento-contenido.p-4(x="64%" y="31%" numero="3")
            .col-lg-10 
              p Las manos deben tener una buena manicura y evitar colores muy llamativos en las uñas.

          .tarjeta.color-acento-contenido.p-4(x="43%" y="42%" numero="4")
            .col-lg-10 
              p El traje, preferiblemente clásico, puede ser pantalón o falda no muy ajustada, con chaqueta.

          .tarjeta.color-acento-contenido.p-4(x="60%" y="61%" numero="5")
            .col-lg-11
              p El color del vestuario no debe ser intenso.

          .tarjeta.color-acento-contenido.p-4(x="41%" y="93%" numero="6")
            .col-lg-11
              p El bolso y los zapatos deben ser acordes con el traje.

      
    .row.mt-5.justify-content-center
      .col-lg-6
        p En el siguiente video ‘Normas de etiqueta y protocolo’ (SENA, 2021), podrá ver con mayor claridad el concepto y diferencia entre etiqueta y protocolo: 

        .col-lg-12
          a.anexo.mb-4(href="https://www.youtube.com/watch?v=sBDvcLGFD3Y" target="_blank")
              .anexo__icono
                img(src="@/assets/curso/temas/tema2/img10.svg")
              .anexo__texto
                p.text-small #[b Enlace web.] Normas de etiqueta y protocolo’ (SENA, 2021)

      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema2/img11.png', alt='Texto que describa la imagen').imagen-deco

    .row.justify-content-around.align-items-centerrd.mt-5
          .col-10
            .tarjeta.color-primario.mt-2.p-3
              .row
                .col-lg-3
                  img(src='@/assets/curso/temas/tema1/img11.svg' width='200px' height='100px')
                .col-5
                  .row.justify-content-around.mt-3
                    .col.mb-4.mb-sm-0
                      h4 Anexo 2
                      p Etiqueta y protocolo, para complementar el tema

                    .col-lg-1
                      a.boton.color-acento-contenido.texto-blanco(:href="obtenerLink('/downloads/Anexo 2_ Etiqueta y protocolo.pdf')" target="_blank")
                        span Descargar
                        i.fas.fa-file-download


</template>

<script>
export default {
  name: 'Tema2',
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
