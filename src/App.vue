<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <nav>
        <RouterLink to="/">Inicio</RouterLink>
        <RouterLink to="#articulos">Articulos</RouterLink>
        <RouterLink to="#redacciones">Redacciones</RouterLink>
        <RouterLink to="#contenido-digital">Contenido digital</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>
