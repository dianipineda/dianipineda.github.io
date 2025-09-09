<template>
  <div class="contactame">
    <h1>Hablemos de datos</h1>
    <p class="descripcion">
      Puedes escribirme por correo, conectar en LinkedIn, explorar mis proyectos en GitHub 
      o enviarme un mensaje directo por WhatsApp
    </p>

    <div class="iconos">
      <!-- Correo -->
      <a href="mailto:tuemail@ejemplo.com" class="icon email">
        <i class="pi pi-envelope"></i>
      </a>

      <!-- LinkedIn -->
      <a href="https://www.linkedin.com/in/tuusuario" target="_blank" class="icon linkedin">
        <i class="pi pi-linkedin"></i>
      </a>

      <!-- GitHub -->
      <a href="https://github.com/tuusuario" target="_blank" class="icon github">
        <i class="pi pi-github"></i>
      </a>

      <!-- WhatsApp -->
      <a href="https://wa.me/573000000000" target="_blank" class="icon whatsapp">
        <i class="pi pi-whatsapp"></i>
      </a>
    </div>
  </div>
</template>

<style scoped>
.contactame {
  text-align: center;
  padding: 2rem 1rem;
  max-width: 600px;
  margin: 0 auto;
}

.contactame h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #fff; /* o #222 si fondo claro */
}

.contactame .descripcion {
  font-size: 1.1rem;
  color: #ccc;
  margin-bottom: 2rem;
}

/* Íconos */
.iconos {
  display: flex;
  justify-content: center;
  gap: 2rem; /* separación entre iconos */
}

.iconos i {
  font-size: 2.5rem;
  color: #007bff; /* color base */
  transition: transform 0.3s ease, color 0.3s ease;
}

/* Hover con colores oficiales */
.icon.email:hover i {
  color: #d44638; /* Gmail rojo */
}

.icon.linkedin:hover i {
  color: #0077b5; /* LinkedIn azul */
}

.icon.github:hover i {
  color: #333; /* GitHub gris oscuro */
}

.icon.whatsapp:hover i {
  color: #25d366; /* WhatsApp verde */
}

.iconos i:hover {
  transform: scale(1.2);
}
</style>
