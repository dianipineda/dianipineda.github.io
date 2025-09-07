<template>
  <div class="portafolio">
    <h1>Portafolio</h1>
    <Galleria
      :value="images"
      :numVisible="5"
      containerStyle="max-width: 640px; margin: 0 auto;"
      :showThumbnails="false"
      :showIndicators="true"
      :changeItemOnIndicatorHover="true"
      showIndicatorsOnItem="inside"
      indicatorsPosition="bottom"
    >
      <template #item="slotProps">
        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
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
        // Añade más imágenes aquí
      ]
    };
  }
};
</script>

<style scoped>
.contactame {
  text-align: center;
  padding: 3rem 1rem;
  max-width: 800px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 1.5rem;
  text-align: left;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

label {
  display: block;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: #333;
}

input,
textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

input:focus,
textarea:focus {
  border-color: #007bff;
  outline: none;
}

textarea {
  min-height: 100px;
  resize: vertical;
}

button {
  background-color: #007bff;
  color: #fff;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}
</style>