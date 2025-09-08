<template>
  <div class="portafolio">
    <h1>Portafolio</h1>
    <Galleria
      :value="images"
      :numVisible="8"
      :showThumbnails="false"
      :showIndicators="true"
      :showNavigators="false"
      indicatorsPosition="bottom"
    >
      <template #item="slotProps">
        <div class="p-galleria-item-wrapper">
          <img
            :src="slotProps.item.itemImageSrc"
            :alt="slotProps.item.alt"
            class="galleria-img"
          />
        </div>
      </template>
    </Galleria>
  </div>
</template>

<script>
import Galleria from 'primevue/galleria';

export default {
  components: { Galleria },
  data() {
    return {
      images: [
        { itemImageSrc: '/public/ingesta_datalake.svg', alt: 'Imagen SVG 1' },
        { itemImageSrc: '/public/integracion_consumo_combustible.svg', alt: 'Imagen SVG 2' },
        { itemImageSrc: '/public/integracion_datos_conductor_a_documento.svg', alt: 'Imagen SVG 3' },
        { itemImageSrc: '/public/integracion_ditribucion_costos_labor.svg', alt: 'Imagen SVG 4' },
        { itemImageSrc: '/public/integracion_novedades_nomina.svg', alt: 'Imagen SVG 5' },
        { itemImageSrc: '/public/integracion_precipitacion_granjas.svg', alt: 'Imagen SVG 6' },
        { itemImageSrc: '/public/integracion_productividad_granjas.svg', alt: 'Imagen SVG 7' },
        { itemImageSrc: '/public/integracion_productividad_maquinaria.svg', alt: 'Imagen SVG 8' }
      ]
    };
  }
};
</script>

<style>
.portafolio {
  text-align: center;
  padding: 2rem 1rem;
  width: 100%;
  margin: 0 auto;
  /*nuevo*/
  justify-content: center; 
  align-items: center; 
}

/* 🎯 Estilos para los indicadores */
.p-galleria-indicators {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 1.5rem;
}

.p-galleria-indicator {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #ddd;
  transition: all 0.3s ease;
  cursor: pointer;
  border: none;
}

.p-galleria-indicator.p-highlight {
  background: #007bff; /* azul activo */
  transform: scale(1.3);
  box-shadow: 0 0 8px rgba(0, 123, 255, 0.6);
}

.p-galleria-indicators,
.p-galleria-indicator-list,
.p-galleria .p-galleria-indicator-list {
  display: flex;
  gap: 12px;
  justify-content: center;
  align-items: center;
  padding:12px;
}

/* Contenedor de los ítems */
.p-galleria-item-wrapper {
  aspect-ratio: 16 / 9;  /* proporción estándar */
  width: 100%;
  max-height: 80vh;      /* opcional: evita que sea demasiado alto en pantallas grandes */
  overflow: hidden;      /* recorta exceso */
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.galleria-img {
  width: 100%;
  height: 100%;
  object-fit: cover;  /* rellena el contenedor sin deformarse */
  display: block;
}
</style>
