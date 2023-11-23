<template>
    <h2>Redacciones</h2>
  <ul>
    <li v-for="item,i in items" :key="i">
        {{ item }}
    </li>
  </ul>
</template>

<script setup>
let items = [
    'Participé de la investigación analítica sobre la contaminación en la Cuenca Matanza Riachuelo en el Taller de Informática, Telemática y Datos. (UBA)',
    'Publique la investigación periodística “¿La única salida es ezeiza ?” en la Agencia de Noticias de la Carrera de Comunicación. (UBA)',
    'Redacte una serie autobiográfica, dos cuentos propios y el ensayo de entrevistas periodísticas. (UBA)',
]

</script>

<style>

</style>