<template>
    <div class="row">
        <div class="col-8 d-flex flex-column justify-content-around">
            <h2>Redacciones</h2>
            <div v-for="item, i in items" :key="i">

                <h6>
                    {{ item.type }}
                </h6>
                <h4>
                    {{ item.title }}
                </h4>
                <p class="text-end text-0">
                    {{ item.for }}
                </p>
            </div>
        </div>
        <div class="col-4 d-flex">
            <img class="ms-auto w-75 radius" src="/src/assets/playa.jpg" alt="">
        </div>
    </div>
  <ul>
  </ul>
</template>

<script setup>
let items = [
    {
        type:"Investigación analítica",
        title:"“Contaminación en la Cuenca Matanza Riachuelo”",
        for: "Taller de Informática, Telemática y Datos. (UBA)",
        link: "https://anccom.sociales.uba.ar/2023/02/21/la-unica-salida-es-ezeiza/"
    },
    {
        type:"Investigación periodística",
        title:"“¿La única salida es ezeiza ?”",
        for:"Agencia de Noticias de la Carrera de Comunicación. (UBA)",
    }
]
</script>