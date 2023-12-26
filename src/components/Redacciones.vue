<template>
    <div class="row">
        <div class="col-8 d-flex flex-column justify-content-around">
            <h2>Redacciones</h2>
            <div v-for="item, i in items" :key="i">
                <div v-if="item.type != 'hr'">
                    <h6>
                        {{ item.type }}
                    </h6>
                    <div class="d-flex justify-content-between">
                        <h4>
                            {{ item.title }}
                        </h4>
                        <a v-if="item.link" :href="item.link" target="_blank" rel="noopener noreferrer">
                            <Icon icon="link" size="lg"/>
                        </a>
                    </div>
                    <p class="text-end text-0">
                        {{ item.for }}
                    </p>
                </div>
                <hr v-else class="w-75 m-auto">
            </div>
        </div>
        <div class="col-4 d-flex">
            <img class="ms-auto w-75 radius" src="/src/assets/playa.jpg" alt="">
        </div>
    </div>
    
</template>

<script setup>
import Icon from "@/components/icons.vue";
let items = [
    {
        type:"Investigación analítica",
        title:"“Contaminación en la Cuenca Matanza Riachuelo”",
        for: "Taller de Informática, Telemática y Datos. (UBA)",
        link: "https://anccom.sociales.uba.ar/2023/02/21/la-unica-salida-es-ezeiza/"
    },
    {
        type:"hr"
    },
    {
        type:"Investigación periodística",
        title:"“¿La única salida es ezeiza ?”",
        for:"Agencia de Noticias de la Carrera de Comunicación. (UBA)",
    }
]
</script>