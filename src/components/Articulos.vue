<template>
    <div class="row">
        <div class="col-3" v-for="articulo,i in useDataStore().articulos" :key="i">
            title:{{ articulo.title }} <br>
            date:{{ articulo.date }} <br>
            by:{{ articulo.by }} <br>
            link:{{ articulo.link }} <br>
            photography:{{ articulo.photography }} <br>
            subtitle:{{ articulo.subtitle }} <br>
            description:{{ articulo.description }} <br>
            site:{{ articulo.site }} <br> <br> <br>
        </div>
    </div>
</template>

<script setup>
import { useDataStore } from '@/stores/data'
import { ref, onMounted } from 'vue'

onMounted(async () => {
    await useDataStore().fetchArticulos()
})
</script>

<style>

</style>