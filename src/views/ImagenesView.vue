<template>
    <main>

        <h2>Imagenes</h2>
        <div class="container-manson pt-4">
            <div class="block" v-for="i in 5" :key="i">
            <!-- <a v-if="articulo.type == 'article'" class="content scale-hover articulo-card radius p-2" :href="articulo.link"
                target="_blank">
                <div class="a-articulos p-2">
                    <h4>
                        {{ articulo.title }}
                    </h4>
                    <p>
                        {{ articulo.description }}
                    </p>
                    <hr>
                    <p class="text-end mb-0">
                        {{ articulo.site }}
                    </p>
                </div>
            </a> -->
            <div class="content articulo-card scale-hover radius overflow-hidden">
                <img class="w-100" :src="'/src/assets/' + i+'.jpg'" alt="">
            </div>
        </div>
    </div>
</main>
</template>

<script setup>
import { useDataStore } from '@/stores/data'
import { ref, onMounted } from 'vue'

onMounted(async () => {
    await useDataStore().fetchArticulos()
})
</script>

<style lang="scss" scoped>
.a-articulos {
    text-decoration: none;
    //color: initial;
}

.articulo-card {
    border: 1px solid $c1;
    //box-shadow: 0px 0px 10px 0px #88888888;
}

img {
    max-width: 100%;
    display: block;
}

.block {
    margin: 0;
    display: grid;
    grid-template-rows: 1fr auto;
    margin-bottom: 10px;
    break-inside: avoid;
}

.block>img {
    grid-row: 1 / -1;
    grid-column: 1;
}

.block a {
    color: #fff !important;
    text-decoration: none;
}


.container-manson {
    column-count: 2;
    column-gap: 10px;
}

@media (max-width:400px) {
    .container-manson {
        column-count: 1;
        //column-gap: 10px;
    }
}
</style>