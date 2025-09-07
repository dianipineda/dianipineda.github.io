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

<style>
.navbar { background: #f8f9fa; padding: 10px; text-align: center; }
.navbar a { margin: 0 15px; text-decoration: none; color: #333; }
.navbar a:hover { color: #007bff; }
</style>