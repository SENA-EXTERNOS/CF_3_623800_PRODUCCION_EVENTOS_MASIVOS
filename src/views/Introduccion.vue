<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-around.align-items-center.mt-3.mb-5
      .row.justify-content-around.align-items-center
        .col-lg-8
          .bloque-texto-b.color-cajon2.p-4
            .bloque-texto-b__texto
              p Apreciado aprendiz, bienvenido a este componente formativo. Aquí se abordará un asunto de gran importancia en el mundo de la organización de eventos: #[b el protocolo y la etiqueta.] El responsable de su producción debe estar familiarizado y manejar a la perfección todo lo relacionado con la aplicación de los protocolos y reglas de etiqueta, según la naturaleza de cada tipo de evento, y ser capaz de reconocer las clases de ceremonias que se pueden desarrollar. Se espera que, al finalizar esta etapa de formación, cuente con los conocimientos y las habilidades necesarias para que los eventos que estén bajo su coordinación se destaquen por la excelente aplicación de estas técnicas.
            p.mt-5 Para ampliar la visión de lo que será esta experiencia de aprendizaje, en la que la motivación e interés serán claves, le invitamos a ver el siguiente video y a disfrutar de esta interesante temática. #[b Le deseamos éxito en su desarrollo.]

        .col-lg-4
          figure
            img(src='@/assets/curso/temas/introduccion/img1.png', alt='Texto que describa la imagen').imagen-deco

      .col-lg-6.mt-3
       figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
