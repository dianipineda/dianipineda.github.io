# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).

# https://primevue.org/galleria/
# Construye el proyecto:
bashnpm run build

Despliega:

Para dianipineda.github.io:
bashxcopy dist\* . /E /Y
git add .
git commit -m "Navbar fija y centrada con estilo minimalista"
git push origin main

Para portafolio-dianapineda:
bashnpm install --save-dev gh-pages
Añade a package.json en "scripts":
json"deploy": "gh-pages -d dist"
Despliega:
bashnpm run deploy



En GitHub, en Settings > Pages, verifica que la rama sea main (o gh-pages) y la carpeta sea / (root) o /dist.
Visita https://dianipineda.github.io/portafolio-dianapineda/ (o https://dianipineda.github.io/) tras unos minutos.

9. Preguntas y siguientes pasos

¿Confirmaste que styles.css está en src/ y se importa correctamente en main.js? Si el error persiste, verifica la ruta exacta del archivo.
¿Ves la navbar fija y centrada en http://localhost:5173? Si no, ¿qué ves o qué errores aparecen en la consola (F12)?
¿Tienes SVGs en public/? Si no, ¿necesitas ayuda para crearlos?
¿Quieres más personalización? Por ejemplo:

Hacer el formulario de ContactameView.vue funcional (con Formspree u otro servicio).
Añadir animaciones a la navbar o galería.
Cambiar el color de acento (#007bff) o ajustar el espaciado.



Prueba estos pasos y dime cómo se ve el sitio. Si hay errores (en la consola o la terminal), compártelos para resolverlos rápido. ¡Vamos a asegurarnos de que tu navbar quede perfecta y el sitio mantenga el estilo minimalista moderno!


# comandos necesarios:
Navega al directorio del proyecto:
bashcd D:\Projects\dianipineda.github.io\portafolio-dianapineda

Instala Node.js dependencias básicas (si no están instaladas):
bashnpm install

Instala Vue.js y Vite (si el proyecto no está creado):
bashnpm create vite@latest . -- --template vue
npm install

Instala Vue Router:
bashnpm install vue-router@4

Instala PrimeVue, PrimeIcons, temas, y el componente Galleria:
bashnpm install primevue@latest primeicons @primevue/themes


Estos comandos instalan Node.js, las dependencias de Vue, Vue Router, PrimeVue, los íconos, los temas, y el componente Galleria. Asegúrate de que src/main.js importe styles.css y que los SVGs estén en public/. Si necesitas ayuda con la configuración de archivos o más pasos, ¡avísame!