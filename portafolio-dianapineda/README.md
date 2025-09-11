# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).


# -------------------------------------------------------------------------------------------
# Requisitos necesarios para correr el proyecto en Windows
- Descargar Node.js: 
  descargar de pagina oficial: https://nodejs.org/en/download/
  dar clic en el instalador de Windows Installer (.msi)
- verificar la instalación:
  node -v
  npm -v
- Navegar al directorio del proyecto:
  cd .\dianipineda.github.io\portafolio-dianapineda

    Nota: cuando se creo el proyecto con el siguiente comando, se indico la necesidad de instalar vue.js y vite 
    npm create vite@latest . -- --template vue

- Instalar vue.js y vite:
npm install

- Instalar Vue Router:
npm install vue-router@4

- Instalar PrimeVue, PrimeIcons, temas, y el componente Galleria:
npm install primevue@latest primeicons@latest @primevue/themes@latest
              
# -------------------------------------------------------------------------------------------
# Requisitos basicos para correr el proyecto en Linux Ubuntu
- sudo apt update
- sudo apt upgrade
- verificar si curl ya esta instalado: curl --version
  si no: sudo apt install curl
- agregar el repositorio de NodeSource: 
curl -fsSL https://deb.nodesource.com/setup_lts.x  | sudo -E bash -
ó
curl -kfsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
Nota: setup_18.x
- instalar nodejs y npm: sudo apt install nodejs
- verificar la instalacion:
  node -v 
  npm -v
- pararse en la ruta dentro de ./dianipineda.github.io/portafolio-dianapineda
- instalar dependencias: npm install
  nota: si el comando anterior no responde:
    diagnostico: npm install --verbose
  nota: si el diagnostico no es claro, limpiar caché: npm cache clean --force
  nota: si se tiene inconvenientes con el certificado, ejecutar:
  npm config set strict-ssl false
  
  luego volver a ejecutar: npm install
- instalar librerias adicionales:
  instalar Vue Router: npm install vue-router@4
  instalar PrimeVue y dependiencias: npm install primevue@latest primeicons@latest @primevue/themes@latest

# -------------------------------------------------------------------------------------------
# Levantar proyecto en servidor de desarrollo
- iniciar servidor de desarrollo: 
en la terminal de vscode dentro de ./dianipineda.github.io/portafolio-dianapineda:
npm run dev

# -------------------------------------------------------------------------------------------
# Construir y desplegar el proyecto en GitHub:
- Instalar el paquete gh-pages para publicar automaticamente en github:
npm install gh-pages --save-dev

- Desplegar el proyecto:
Limpiar la cache del build
  Para Windows: Remove-Item -Recurse -Force .\dist  
  Para Linux: rm -rf dist    
  npm run build
  npm run deploy
- Listo !    


Nota:
En GitHub, en Settings > Pages, verifica que la rama sea main (o gh-pages) y la carpeta sea / (root) o /dist.
Visita https://dianipineda.github.io/portafolio-dianapineda/ (o https://dianipineda.github.io/) tras unos minutos.

