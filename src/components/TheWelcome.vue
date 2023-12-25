<script setup>
import Icon from "@/components/icons.vue";
import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="row align-items-center">
        <div class="col-2 d-flex justify-content-center align-items-center">
            <img class="w-75" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/271deea8-e28c-41a3-aaf5-2913f5f48be6/de7834s-6515bd40-8b2c-4dc6-a843-5ac1a95a8b55.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI3MWRlZWE4LWUyOGMtNDFhMy1hYWY1LTI5MTNmNWY0OGJlNlwvZGU3ODM0cy02NTE1YmQ0MC04YjJjLTRkYzYtYTg0My01YWMxYTk1YThiNTUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BopkDn1ptIwbmcKHdAOlYHyAOOACXW0Zfgbs0-6BY-E" alt="">    
        </div>
        <div class="col-8">
            <h1>Delfina Barczak</h1>
            <p class="mb-0">Estudiante de Comunicación Social, UBA. Experiencia en comunicación, redacción, investigación, difusión y diseño de contenido audiovisual. Me apasionan el cine, la fotografía y la escritura. El futuro es la juventud feminista.</p>
        </div>
        <div class="col-2">
            <div class="d-flex justify-content-around">
                <a href="https://www.linkedin.com/in/delfina-barczak/">
                    <Icon icon="linkedin" size="lg"/>
                </a>
                <a href="https://www.instagram.com/delfibarczak/">
                    <Icon icon="instagram" size="lg"/>
                </a>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-6 py-2" v-for="route, i in useDataStore().routes" :key="i">
            <RouterLink :to="route.path">
                <div  class="border p-2 text-center rounded text-uppercase fw-bold">
                    {{ route.name }}
                </div>
            </RouterLink>
        </div>
    </div>
</template>
<script>
import { useDataStore } from '@/stores/data'
</script>
<style lang="scss" scoped>
.banner{
    .banner-img{
        position: absolute;
        background: url('/banner.jpg');
        width: 100vw;
        height: 200px;
        background-size: cover;
    }
    height: 200px;
    z-index: 0;
}
</style>