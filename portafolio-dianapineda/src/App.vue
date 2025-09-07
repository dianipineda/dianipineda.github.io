<template>
  <div id="app">
    <nav class="navbar">
      <router-link to="/">Inicio</router-link>
      <router-link to="/portafolio">Portafolio</router-link>
      <router-link to="/contactame">Contáctame</router-link>
    </nav>
    <router-view></router-view>  <!-- Aquí se renderizan las páginas -->
  </div>
</template>

