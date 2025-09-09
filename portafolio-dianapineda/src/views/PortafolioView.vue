<template>
  <div class="portafolio">
    <h1>Soluciones</h1>
    <Galleria
      v-model="activeIndex"
      :value="images"
      :numVisible="8"
      :showThumbnails="false"
      :showIndicators="true"
      :showNavigators="false"
      indicatorsPosition="bottom"
    >
      <!-- Imagen -->
      <template #item="slotProps">
        <div class="p-galleria-item-wrapper">
          <Image
            :src="slotProps.item.itemImageSrc"
            :alt="slotProps.item.alt"
            preview
            class="galleria-img"
          />
        </div>
      </template>
    </Galleria>

    <!-- Leyenda -->
    <p class="galleria-caption">
      {{ images[activeIndex]?.caption }}
    </p>

    <!-- Galería secundaria autoplay -->
    <Galleria
      :value="secondaryImages"
      :numVisible="8"
      :showThumbnails="false"
      :showIndicators="false"
      :showNavigators="false"
      :autoPlay="true"
      :circular="true"
      :transitionInterval="1500"
      containerStyle="max-width: 80px; height: auto; margin: 0 auto; display: block;"
    >
      <template #item="slotProps">
        <img
          :src="slotProps.item.itemImageSrc"
          :alt="slotProps.item.alt"
          style="width: 100%; display: block; border-radius: 8px;"
        />
      </template>
    </Galleria>
  </div>
</template>

<script>
import Galleria from 'primevue/galleria';
import Image from 'primevue/image';

export default {
  components: { Galleria, Image },
  data() {
    return {
      activeIndex: 0, // índice actual de la galería
      images: [
        { itemImageSrc: '/public/ingesta_datalake.svg', alt: 'Imagen SVG 1', caption: 'Diseño e implementación de flujo de datos para Big Data' },
        { itemImageSrc: '/public/integracion_consumo_combustible.svg', alt: 'Imagen SVG 2', caption: 'Automatización de datos entre APIs y Bases de datos'  },
        { itemImageSrc: '/public/integracion_datos_conductor_a_documento.svg', alt: 'Imagen SVG 3', caption: 'Automatización de datos entre APIs y Bases de datos'  },
        { itemImageSrc: '/public/integracion_ditribucion_costos_labor.svg', alt: 'Imagen SVG 4', caption: 'Automatización de datos entre diferentes motores de Bases de datos'  },
        { itemImageSrc: '/public/integracion_novedades_nomina.svg', alt: 'Imagen SVG 5', caption: 'Automatización de datos para archivos planos'  },
        { itemImageSrc: '/public/integracion_precipitacion_granjas.svg', alt: 'Imagen SVG 6', caption: 'Automatización de datos entre APIs y Bases de datos'  },
        { itemImageSrc: '/public/integracion_productividad_granjas.svg', alt: 'Imagen SVG 7', caption: 'Automatización de datos entre APIs y Bases de datos'  },
        { itemImageSrc: '/public/integracion_productividad_maquinaria.svg', alt: 'Imagen SVG 8', caption: 'Automatización de datos entre APIs y Bases de datos'  }
      ],
      secondaryImages: [
        { itemImageSrc: '/public/python-3-logo-svgrepo-com.svg', alt: 'Python' },
        { itemImageSrc: '/public/oracle-svgrepo-com.svg', alt: 'Oracle' },
        { itemImageSrc: '/public/microsoft-sql-server-logo-svgrepo-com.svg', alt: 'SQL Server' },
        { itemImageSrc: '/public/docker-svgrepo-com.svg', alt: 'Docker' },
        { itemImageSrc: '/public/postgresql-horizontal.svg', alt: 'Postgresql' },
        { itemImageSrc: '/public/kafka-svgrepo-com.svg', alt: 'Kafka' },
        { itemImageSrc: '/public/apache-airflow-svgrepo-com.svg', alt: 'Airflow' },
        { itemImageSrc: '/public/apachespark-svgrepo-com.svg ', alt: 'Spark' }
      ]
    };
  }
};
</script>

<style>
.portafolio {
  text-align: center;
  padding: 2.3rem 1rem;
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

.p-galleria-indicator > button {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #ddd;
  transition: all 0.3s ease;
  cursor: pointer;
  border: none;
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

.p-galleria-item-wrapper .p-image {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 80vh;         /* altura fija de la galería */
  max-width: 1200px;    /* opcional: ancho máximo */
  margin: 0 auto;       /* centra el contenedor en la página */
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  background-color: #242424; /* fondo negro para los espacios sobrantes */
  overflow: hidden;
}

.p-galleria-item-wrapper .p-image img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;   /* 🔑 la imagen nunca se recorta */
  border-radius: 12px;   /* opcional: bordes redondeados */
}

.p-galleria .p-galleria-indicator-active .p-galleria-indicator-button {
  background: #eab676;
}

.galleria-img {
  width: 100%;
  height: 100%;
  object-fit: cover;  /* rellena el contenedor sin deformarse */
  display: block;
}

/* Estilos de la leyenda */
.galleria-caption {
  margin-top: 0.1rem;
  font-size: 1.2rem;
  font-weight: 500;
  color: #c4c4c4;
}
</style>
